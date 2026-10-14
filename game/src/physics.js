// Lightweight kinematic collision world for a platformer.
// Colliders are axis-aligned boxes; a box may be a "ramp" whose top surface varies
// linearly along X or Z. Static colliders live in a uniform XZ grid; dynamic ones
// (moving platforms, blocks that can disappear) are checked individually.

const CELL = 8;

export class Collider {
  constructor(minX, minY, minZ, maxX, maxY, maxZ, opts = {}) {
    this.min = { x: minX, y: minY, z: minZ };
    this.max = { x: maxX, y: maxY, z: maxZ };
    this.ramp = opts.ramp || null; // { axis:'x'|'z', h0, h1 } (top at min side = h0)
    this.oneWay = !!opts.oneWay;
    this.dynamic = !!opts.dynamic;
    this.active = opts.active !== undefined ? opts.active : true;
    this.solidWalls = opts.solidWalls !== undefined ? opts.solidWalls : true;
    this.headOnly = !!opts.headOnly; // invisible blocks: only hit from below
    this.surface = opts.surface || 'normal'; // 'normal'|'ice'|'bounce'
    this.owner = opts.owner || null; // entity receiving onHeadHit / onLand / onSideHit
    this.delta = { x: 0, y: 0, z: 0 }; // movement this frame (dynamic)
  }

  topAt(x, z) {
    if (!this.ramp) return this.max.y;
    const r = this.ramp;
    let t;
    if (r.axis === 'x') t = (x - this.min.x) / (this.max.x - this.min.x);
    else t = (z - this.min.z) / (this.max.z - this.min.z);
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return r.h0 + (r.h1 - r.h0) * t;
  }

  slope() {
    if (!this.ramp) return { x: 0, z: 0 };
    const r = this.ramp;
    if (r.axis === 'x') return { x: (r.h1 - r.h0) / (this.max.x - this.min.x), z: 0 };
    return { x: 0, z: (r.h1 - r.h0) / (this.max.z - this.min.z) };
  }

  moveTo(cx, cy, cz) {
    // re-centres a dynamic collider (cy = top surface height), recording the delta
    const hx = (this.max.x - this.min.x) / 2, hz = (this.max.z - this.min.z) / 2, h = this.max.y - this.min.y;
    const ox = (this.min.x + this.max.x) / 2, oy = this.max.y, oz = (this.min.z + this.max.z) / 2;
    this.delta.x = cx - ox; this.delta.y = cy - oy; this.delta.z = cz - oz;
    this.min.x = cx - hx; this.max.x = cx + hx;
    this.min.z = cz - hz; this.max.z = cz + hz;
    this.max.y = cy; this.min.y = cy - h;
  }

  overlapsCircle(x, z, r) {
    const cx = x < this.min.x ? this.min.x : x > this.max.x ? this.max.x : x;
    const cz = z < this.min.z ? this.min.z : z > this.max.z ? this.max.z : z;
    const dx = x - cx, dz = z - cz;
    return dx * dx + dz * dz < r * r;
  }

  containsPoint(x, y, z) {
    if (x < this.min.x || x > this.max.x || z < this.min.z || z > this.max.z || y < this.min.y) return false;
    return y < this.topAt(x, z);
  }
}

export class World {
  constructor() {
    this.grid = new Map();
    this.statics = [];
    this.dynamics = [];
    this.stamp = 0;
    this.tmp = [];
  }

  key(ix, iz) { return ix * 73856093 ^ iz * 19349663; }

  add(c) {
    if (c.dynamic) { this.dynamics.push(c); return c; }
    this.statics.push(c);
    c._stamp = 0;
    const x0 = Math.floor(c.min.x / CELL), x1 = Math.floor(c.max.x / CELL);
    const z0 = Math.floor(c.min.z / CELL), z1 = Math.floor(c.max.z / CELL);
    for (let ix = x0; ix <= x1; ix++) {
      for (let iz = z0; iz <= z1; iz++) {
        const k = this.key(ix, iz);
        let cell = this.grid.get(k);
        if (!cell) { cell = []; this.grid.set(k, cell); }
        cell.push(c);
      }
    }
    return c;
  }

  remove(c) {
    c.active = false;
    const i = this.dynamics.indexOf(c);
    if (i >= 0) this.dynamics.splice(i, 1);
  }

  box(minX, minY, minZ, maxX, maxY, maxZ, opts) {
    return this.add(new Collider(minX, minY, minZ, maxX, maxY, maxZ, opts));
  }

  // Colliders whose XZ footprint is near (x,z) within r. Reuses an internal array.
  query(x, z, r) {
    const out = this.tmp; out.length = 0;
    this.stamp++;
    const x0 = Math.floor((x - r) / CELL), x1 = Math.floor((x + r) / CELL);
    const z0 = Math.floor((z - r) / CELL), z1 = Math.floor((z + r) / CELL);
    for (let ix = x0; ix <= x1; ix++) {
      for (let iz = z0; iz <= z1; iz++) {
        const cell = this.grid.get(this.key(ix, iz));
        if (!cell) continue;
        for (let i = 0; i < cell.length; i++) {
          const c = cell[i];
          if (c._stamp === this.stamp || !c.active) continue;
          c._stamp = this.stamp;
          if (c.overlapsCircle(x, z, r)) out.push(c);
        }
      }
    }
    for (let i = 0; i < this.dynamics.length; i++) {
      const c = this.dynamics[i];
      if (c.active && c.overlapsCircle(x, z, r)) out.push(c);
    }
    return out;
  }

  // Highest walkable surface under (x,z) that is not above maxY. Returns {y, c} or null.
  ground(x, z, r, maxY) {
    const list = this.query(x, z, r);
    let best = null, by = -Infinity;
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (c.headOnly) continue;
      const top = c.topAt(x, z);
      if (top <= maxY && top > by) { by = top; best = c; }
    }
    return best ? { y: by, c: best } : null;
  }

  pointSolid(x, y, z) {
    const list = this.query(x, z, 0.01);
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (c.oneWay || c.headOnly) continue;
      if (c.containsPoint(x, y, z)) return true;
    }
    return false;
  }

  // Ray-march along a segment; returns fraction [0..1] of the first solid hit (1 = clear).
  raySolid(ax, ay, az, bx, by, bz, steps = 10) {
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      if (this.pointSolid(ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t)) return (i - 1) / steps;
    }
    return 1;
  }

  /**
   * Moves a character body {pos, vel, radius, height, grounded, ground} for dt seconds.
   * Returns contact events: { landed, headHit:[colliders], sideHit:[colliders] }.
   */
  moveBody(b, dt, events) {
    events.landed = false;
    events.headHit.length = 0;
    events.sideHit.length = 0;
    const step = b.grounded ? 0.55 : 0.25;

    // ride dynamic platforms
    if (b.grounded && b.ground && b.ground.dynamic) {
      b.pos.x += b.ground.delta.x; b.pos.y += b.ground.delta.y; b.pos.z += b.ground.delta.z;
    }

    const sp = Math.hypot(b.vel.x, b.vel.z) * dt;
    const n = Math.max(1, Math.min(10, Math.ceil(sp / 0.3)));
    const sdt = dt / n;
    const wasGrounded = b.grounded;
    let groundVy = 0;

    for (let s = 0; s < n; s++) {
      // ---- horizontal ----
      b.pos.x += b.vel.x * sdt;
      b.pos.z += b.vel.z * sdt;
      const list = this.query(b.pos.x, b.pos.z, b.radius + 0.05);
      for (let i = 0; i < list.length; i++) {
        const c = list[i];
        if (c.oneWay || c.headOnly || !c.solidWalls) continue;
        if (c.min.y >= b.pos.y + b.height - 0.05) continue; // above head
        const top = c.topAt(b.pos.x, b.pos.z);
        if (top <= b.pos.y + step) continue; // walkable / step-up
        // wall: push circle out of the rectangle
        const cx = Math.max(c.min.x, Math.min(b.pos.x, c.max.x));
        const cz = Math.max(c.min.z, Math.min(b.pos.z, c.max.z));
        let dx = b.pos.x - cx, dz = b.pos.z - cz;
        const d = Math.hypot(dx, dz);
        if (d > 1e-5) {
          if (d >= b.radius) continue;
          const push = b.radius - d; dx /= d; dz /= d;
          b.pos.x += dx * push; b.pos.z += dz * push;
          const vn = b.vel.x * dx + b.vel.z * dz;
          if (vn < 0) { b.vel.x -= vn * dx; b.vel.z -= vn * dz; }
          events.sideHit.push(c);
        } else {
          // centre inside: exit through nearest face
          const l = b.pos.x - c.min.x, r = c.max.x - b.pos.x, f = b.pos.z - c.min.z, k = c.max.z - b.pos.z;
          const m = Math.min(l, r, f, k);
          if (m === l) { b.pos.x = c.min.x - b.radius; if (b.vel.x > 0) b.vel.x = 0; }
          else if (m === r) { b.pos.x = c.max.x + b.radius; if (b.vel.x < 0) b.vel.x = 0; }
          else if (m === f) { b.pos.z = c.min.z - b.radius; if (b.vel.z > 0) b.vel.z = 0; }
          else { b.pos.z = c.max.z + b.radius; if (b.vel.z < 0) b.vel.z = 0; }
          events.sideHit.push(c);
        }
      }
      // ---- step up / follow ground while grounded ----
      if (b.grounded) {
        const g = this.ground(b.pos.x, b.pos.z, b.radius * 0.6, b.pos.y + step);
        if (g && g.y >= b.pos.y - 0.7 && b.vel.y <= 0.01) {
          groundVy += (g.y - b.pos.y) / dt;
          b.pos.y = g.y; b.ground = g.c;
        } else {
          b.grounded = false; b.ground = null;
        }
      }
    }

    // ---- vertical ----
    if (!b.grounded) {
      if (wasGrounded && b.vel.y <= 0 && groundVy > 0.5) {
        // running off the top of a ramp keeps the upward momentum
        b.vel.y = groundVy;
      }
      const oldY = b.pos.y;
      b.pos.y += b.vel.y * dt;
      if (b.vel.y > 0) {
        const list = this.query(b.pos.x, b.pos.z, b.radius * 0.75);
        for (let i = 0; i < list.length; i++) {
          const c = list[i];
          if (c.oneWay) continue;
          const headOld = oldY + b.height, headNew = b.pos.y + b.height;
          if (c.min.y >= headOld - 0.25 && c.min.y <= headNew) {
            b.pos.y = c.min.y - b.height - 0.01;
            b.vel.y = 0;
            events.headHit.push(c);
          }
        }
      } else {
        const g = this.ground(b.pos.x, b.pos.z, b.radius * 0.6, Math.max(oldY, b.pos.y) + 0.25);
        if (g && b.pos.y <= g.y && (!g.c.oneWay || oldY >= g.y - 0.15)) {
          b.pos.y = g.y; b.vel.y = 0; b.grounded = true; b.ground = g.c;
          events.landed = true;
        }
      }
    }
    b.groundVy = groundVy;
    return events;
  }
}
