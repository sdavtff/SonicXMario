// Interactive level objects.
import * as THREE from 'three';
import { GEO, buildItem, buildMedal, buildRingGeo, buildCoinGeo, STAR_GEO } from './models.js';
import { toon, lambert, basic, tex } from './materials.js';
import { audio } from './audio.js';
import { clamp } from './util.js';

// Player-vs-sphere overlap (player is a vertical capsule ~1.6 tall).
export function touches(player, x, y, z, r) {
  const p = player.pos;
  const dx = p.x - x, dz = p.z - z;
  const rr = r + player.body.radius;
  if (dx * dx + dz * dz > rr * rr) return false;
  return y + r > p.y && y - r < p.y + player.body.height;
}

function addMesh(scene, geo, mat, x, y, z, sx = 1, sy = sx, sz = sx, shadow = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z); m.scale.set(sx, sy, sz);
  m.castShadow = shadow; m.receiveShadow = shadow;
  scene.add(m);
  return m;
}

// ------------------------------------------------------------ rings & coins
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Euler();
export class Pickups {
  constructor(game) {
    this.game = game;
    this.items = []; // {x,y,z,type:0 ring|1 coin, taken}
    this.t = 0;
  }
  add(type, x, y, z) { this.items.push({ x, y, z, type, taken: false }); }
  finalize() {
    const g = this.game;
    const rings = this.items.filter((i) => i.type === 0), coins = this.items.filter((i) => i.type === 1);
    this.rings = rings; this.coins = coins;
    if (rings.length) {
      this.ringMesh = new THREE.InstancedMesh(buildRingGeo(), toon(0xffcc22, { emissive: 0x6a4a00 }), rings.length);
      g.scene.add(this.ringMesh);
    }
    if (coins.length) {
      this.coinMesh = new THREE.InstancedMesh(buildCoinGeo(), toon(0xffc414, { emissive: 0x5a3a00 }), coins.length);
      g.scene.add(this.coinMesh);
    }
    for (const m of [this.ringMesh, this.coinMesh]) if (m) { m.castShadow = false; m.frustumCulled = false; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); }
    this.total = { rings: rings.length, coins: coins.length };
  }
  update(dt) {
    this.t += dt;
    const p = this.game.player;
    const pc = p.alive ? p.pos : null;
    const sets = [[this.rings, this.ringMesh, 0], [this.coins, this.coinMesh, 1]];
    for (const [arr, mesh, type] of sets) {
      if (!mesh) continue;
      _e.set(0, this.t * (type ? 3 : 4), 0);
      _q.setFromEuler(_e);
      for (let i = 0; i < arr.length; i++) {
        const it = arr[i];
        if (it.taken) { if (it.dirty) { _m.makeScale(0, 0, 0); mesh.setMatrixAt(i, _m); it.dirty = false; } continue; }
        if (pc) {
          const dx = pc.x - it.x, dy = pc.y + 0.8 - it.y, dz = pc.z - it.z;
          // magnet while shielded
          if (p.shield && dx * dx + dy * dy + dz * dz < 36) { it.x += dx * dt * 6; it.y += dy * dt * 6; it.z += dz * dt * 6; }
          if (dx * dx + dz * dz < 1.3 && dy * dy < 1.4) {
            it.taken = true; it.dirty = true;
            if (type === 0) { this.game.addRings(1); audio.sfx('ring'); this.game.fx.burst(_p.set(it.x, it.y, it.z), 5, 0xffe066, 3, 0.35, 0); }
            else { this.game.addCoins(1); audio.sfx('coin'); this.game.fx.burst(_p.set(it.x, it.y, it.z), 5, 0xffd23f, 3, 0.35, 0); }
            _m.makeScale(0, 0, 0); mesh.setMatrixAt(i, _m); it.dirty = false;
            continue;
          }
        }
        _s.set(1, 1, 1); _p.set(it.x, it.y, it.z);
        _m.compose(_p, _q, _s);
        mesh.setMatrixAt(i, _m);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }
  }
}

// Rings/coins knocked out of the player when hurt: can be re-collected briefly.
export class ScatterRing {
  constructor(game, pos, type) {
    this.game = game; this.type = type;
    const geo = type === 0 ? (ScatterRing.rg || (ScatterRing.rg = buildRingGeo())) : (ScatterRing.cg || (ScatterRing.cg = buildCoinGeo()));
    this.mesh = addMesh(game.scene, geo, toon(type === 0 ? 0xffcc22 : 0xffc414, { emissive: 0x6a4a00 }), pos.x, pos.y + 1, pos.z, 1, 1, 1, false);
    const a = Math.random() * Math.PI * 2, s = 4 + Math.random() * 4;
    this.vel = new THREE.Vector3(Math.cos(a) * s, 7 + Math.random() * 4, Math.sin(a) * s);
    this.life = 4; this.alive = true; this.delay = 0.6;
  }
  update(dt) {
    const g = this.game, m = this.mesh;
    this.life -= dt; this.delay -= dt;
    this.vel.y -= 25 * dt;
    m.position.addScaledVector(this.vel, dt);
    const gr = g.world.ground(m.position.x, m.position.z, 0.1, m.position.y + 0.5);
    if (gr && m.position.y < gr.y + 0.4 && this.vel.y < 0) { m.position.y = gr.y + 0.4; this.vel.y *= -0.6; this.vel.x *= 0.8; this.vel.z *= 0.8; }
    m.rotation.y += dt * 8;
    m.visible = this.life > 1.2 || Math.floor(this.life * 12) % 2 === 0;
    if (this.delay <= 0 && g.player.alive && touches(g.player, m.position.x, m.position.y, m.position.z, 0.6)) {
      if (this.type === 0) { g.addRings(1); audio.sfx('ring'); } else { g.addCoins(1); audio.sfx('coin'); }
      this.life = 0;
    }
    if (this.life <= 0) { this.alive = false; g.scene.remove(m); }
  }
}

// ------------------------------------------------------------ blocks
const BLOCK = 1.5;
export class Block {
  constructor(game, x, y, z, kind, content) {
    // (x,y,z) = centre of the block
    this.game = game; this.kind = kind; this.content = content || null;
    this.coinsLeft = content === 'coins5' ? 5 : 0;
    this.x = x; this.y = y; this.z = z;
    const h = BLOCK / 2;
    this.col = game.world.box(x - h, y - h, z - h, x + h, y + h, z + h, { owner: this, headOnly: kind === 'hidden' });
    const map = kind === 'brick' ? 'brick' : kind === 'q' ? 'qblock' : kind === 'used' ? 'usedblock' : 'qblock';
    this.mesh = addMesh(game.scene, GEO.box, toon(0xffffff, { map: tex(map) }), x, y, z, BLOCK);
    this.mesh.visible = kind !== 'hidden';
    if (kind === 'hidden') { this.mesh.material = toon(0xffffff, { map: tex('qblock'), transparent: true, opacity: 0.0 }); }
    this.bumpT = 0; this.alive = true;
  }
  becomeUsed() {
    this.kind = 'used';
    this.col.headOnly = false;
    this.mesh.visible = true;
    this.mesh.material = toon(0xffffff, { map: tex('usedblock') });
  }
  onHeadHit(player) { this.hit(player, 'below'); }
  onAttackHit(player) { this.hit(player, 'side'); }
  onPound(player) { this.hit(player, 'above'); }
  hit(player, from) {
    if (!this.alive || this.bumpT > 0) return;
    const g = this.game;
    if (this.kind === 'brick') {
      const strong = player.id === 'zip' || player.big || from !== 'below';
      if (strong) { this.breakBlock(); return; }
      this.bumpT = 0.2; audio.sfx('bump');
      g.bumpEnemiesAbove(this.x, this.y + BLOCK / 2, this.z);
      return;
    }
    if (this.kind === 'used') { audio.sfx('bump'); this.bumpT = 0.15; return; }
    // question / hidden block
    this.bumpT = 0.2;
    g.bumpEnemiesAbove(this.x, this.y + BLOCK / 2, this.z);
    const top = new THREE.Vector3(this.x, this.y + BLOCK / 2, this.z);
    if (this.content === 'coins5') {
      this.coinsLeft--;
      g.popCoin(top);
      if (this.coinsLeft <= 0) this.becomeUsed();
      return;
    }
    if (!this.content || this.content === 'coin') g.popCoin(top);
    else { g.spawnItem(this.content, top, true); audio.sfx('itemappear'); }
    g.addScore(50);
    this.becomeUsed();
  }
  breakBlock() {
    const g = this.game;
    this.alive = false;
    this.col.active = false;
    g.scene.remove(this.mesh);
    g.fx.burst(new THREE.Vector3(this.x, this.y, this.z), 16, 0xc8602a, 7, 0.7, 20);
    audio.sfx('break');
    g.addScore(50);
    g.bumpEnemiesAbove(this.x, this.y + BLOCK / 2, this.z);
  }
  update(dt) {
    if (this.bumpT > 0) {
      this.bumpT -= dt;
      this.mesh.position.y = this.y + Math.sin(Math.max(0, this.bumpT) / 0.2 * Math.PI) * 0.35;
    }
    if (this.kind === 'hidden' && this.mesh.material.opacity !== undefined) {
      // faint shimmer hint when the player is very close
      const p = this.game.player.pos;
      const d = Math.hypot(p.x - this.x, p.z - this.z);
      this.mesh.visible = d < 3;
      this.mesh.material.opacity = d < 3 ? 0.12 : 0;
    }
  }
}

// Sonic-style item monitor: break by jumping/attacking into it.
export class Monitor {
  constructor(game, x, y, z, content) {
    this.game = game; this.content = content; this.alive = true;
    this.x = x; this.y = y; this.z = z; // y = ground
    this.col = game.world.box(x - 0.6, y, z - 0.6, x + 0.6, y + 1.3, z + 0.6, { owner: this, dynamic: true });
    this.group = new THREE.Group(); this.group.position.set(x, y, z); game.scene.add(this.group);
    const box = new THREE.Mesh(GEO.box, toon(0xffffff, { map: tex('monitor') }));
    box.scale.set(1.2, 1.3, 1.2); box.position.y = 0.65; box.castShadow = true; this.group.add(box);
    const icon = buildItem(content === 'rings10' ? 'rings10' : content);
    icon.scale.setScalar(0.62); icon.position.set(0, 0.42, 0.78); this.group.add(icon);
    const icon2 = icon.clone(); icon2.position.z = -0.78; icon2.rotation.y = Math.PI; this.group.add(icon2);
    this.icon = icon; this.t = Math.random() * 6;
  }
  targetPos() { return new THREE.Vector3(this.x, this.y + 0.7, this.z); }
  onLand(player, vy) { if (player.attackKind() || vy < -6) this.breakIt(player, true); }
  onAttackHit(player) { this.breakIt(player, false); }
  onPound(player) { this.breakIt(player, true); }
  onHeadHit(player) { this.breakIt(player, false); }
  breakIt(player, fromAbove) {
    if (!this.alive) return;
    const g = this.game;
    this.alive = false;
    g.world.remove(this.col);
    g.scene.remove(this.group);
    g.fx.explosion(this.targetPos(), 0.6);
    audio.sfx('break');
    g.applyPowerUp(this.content, this.targetPos());
    g.addScore(100);
    if (fromAbove || player.state === 'homing') player.onEnemyKilled('stomp');
  }
  update(dt) {
    if (!this.alive) return;
    this.t += dt;
    this.icon.rotation.y = Math.sin(this.t * 2) * 0.5;
    const p = this.game.player;
    if (p.alive && p.attackKind() && touches(p, this.x, this.y + 0.65, this.z, 0.75)) this.breakIt(p, p.vel.y < 0);
    const hs = p.hitSphere();
    if (hs && Math.hypot(hs.x - this.x, hs.y - this.y - 0.65, hs.z - this.z) < hs.r + 0.7) this.breakIt(p, false);
  }
}

// Collectible power-up that emerges from a block.
export class PowerUp {
  constructor(game, kind, pos, rise) {
    this.game = game; this.kind = kind; this.alive = true;
    this.mesh = buildItem(kind);
    this.base = pos.clone();
    this.mesh.position.copy(pos);
    if (rise) this.mesh.position.y -= 1.2;
    game.scene.add(this.mesh);
    this.t = 0; this.riseT = rise ? 0.6 : 0;
  }
  update(dt) {
    this.t += dt;
    const m = this.mesh;
    if (this.riseT > 0) {
      this.riseT -= dt;
      m.position.y = this.base.y - 1.2 * Math.max(0, this.riseT / 0.6) + 0.05;
      return;
    }
    m.position.y = this.base.y + 0.2 + Math.sin(this.t * 3) * 0.15;
    m.rotation.y += dt * 2;
    const p = this.game.player;
    if (p.alive && touches(p, m.position.x, m.position.y + 0.4, m.position.z, 0.6)) {
      this.alive = false;
      this.game.scene.remove(m);
      this.game.applyPowerUp(this.kind, m.position);
    }
  }
}

// Coin that pops out of a block (instantly counted).
export class PopCoin {
  constructor(game, pos) {
    this.game = game; this.alive = true;
    this.mesh = addMesh(game.scene, PopCoin.geo || (PopCoin.geo = buildCoinGeo()), toon(0xffc414, { emissive: 0x5a3a00 }), pos.x, pos.y + 0.6, pos.z, 1, 1, 1, false);
    this.vy = 11; this.t = 0;
  }
  update(dt) {
    this.t += dt; this.vy -= 30 * dt;
    this.mesh.position.y += this.vy * dt; this.mesh.rotation.y += dt * 20;
    if (this.t > 0.6) { this.alive = false; this.game.scene.remove(this.mesh); this.game.fx.burst(this.mesh.position, 6, 0xffe066, 3, 0.3, 0); }
  }
}

// ------------------------------------------------------------ springs & boosters
export class Spring {
  constructor(game, x, y, z, power = 20, dir = null) {
    this.game = game; this.x = x; this.y = y; this.z = z; this.alive = true;
    this.power = power;
    this.dir = dir ? new THREE.Vector3(dir[0], dir[1], dir[2]).normalize() : new THREE.Vector3(0, 1, 0);
    this.group = new THREE.Group(); this.group.position.set(x, y, z);
    const col = power >= 26 ? 0xe53935 : 0xffd23f;
    const base = new THREE.Mesh(GEO.box, toon(0x555a66)); base.scale.set(1.3, 0.25, 1.3); base.position.y = 0.12; this.group.add(base);
    this.coil = new THREE.Mesh(GEO.cyl, toon(0xbfc6d0)); this.coil.scale.set(0.35, 0.5, 0.35); this.coil.position.y = 0.45; this.group.add(this.coil);
    this.plate = new THREE.Mesh(GEO.box, toon(col)); this.plate.scale.set(1.25, 0.22, 1.25); this.plate.position.y = 0.75; this.group.add(this.plate);
    this.group.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    // orient diagonal springs
    if (this.dir.y < 0.99) {
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), this.dir);
      this.group.quaternion.copy(q);
    }
    game.scene.add(this.group);
    this.cd = 0; this.anim = 0;
  }
  update(dt) {
    this.cd -= dt;
    if (this.anim > 0) { this.anim -= dt; const k = Math.sin((this.anim / 0.25) * Math.PI); this.plate.position.y = 0.75 + k * 0.5; this.coil.scale.y = 0.5 + k * 0.6; this.coil.position.y = 0.45 + k * 0.25; }
    const p = this.game.player;
    if (this.cd > 0 || !p.alive || p.state === 'rail' || p.state === 'loop') return;
    if (touches(p, this.x, this.y + 0.6, this.z, 0.75) && p.vel.y <= 1) {
      const d = this.dir;
      if (d.y > 0.99) {
        p.pos.x = this.x; p.pos.z = this.z;
        p.launch(p.vel.x * 0.25, this.power, p.vel.z * 0.25, 0.25);
      } else {
        p.pos.y = Math.max(p.pos.y, this.y + 0.3);
        p.launch(d.x * this.power, d.y * this.power, d.z * this.power, 0.45);
      }
      p.pos.y += 0.5;
      this.cd = 0.3; this.anim = 0.25;
      audio.sfx('spring');
    }
  }
}

export class BoostPad {
  constructor(game, x, y, z, yaw, speed = 32) {
    this.game = game; this.x = x; this.y = y; this.z = z; this.yaw = yaw; this.speed = speed; this.alive = true;
    this.mesh = addMesh(game.scene, GEO.box, toon(0xffffff, { map: tex('boostpad'), emissive: 0x332200 }), x, y + 0.03, z, 2.2, 0.08, 2.6);
    this.mesh.rotation.y = yaw;
    this.cd = 0; this.t = 0;
  }
  update(dt) {
    this.cd -= dt; this.t += dt;
    this.mesh.material.emissive.setRGB(0.25 + Math.sin(this.t * 10) * 0.15, 0.18, 0);
    const p = this.game.player;
    if (this.cd > 0 || !p.alive || p.state === 'rail' || p.state === 'loop' || p.state === 'dead') return;
    if (Math.abs(p.pos.y - this.y) < 0.8 && Math.hypot(p.pos.x - this.x, p.pos.z - this.z) < 1.6) {
      const s = Math.max(p.speed, this.speed);
      p.body.vel.x = Math.sin(this.yaw) * s; p.body.vel.z = Math.cos(this.yaw) * s;
      p.facing = this.yaw;
      p.springLock = 0.35;
      if (p.state !== 'boost') p.state = 'normal';
      this.cd = 0.4;
      audio.sfx('boostpad');
      this.game.camShake(0.1);
    }
  }
}

// ------------------------------------------------------------ loop-de-loop
export class Loop {
  constructor(game, x, y, z, yaw, radius = 7, shift = 3.2) {
    this.game = game; this.x = x; this.y = y; this.z = z; this.yaw = yaw; this.R = radius; this.shift = shift; this.alive = true;
    this.fx = Math.sin(yaw); this.fz = Math.cos(yaw);
    this.rx = Math.cos(yaw); this.rz = -Math.sin(yaw);
    this.len = 2 * Math.PI * radius * 1.02;
    // ribbon mesh
    const segs = 64, w = 2.2;
    const pos = [], nor = [], uv = [], idx = [];
    for (let i = 0; i <= segs; i++) {
      const u = i / segs;
      const c = this.point(u), n = this.inward(u);
      const lat = this.lateral();
      for (const s of [-1, 1]) {
        pos.push(c.x + lat.x * s * w, c.y, c.z + lat.z * s * w);
        nor.push(n.x, n.y, n.z);
        uv.push(s < 0 ? 0 : 1, u * 12);
      }
      if (i < segs) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx);
    const mat = new THREE.MeshLambertMaterial({ map: tex('checker'), side: THREE.DoubleSide });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.receiveShadow = true;
    game.scene.add(this.mesh);
    // edge rails
    const pts = []; for (let i = 0; i <= 48; i++) pts.push(this.point(i / 48));
    const curve = new THREE.CatmullRomCurve3(pts);
    for (const s of [-1, 1]) {
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 64, 0.12, 5, false), toon(0xffd23f));
      tube.position.set(this.lateral().x * s * w, 0, this.lateral().z * s * w);
      game.scene.add(tube);
    }
    this.cd = 0;
  }
  lateral() { return { x: this.rx, z: this.rz }; }
  smooth(u) { return u * u * (3 - 2 * u); }
  point(u) {
    const th = u * Math.PI * 2;
    const f = this.R * Math.sin(th), up = this.R * (1 - Math.cos(th)), side = this.shift * this.smooth(u);
    return new THREE.Vector3(this.x + this.fx * f + this.rx * side, this.y + up, this.z + this.fz * f + this.rz * side);
  }
  inward(u) {
    const th = u * Math.PI * 2;
    return new THREE.Vector3(-this.fx * Math.sin(th) * -1 * 0 + this.fx * -Math.sin(th), Math.cos(th), this.fz * -Math.sin(th));
  }
  update(dt) {
    this.cd -= dt;
    const p = this.game.player;
    if (this.cd > 0 || !p.alive || p.state === 'loop' || p.state === 'rail') return;
    const dx = p.pos.x - this.x, dz = p.pos.z - this.z;
    const along = dx * this.fx + dz * this.fz, lat = dx * this.rx + dz * this.rz;
    const vf = p.vel.x * this.fx + p.vel.z * this.fz;
    if (along > -0.6 && along < 0.9 && Math.abs(lat) < 2.4 && Math.abs(p.pos.y - this.y) < 1.2 && vf > 4) {
      p.state = 'loop'; p.loop = this; p.loopU = 0; p.loopLat = clamp(lat, -1.5, 1.5);
      p.loopSpeed = Math.max(p.speed, 20);
      p.mode = p.id === 'zip' ? 'run' : 'run';
    }
  }
  updateRider(p, dt) {
    const th = p.loopU * Math.PI * 2;
    p.loopSpeed = Math.max(16, p.loopSpeed - Math.sin(th) * 6 * dt);
    p.loopU += (p.loopSpeed * dt) / this.len;
    const u = Math.min(1, p.loopU);
    const c = this.point(u);
    p.body.pos.set(c.x + this.rx * p.loopLat, c.y, c.z + this.rz * p.loopLat);
    p.obj.position.copy(p.body.pos);
    p.obj.rotation.set(-u * Math.PI * 2, this.yaw, 0, 'YXZ');
    p.facing = this.yaw;
    p.body.vel.set(this.fx * p.loopSpeed, 0, this.fz * p.loopSpeed);
    if (p.loopU >= 1) {
      p.state = 'normal'; p.loop = null;
      p.obj.rotation.set(0, this.yaw, 0, 'XYZ');
      p.body.grounded = true;
      this.cd = 1.0;
    }
    p.mode = 'run';
  }
}

// ------------------------------------------------------------ grind rail
export class Rail {
  constructor(game, points, opts = {}) {
    this.game = game; this.alive = true;
    this.curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
    this.length = this.curve.getLength();
    const n = Math.max(8, Math.ceil(this.length / 0.5));
    this.samples = this.curve.getSpacedPoints(n);
    this.n = n;
    const color = opts.color || 0xc0c8d8;
    const tube = new THREE.Mesh(new THREE.TubeGeometry(this.curve, n, 0.13, 6, false), toon(color, opts.vine ? {} : { emissive: 0x111122 }));
    tube.castShadow = true;
    game.scene.add(tube);
    // support posts
    if (!opts.noPosts) {
      const postMat = toon(opts.vine ? 0x3a6b22 : 0x6a7080);
      for (let i = 0; i <= n; i += 12) {
        const s = this.samples[i];
        const gr = game.world.ground(s.x, s.z, 0.1, s.y - 0.3);
        const bottom = gr ? gr.y : s.y - 12;
        const h = s.y - bottom;
        if (h < 0.3) continue;
        const m = new THREE.Mesh(GEO.cyl, postMat); m.scale.set(0.12, h, 0.12); m.position.set(s.x, bottom + h / 2, s.z);
        if (!opts.vine) game.scene.add(m);
      }
    }
    const b = new THREE.Box3().setFromPoints(this.samples); b.expandByScalar(2);
    this.box = b;
    this.cd = 0; this.sparkT = 0;
  }
  update(dt) {
    this.cd -= dt;
    const p = this.game.player;
    if (this.cd > 0 || !p.alive || p.state === 'rail' || p.state === 'loop' || p.state === 'hurt') return;
    if (!this.box.containsPoint(p.pos)) return;
    if (p.vel.y > 3) return;
    let best = -1, bd = 1.1;
    for (let i = 0; i <= this.n; i++) {
      const s = this.samples[i];
      const dx = s.x - p.pos.x, dz = s.z - p.pos.z, dy = s.y - p.pos.y;
      if (dy > 0.5 || dy < -1.0) continue;
      const d = Math.hypot(dx, dz);
      if (d < bd) { bd = d; best = i; }
    }
    if (best < 0) return;
    const u = best / this.n;
    const tan = this.curve.getTangentAt(u);
    const dot = p.vel.x * tan.x + p.vel.z * tan.z;
    p.state = 'rail'; p.rail = this;
    p.railDist = u * this.length;
    p.railDir = dot >= 0 ? 1 : -1;
    p.railSpeed = Math.max(Math.abs(dot), 15);
    p.body.grounded = false;
    p.usedDouble = false; p.usedAir = false;
    audio.sfx('grind');
  }
  updateRider(p, dt, input) {
    const u = clamp(p.railDist / this.length, 0, 1);
    const tan = this.curve.getTangentAt(u);
    p.railSpeed = clamp(p.railSpeed - tan.y * p.railDir * 22 * dt, 12, 38);
    p.railDist += p.railSpeed * p.railDir * dt;
    const nu = p.railDist / this.length;
    const vx = tan.x * p.railSpeed * p.railDir, vy = tan.y * p.railSpeed * p.railDir, vz = tan.z * p.railSpeed * p.railDir;
    p.mode = 'grind';
    this.sparkT -= dt;
    if (this.sparkT <= 0) { this.sparkT = 0.12; audio.sfx('grind'); this.game.fx.burst(p.pos, 2, 0xffd28a, 3, 0.25, 8); }
    if (nu <= 0 || nu >= 1) {
      p.state = 'normal'; p.rail = null;
      p.body.vel.set(vx, Math.max(vy, 2), vz);
      p.body.grounded = false;
      this.cd = 0.5;
      p.mode = p.id === 'zip' ? 'ball' : 'fall';
      return;
    }
    const pt = this.curve.getPointAt(nu);
    p.body.pos.set(pt.x, pt.y + 0.12, pt.z);
    p.body.vel.set(vx, vy, vz);
    p.facing = Math.atan2(vx, vz);
    p.obj.position.copy(p.body.pos);
    p.obj.rotation.set(0, p.facing, 0);
    if (input.jumpPressed) {
      p.state = 'normal'; p.rail = null;
      p.body.vel.set(vx, 12, vz);
      p.jumping = true;
      p.mode = p.id === 'zip' ? 'ball' : 'jump';
      this.cd = 0.4;
      audio.sfx('jump');
    }
  }
}

// ------------------------------------------------------------ platforms
export class MovingPlatform {
  // path: {type:'line', to:[x,y,z], period} or {type:'circle', radius, period}
  constructor(game, x, y, z, w, d, path, style = 0x8a6a4a) {
    this.game = game; this.alive = true;
    this.origin = new THREE.Vector3(x, y, z); this.path = path; this.t = path.phase || 0;
    this.col = game.world.box(x - w / 2, y - 0.6, z - d / 2, x + w / 2, y, z + d / 2, { dynamic: true, owner: this });
    this.mesh = addMesh(game.scene, GEO.box, toon(style), x, y - 0.3, z, w, 0.6, d);
    const trim = addMesh(game.scene, GEO.box, toon(0xffd23f), 0, 0.45, 0, 1.02, 0.15, 1.02, false);
    this.mesh.remove(trim); this.mesh.add(trim);
  }
  update(dt) {
    this.t += dt;
    const p = this.path, o = this.origin;
    let x = o.x, y = o.y, z = o.z;
    if (p.type === 'line') {
      // eased back-and-forth with a short pause at each end (easier to board)
      const k = clamp(((1 - Math.cos((this.t / p.period) * Math.PI * 2)) / 2 - 0.5) * 1.35 + 0.5, 0, 1);
      x += (p.to[0] - o.x) * k; y += (p.to[1] - o.y) * k; z += (p.to[2] - o.z) * k;
    } else {
      const a = (this.t / p.period) * Math.PI * 2;
      x += Math.cos(a) * p.radius; z += Math.sin(a) * p.radius;
    }
    this.col.moveTo(x, y, z);
    this.mesh.position.set(x, y - 0.3, z);
  }
}

export class FallingPlatform {
  constructor(game, x, y, z, w = 3, d = 3, style = 0xb08a5a) {
    this.game = game; this.alive = true;
    this.home = new THREE.Vector3(x, y, z); this.w = w; this.d = d;
    this.col = game.world.box(x - w / 2, y - 0.5, z - d / 2, x + w / 2, y, z + d / 2, { dynamic: true, owner: this });
    this.mesh = addMesh(game.scene, GEO.box, toon(style), x, y - 0.25, z, w, 0.5, d);
    this.state = 'idle'; this.t = 0; this.vy = 0; this.y = y;
  }
  onLand() { if (this.state === 'idle') { this.state = 'shake'; this.t = 0; } }
  update(dt) {
    this.t += dt;
    const h = this.home;
    if (this.state === 'shake') {
      this.mesh.position.set(h.x + (Math.random() - 0.5) * 0.12, this.y - 0.25, h.z + (Math.random() - 0.5) * 0.12);
      if (this.t > 0.85) { this.state = 'fall'; this.t = 0; this.vy = 0; }
    } else if (this.state === 'fall') {
      this.vy -= 25 * dt; this.y += this.vy * dt;
      this.col.moveTo(h.x, this.y, h.z);
      this.mesh.position.set(h.x, this.y - 0.25, h.z);
      if (this.t > 1.0) this.col.active = false;
      if (this.t > 3.5) { this.state = 'idle'; this.y = h.y; this.col.active = true; this.col.moveTo(h.x, h.y, h.z); this.col.delta.y = 0; this.mesh.position.set(h.x, h.y - 0.25, h.z); this.game.fx.burst(h, 8, 0xffffff, 3, 0.4, 0); }
    } else {
      this.col.delta.x = this.col.delta.y = this.col.delta.z = 0;
    }
  }
}

// Platform that blinks in and out of existence on a timer.
export class BlinkPlatform {
  constructor(game, x, y, z, w, d, period = 3, phase = 0) {
    this.game = game; this.alive = true; this.period = period; this.t = phase;
    this.col = game.world.box(x - w / 2, y - 0.5, z - d / 2, x + w / 2, y, z + d / 2, { dynamic: true });
    this.mesh = addMesh(game.scene, GEO.box, toon(0x38e8ff, { transparent: true, opacity: 0.85, emissive: 0x0a5a7a }), x, y - 0.25, z, w, 0.5, d);
  }
  update(dt) {
    this.t += dt;
    const ph = (this.t % this.period) / this.period;
    const on = ph < 0.62;
    const warn = ph > 0.45 && ph < 0.62;
    this.col.active = on;
    this.mesh.visible = on && !(warn && Math.floor(this.t * 12) % 2 === 0);
    this.mesh.material.opacity = on ? 0.85 : 0.2;
  }
}

// ------------------------------------------------------------ hazards
export class Firebar {
  constructor(game, x, y, z, n = 5, speed = 1.6, axis = 'y') {
    this.game = game; this.alive = true; this.x = x; this.y = y; this.z = z; this.n = n; this.speed = speed; this.axis = axis;
    this.t = Math.random() * 6;
    game.world.box(x - 0.6, y - 0.6, z - 0.6, x + 0.6, y + 0.6, z + 0.6);
    addMesh(game.scene, GEO.box, toon(0x6a6a74), x, y, z, 1.2);
    this.balls = [];
    for (let i = 0; i < n; i++) this.balls.push(addMesh(game.scene, GEO.sphereLo, toon(0xffa21a, { emissive: 0xff5500 }), x, y, z, 0.42, 0.42, 0.42, false));
  }
  update(dt) {
    this.t += dt;
    const a = this.t * this.speed;
    const p = this.game.player;
    for (let i = 0; i < this.n; i++) {
      const r = 0.9 + i * 0.85;
      const b = this.balls[i];
      if (this.axis === 'y') b.position.set(this.x + Math.cos(a) * r, this.y, this.z + Math.sin(a) * r);
      else b.position.set(this.x + Math.cos(a) * r, this.y + Math.sin(a) * r, this.z);
      b.scale.setScalar(0.42 + Math.sin(this.t * 20 + i) * 0.05);
      if (p.alive && touches(p, b.position.x, b.position.y, b.position.z, 0.38)) p.hurt(b.position);
    }
  }
}

export class Spikes {
  constructor(game, x, y, z, w, d) {
    this.game = game; this.alive = true; this.x = x; this.y = y; this.z = z; this.w = w; this.d = d;
    const geo = GEO.cone, mat = toon(0xd8dde6);
    const nx = Math.max(1, Math.round(w / 0.8)), nz = Math.max(1, Math.round(d / 0.8));
    const inst = new THREE.InstancedMesh(geo, mat, nx * nz);
    let k = 0;
    const m = new THREE.Matrix4();
    for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) {
      m.compose(new THREE.Vector3(x - w / 2 + (i + 0.5) * (w / nx), y + 0.35, z - d / 2 + (j + 0.5) * (d / nz)), new THREE.Quaternion(), new THREE.Vector3(0.3, 0.7, 0.3));
      inst.setMatrixAt(k++, m);
    }
    inst.castShadow = true;
    game.scene.add(inst);
    addMesh(game.scene, GEO.box, toon(0x50545e), x, y + 0.05, z, w, 0.1, d);
  }
  update() {
    const p = this.game.player;
    if (!p.alive) return;
    if (Math.abs(p.pos.x - this.x) < this.w / 2 + 0.2 && Math.abs(p.pos.z - this.z) < this.d / 2 + 0.2 && p.pos.y < this.y + 0.7 && p.pos.y > this.y - 0.5) {
      if (p.hurt(new THREE.Vector3(this.x, this.y, this.z))) p.body.vel.y = 11;
    }
  }
}

export class Crusher {
  constructor(game, x, z, lowY, highY, size = 3, phase = 0) {
    this.game = game; this.alive = true; this.x = x; this.z = z; this.low = lowY; this.high = highY; this.size = size;
    this.t = phase; this.y = highY; this.state = 'up';
    const h = size;
    this.col = game.world.box(x - size / 2, highY - h, z - size / 2, x + size / 2, highY, z + size / 2, { dynamic: true });
    this.mesh = addMesh(game.scene, GEO.box, toon(0xffffff, { map: tex('crusherFace') }), x, highY - h / 2, z, size, h, size);
    this.prevBottom = highY - h;
  }
  update(dt) {
    this.t += dt;
    const h = this.size;
    let shake = 0;
    if (this.state === 'up') { if (this.t > 1.6) { this.state = 'warn'; this.t = 0; } }
    else if (this.state === 'warn') { shake = 0.08; if (this.t > 0.45) { this.state = 'down'; this.t = 0; } }
    else if (this.state === 'down') {
      this.y -= 28 * dt;
      if (this.y - h <= this.low) { this.y = this.low + h; this.state = 'ground'; this.t = 0; audio.sfx('slam'); this.game.camShake(0.25); this.game.fx.dust(new THREE.Vector3(this.x, this.low, this.z), 10); }
    } else if (this.state === 'ground') { if (this.t > 0.9) { this.state = 'rise'; this.t = 0; } }
    else if (this.state === 'rise') { this.y += 4 * dt; if (this.y >= this.high) { this.y = this.high; this.state = 'up'; this.t = 0; } }
    this.col.moveTo(this.x, this.y, this.z);
    this.mesh.position.set(this.x + (Math.random() - 0.5) * shake, this.y - h / 2, this.z + (Math.random() - 0.5) * shake);
    const p = this.game.player;
    const bottom = this.y - h;
    if (p.alive && this.state === 'down' && Math.abs(p.pos.x - this.x) < this.size / 2 + 0.3 && Math.abs(p.pos.z - this.z) < this.size / 2 + 0.3 &&
        p.pos.y + 1.6 > bottom - 0.2 && p.pos.y < this.prevBottom) {
      if (p.hurt(new THREE.Vector3(this.x, p.pos.y, this.z))) {
        const dx = p.pos.x - this.x, dz = p.pos.z - this.z, d = Math.hypot(dx, dz) || 1;
        p.body.vel.set((dx / d) * 12, 6, (dz / d) * 12);
      }
    }
    this.prevBottom = bottom;
  }
}

export class Pendulum {
  constructor(game, x, y, z, length, axis = 'x', amp = 1.1, period = 2.6, phase = 0) {
    this.game = game; this.alive = true; this.x = x; this.y = y; this.z = z; this.L = length; this.axis = axis; this.amp = amp; this.period = period;
    this.t = phase;
    this.pivot = new THREE.Group(); this.pivot.position.set(x, y, z); game.scene.add(this.pivot);
    const rope = new THREE.Mesh(GEO.cyl, toon(0x8a6a3a)); rope.scale.set(0.06, length, 0.06); rope.position.y = -length / 2; this.pivot.add(rope);
    const log = new THREE.Mesh(GEO.cyl, toon(0x7a4a22)); log.scale.set(0.7, 2.4, 0.7); log.position.y = -length;
    if (axis === 'x') log.rotation.x = Math.PI / 2; else log.rotation.z = Math.PI / 2;
    log.castShadow = true; this.pivot.add(log);
    for (const s of [-1, 1]) { const sp = new THREE.Mesh(GEO.cone, toon(0xd8dde6)); sp.scale.set(0.25, 0.6, 0.25); sp.position.set(axis === 'x' ? s * 0.8 : 0, -length, axis === 'x' ? 0 : s * 0.8); sp.rotation.z = axis === 'x' ? -s * Math.PI / 2 : 0; sp.rotation.x = axis === 'x' ? 0 : s * Math.PI / 2; this.pivot.add(sp); }
    this.head = new THREE.Vector3();
  }
  update(dt) {
    this.t += dt;
    const a = Math.sin((this.t / this.period) * Math.PI * 2) * this.amp;
    if (this.axis === 'x') { this.pivot.rotation.z = a; this.head.set(this.x + Math.sin(a) * this.L, this.y - Math.cos(a) * this.L, this.z); }
    else { this.pivot.rotation.x = -a; this.head.set(this.x, this.y - Math.cos(a) * this.L, this.z + Math.sin(a) * this.L); }
    const p = this.game.player;
    if (p.alive && touches(p, this.head.x, this.head.y, this.head.z, 1.0)) p.hurt(this.head);
  }
}

// Generic projectile (enemy arrows/fireballs or player fireballs).
export class Projectile {
  constructor(game, pos, vel, opts = {}) {
    this.game = game; this.alive = true;
    this.vel = vel.clone(); this.r = opts.r || 0.35; this.life = opts.life || 4; this.grav = opts.grav || 0;
    this.friendly = !!opts.friendly; this.bounce = !!opts.bounce; this.destroyable = !!opts.destroyable;
    this.homing = opts.homing || 0;
    const color = opts.color || 0xff7a1a;
    if (opts.arrow) {
      this.mesh = addMesh(game.scene, GEO.cyl, toon(0x8a6a3a), pos.x, pos.y, pos.z, 0.06, 1.2, 0.06, false);
      const tip = new THREE.Mesh(GEO.cone, toon(0xcccccc)); tip.scale.set(2.2, 0.25, 2.2); tip.position.y = 0.55; this.mesh.add(tip);
      this.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), this.vel.clone().normalize());
    } else {
      this.mesh = addMesh(game.scene, GEO.sphereLo, toon(color, { emissive: color }), pos.x, pos.y, pos.z, this.r, this.r, this.r, false);
    }
    this.color = color;
    if (this.friendly) game.player.fireballs++;
  }
  targetPos() { return this.mesh.position; }
  kill() {
    if (!this.alive) return;
    this.alive = false; this.game.scene.remove(this.mesh);
    if (this.friendly) this.game.player.fireballs--;
    this.game.fx.burst(this.mesh.position, 6, this.color, 3, 0.3, 0);
  }
  update(dt) {
    const g = this.game, m = this.mesh, p = g.player;
    this.life -= dt;
    if (this.life <= 0) { this.kill(); return; }
    if (this.homing && p.alive) {
      const dx = p.pos.x - m.position.x, dy = p.pos.y + 0.8 - m.position.y, dz = p.pos.z - m.position.z;
      const d = Math.hypot(dx, dy, dz) || 1, s = this.vel.length();
      this.vel.x += (dx / d * s - this.vel.x) * this.homing * dt;
      this.vel.y += (dy / d * s - this.vel.y) * this.homing * dt;
      this.vel.z += (dz / d * s - this.vel.z) * this.homing * dt;
    }
    this.vel.y -= this.grav * dt;
    m.position.addScaledVector(this.vel, dt);
    if (this.friendly) {
      m.rotation.x += dt * 20;
      if (this.bounce) {
        const gr = g.world.ground(m.position.x, m.position.z, 0.1, m.position.y + 0.3);
        if (gr && m.position.y - this.r < gr.y) { m.position.y = gr.y + this.r; this.vel.y = 7; }
      }
      if (g.world.pointSolid(m.position.x, m.position.y, m.position.z)) { this.kill(); return; }
      if (g.hitEnemiesAt(m.position, this.r + 0.3, 'fire')) this.kill();
      return;
    }
    if (g.world.pointSolid(m.position.x, m.position.y, m.position.z)) { this.kill(); return; }
    if (p.alive && touches(p, m.position.x, m.position.y, m.position.z, this.r)) {
      if (this.destroyable && p.attackKind()) { this.kill(); g.addScore(50); p.onEnemyKilled('stomp'); return; }
      p.hurt(m.position); this.kill();
    }
  }
}

export class DartTrap {
  constructor(game, x, y, z, dir, period = 2.2, phase = 0) {
    this.game = game; this.alive = true; this.pos = new THREE.Vector3(x, y, z); this.dir = new THREE.Vector3(dir[0], 0, dir[2]).normalize();
    this.period = period; this.t = phase;
    const m = addMesh(game.scene, GEO.box, toon(0x77775a), x, y, z, 1.2, 1.2, 1.2);
    const face = addMesh(game.scene, GEO.cyl, toon(0x222222), x + this.dir.x * 0.6, y, z + this.dir.z * 0.6, 0.25, 0.1, 0.25, false);
    face.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), this.dir);
    void m;
  }
  update(dt) {
    this.t += dt;
    if (this.t > this.period) {
      this.t = 0;
      const p = this.game.player;
      if (p.pos.distanceTo(this.pos) < 40) {
        const sp = this.pos.clone().addScaledVector(this.dir, 0.9);
        this.game.spawn(new Projectile(this.game, sp, this.dir.clone().multiplyScalar(14), { arrow: true, r: 0.3, life: 3 }));
      }
    }
  }
}

export class LavaBubble {
  constructor(game, x, baseY, z, height = 7, period = 2.6, phase = 0) {
    this.game = game; this.alive = true; this.x = x; this.base = baseY; this.z = z; this.h = height; this.period = period; this.t = phase;
    this.mesh = addMesh(game.scene, GEO.sphereLo, toon(0xffb21a, { emissive: 0xff4400 }), x, baseY, z, 0.55, 0.55, 0.55, false);
    for (const s of [-1, 1]) { const e = new THREE.Mesh(GEO.sphereLo, basic(0x220000)); e.scale.set(0.15, 0.2, 0.1); e.position.set(s * 0.2, 0.15, 0.48); this.mesh.add(e); }
  }
  update(dt) {
    this.t += dt;
    const ph = (this.t % this.period) / this.period;
    const active = ph < 0.55;
    const k = ph / 0.55;
    const y = active ? this.base + Math.sin(k * Math.PI) * this.h : this.base - 2;
    this.mesh.position.set(this.x, y, this.z);
    this.mesh.rotation.x = k < 0.5 ? 0 : Math.PI;
    this.mesh.visible = active;
    if (active && Math.random() < 0.3) this.game.fx.trail(this.mesh.position, 0xff7a1a);
    const p = this.game.player;
    if (active && p.alive && touches(p, this.x, y, this.z, 0.5)) p.hurt(this.mesh.position);
  }
}

// ------------------------------------------------------------ pipes / portals / zones
export class Pipe {
  constructor(game, x, y, z, height, warp = null, color = 0x2ec44a) {
    this.game = game; this.alive = true; this.x = x; this.y = y; this.z = z; this.h = height; this.warp = warp;
    const r = 1.1;
    this.col = game.world.box(x - r, y - 0.5, z - r, x + r, y + height, z + r, { owner: this });
    const mat = toon(color);
    addMesh(game.scene, GEO.cyl, mat, x, y + height / 2 - 0.25, z, r * 0.92, height - 0.5, r * 0.92);
    addMesh(game.scene, GEO.cyl, mat, x, y + height - 0.3, z, r * 1.08, 0.6, r * 1.08);
    addMesh(game.scene, GEO.cyl, basic(0x0a1a0a), x, y + height + 0.005, z, r * 0.8, 0.02, r * 0.8, false);
    this.t = 0;
  }
  update(dt, input) {
    if (!this.warp) return;
    const p = this.game.player;
    const on = p.alive && p.body.grounded && p.body.ground === this.col && p.state === 'normal';
    if (on) this.game.hint('Toque em ATAQUE para entrar no cano', 0.1);
    if (on && (input.attackPressed || input.moveY < -0.8)) {
      input.attackPressed = false;
      this.game.warpPlayer(new THREE.Vector3(this.x, this.y + this.h, this.z), this.warp);
    }
  }
}

export class Portal {
  constructor(game, x, y, z, target, color = 0xc85bff) {
    this.game = game; this.alive = true; this.x = x; this.y = y; this.z = z; this.target = target;
    this.ring = addMesh(game.scene, GEO.torus, toon(color, { emissive: color }), x, y + 1.6, z, 1.4, 1.4, 1.4, false);
    this.disc = addMesh(game.scene, new THREE.CircleGeometry(1.3, 20), basic(color, { transparent: true, opacity: 0.45, side: THREE.DoubleSide }), x, y + 1.6, z, 1, 1, 1, false);
    this.t = 0; this.cd = 0;
  }
  update(dt) {
    this.t += dt; this.cd -= dt;
    this.ring.rotation.y = this.t * 1.5; this.disc.rotation.y = this.t * 1.5;
    this.disc.material.opacity = 0.35 + Math.sin(this.t * 5) * 0.15;
    const p = this.game.player;
    if (this.cd <= 0 && p.alive && touches(p, this.x, this.y + 1.2, this.z, 1.0)) {
      this.cd = 1.5;
      audio.sfx('portal');
      this.game.fx.burst(p.center(), 20, 0xc85bff, 6, 0.6, 0);
      p.body.pos.set(this.target[0], this.target[1], this.target[2]);
      p.body.vel.set(0, 4, 0);
      p.body.grounded = false;
      if (this.target[3] !== undefined) { p.facing = this.target[3]; this.game.cam.snapBehind(p.facing); }
      this.game.fx.burst(p.center(), 20, 0xc85bff, 6, 0.6, 0);
    }
  }
}

export class GravityZone {
  constructor(game, x, y, z, w, h, d) {
    this.game = game; this.alive = true; this.min = new THREE.Vector3(x - w / 2, y, z - d / 2); this.max = new THREE.Vector3(x + w / 2, y + h, z + d / 2);
    const m = addMesh(game.scene, GEO.box, basic(0x9a6bff, { transparent: true, opacity: 0.12, depthWrite: false }), x, y + h / 2, z, w, h, d, false);
    void m;
    this.t = 0;
  }
  update(dt) {
    this.t += dt;
    const p = this.game.player;
    const q = p.pos;
    if (q.x > this.min.x && q.x < this.max.x && q.z > this.min.z && q.z < this.max.z && q.y > this.min.y - 1 && q.y < this.max.y) p.lowGravity = 0.15;
    if (Math.random() < 0.3) {
      const x = this.min.x + Math.random() * (this.max.x - this.min.x), z = this.min.z + Math.random() * (this.max.z - this.min.z);
      this.game.fx.small.emit(x, this.min.y, z, 0, 3 + Math.random() * 3, 0, 0xb48cff, 2, 0);
    }
  }
}

export class HintZone {
  constructor(game, x, z, r, text) { this.game = game; this.alive = true; this.x = x; this.z = z; this.r = r; this.text = text; this.shown = 0; }
  update(dt) {
    const p = this.game.player.pos;
    if (Math.hypot(p.x - this.x, p.z - this.z) < this.r) this.game.hint(this.text, 0.2);
    void dt;
  }
}

// ------------------------------------------------------------ checkpoints / goals / medals
export class Checkpoint {
  constructor(game, x, y, z, yaw = 0) {
    this.game = game; this.alive = true; this.x = x; this.y = y; this.z = z; this.yaw = yaw; this.active = false;
    addMesh(game.scene, GEO.cyl, toon(0x3a3f4f), x, y + 1.2, z, 0.1, 2.4, 0.1);
    addMesh(game.scene, GEO.cyl, toon(0x2a2f3f), x, y + 0.08, z, 0.4, 0.16, 0.4);
    this.head = addMesh(game.scene, GEO.sphere, toon(0x2a7fff, { emissive: 0x001133 }), x, y + 2.6, z, 0.32);
    this.t = 0;
  }
  update(dt) {
    this.t += dt;
    if (this.active) this.head.rotation.y += dt * 6;
    const p = this.game.player;
    // activates when the player crosses the checkpoint line anywhere across the path
    if (!this.active && p.alive && Math.abs(p.pos.z - this.z) < 1.6 && Math.abs(p.pos.x - this.x) < 11 && Math.abs(p.pos.y - this.y) < 5) {
      this.active = true;
      this.head.material = toon(0xff3a3a, { emissive: 0x661010 });
      this.game.setCheckpoint(new THREE.Vector3(this.x, this.y + 0.1, this.z), this.yaw);
      this.game.fx.burst(this.head.position, 20, 0xffe066, 5, 0.7, 2);
      audio.sfx('checkpoint');
    }
  }
}

export class Goal {
  constructor(game, x, y, z, type = 'sign', yaw = 0) {
    this.game = game; this.alive = true; this.x = x; this.y = y; this.z = z; this.type = type; this.done = false; this.t = 0;
    this.group = new THREE.Group(); this.group.position.set(x, y, z); this.group.rotation.y = yaw; game.scene.add(this.group);
    if (type === 'sign') {
      const post = new THREE.Mesh(GEO.cyl, toon(0x6a7080)); post.scale.set(0.12, 2.6, 0.12); post.position.y = 1.3; this.group.add(post);
      this.panel = new THREE.Group(); this.panel.position.y = 3.4; this.group.add(this.panel);
      const f = new THREE.Mesh(new THREE.CircleGeometry(1.1, 24), toon(0xffffff, { map: tex('sign') })); f.position.z = 0.06; this.panel.add(f);
      const bk = new THREE.Mesh(new THREE.CircleGeometry(1.1, 24), toon(0xffffff, { map: tex('signBack') })); bk.rotation.y = Math.PI; bk.position.z = -0.06; this.panel.add(bk);
      const rim = new THREE.Mesh(GEO.torus, toon(0x6a7080)); rim.scale.set(1.12, 1.12, 0.4); this.panel.add(rim);
    } else if (type === 'flag') {
      const pole = new THREE.Mesh(GEO.cyl, toon(0xdfe6ee)); pole.scale.set(0.12, 11, 0.12); pole.position.y = 5.5; this.group.add(pole);
      const ball = new THREE.Mesh(GEO.sphere, toon(0x2ec44a)); ball.scale.setScalar(0.35); ball.position.y = 11.1; this.group.add(ball);
      this.flag = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.3), toon(0xffffff, { map: tex('flag'), side: THREE.DoubleSide })); this.flag.position.set(0.95, 10.2, 0); this.group.add(this.flag);
      const base = new THREE.Mesh(GEO.box, toon(0x9a6a3a)); base.scale.set(1.5, 1.5, 1.5); base.position.y = 0.75; this.group.add(base);
      game.world.box(x - 0.75, y, z - 0.75, x + 0.75, y + 1.5, z + 0.75);
    } else if (type === 'ring') {
      this.ring = new THREE.Mesh(GEO.torus, toon(0xffcc22, { emissive: 0x996600 })); this.ring.scale.set(2.2, 2.2, 2.2); this.ring.position.y = 3; this.group.add(this.ring);
    } else if (type === 'star') {
      this.ring = new THREE.Mesh(STAR_GEO, toon(0xffd23f, { emissive: 0xaa7700 })); this.ring.scale.setScalar(3); this.ring.position.y = 2.5; this.group.add(this.ring);
    }
    this.group.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  }
  update(dt) {
    this.t += dt;
    const p = this.game.player;
    if (this.type === 'ring' || this.type === 'star') { this.ring.rotation.y += dt * 2; this.game.fx.sparkle(new THREE.Vector3(this.x, this.y + 2.8, this.z)); }
    if (this.panel) this.panel.rotation.y += this.done ? dt * Math.max(0, 25 - this.t * 8) : 0;
    if (this.flag && this.done) this.flag.position.y = Math.max(1.8, this.flag.position.y - dt * 8);
    if (this.done || !p.alive) return;
    let hit = false, bonus = 0;
    // sign / flag / ring: crossing the finish line anywhere across the path counts
    const crossed = Math.abs(p.pos.z - this.z) < 1.4 && Math.abs(p.pos.x - this.x) < 10 && p.pos.y > this.y - 3 && p.pos.y < this.y + 13;
    if (this.type === 'flag') {
      if (crossed) { hit = true; const near = Math.abs(p.pos.x - this.x) < 2.5; bonus = near ? Math.round(clamp((p.pos.y - this.y) / 10, 0, 1) * 4) * 1000 + 500 : 300; }
    } else if (this.type === 'star') {
      if (touches(p, this.x, this.y + 2.5, this.z, 2.2)) hit = true;
    } else if (crossed) hit = true;
    if (hit) { this.done = true; this.t = 0; this.game.win(bonus); }
  }
}

export class Medal {
  constructor(game, x, y, z, idx) {
    this.game = game; this.alive = true; this.idx = idx; this.x = x; this.y = y; this.z = z;
    this.mesh = buildMedal(); this.mesh.position.set(x, y, z); game.scene.add(this.mesh);
    this.t = Math.random() * 6;
    if (game.medals[idx]) { this.mesh.traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = 0.35; } }); }
  }
  update(dt) {
    this.t += dt;
    this.mesh.rotation.y += dt * 2.5;
    this.mesh.position.y = this.y + Math.sin(this.t * 2) * 0.2;
    if (Math.random() < 0.15) this.game.fx.sparkle(this.mesh.position, 0xfff2a8);
    const p = this.game.player;
    if (p.alive && touches(p, this.x, this.y, this.z, 0.9)) {
      this.alive = false; this.game.scene.remove(this.mesh);
      this.game.collectMedal(this.idx, this.mesh.position);
    }
  }
}

export { addMesh, lambert };
