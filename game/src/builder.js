// Level builder: turns compact level scripts into colliders, merged meshes and entities.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { terrainMaterials, tex } from './materials.js';
import { rng } from './util.js';
import {
  Block, Monitor, Spring, BoostPad, Loop, Rail, MovingPlatform, FallingPlatform, BlinkPlatform,
  Firebar, Spikes, Crusher, Pendulum, DartTrap, LavaBubble, Pipe, Portal, GravityZone, HintZone,
  Checkpoint, Goal, Medal,
} from './objects.js';
import { Enemy } from './enemies.js';
import { Magmor, Vortex, BossArena } from './bosses.js';

class GeoBuf {
  constructor() { this.pos = []; this.nor = []; this.uv = []; this.idx = []; }
  quad(a, b, c, d, out, uvf) {
    // ensure outward winding
    const ab = new THREE.Vector3().subVectors(b, a), ac = new THREE.Vector3().subVectors(c, a);
    const n = new THREE.Vector3().crossVectors(ab, ac).normalize();
    if (n.dot(out) < 0) { const t = b; b = d; d = t; n.negate(); }
    const base = this.pos.length / 3;
    for (const v of [a, b, c, d]) {
      this.pos.push(v.x, v.y, v.z); this.nor.push(n.x, n.y, n.z);
      const [u, w] = uvf(v); this.uv.push(u, w);
    }
    this.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.idx);
    g.computeBoundingSphere();
    return g;
  }
}
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const TS = 4; // texture tile size in world units

const DECO = {
  sphere: new THREE.IcosahedronGeometry(1, 1),
  sphere0: new THREE.IcosahedronGeometry(1, 0),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 7),
  cone: new THREE.ConeGeometry(1, 1, 7),
  box: new THREE.BoxGeometry(1, 1, 1),
  oct: new THREE.OctahedronGeometry(1, 0),
  hemi: new THREE.SphereGeometry(1, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2),
};
for (const k in DECO) { DECO[k].deleteAttribute('uv'); }

export class LevelBuilder {
  constructor(game, theme) {
    this.g = game; this.world = game.world; this.scene = game.scene; this.theme = theme;
    this.style = theme.ground;
    this.buffers = {};
    this.deco = []; this.cloudGeos = [];
    this.rand = rng(1234);
    this.bounds = new THREE.Box3();
    this.medalCount = 0;
    this.animated = [];
  }

  buf(style) {
    if (!this.buffers[style]) this.buffers[style] = { top: new GeoBuf(), side: new GeoBuf() };
    return this.buffers[style];
  }

  // ------------------------------------------------ terrain
  // Solid block with top surface at `top`, centred on (x,z).
  box(x, z, w, d, top, depth = 24, style = this.style, opts = {}) {
    const x0 = x - w / 2, x1 = x + w / 2, z0 = z - d / 2, z1 = z + d / 2, y0 = top - depth, y1 = top;
    const col = this.world.box(x0, y0, z0, x1, y1, z1, opts);
    this.addBoxGeo(x0, y0, z0, x1, y1, z1, style);
    this.bounds.expandByPoint(V(x0, y0, z0)); this.bounds.expandByPoint(V(x1, y1, z1));
    return col;
  }
  // Thin floating platform.
  plat(x, z, w, d, top, thick = 1, style = this.style, opts = {}) { return this.box(x, z, w, d, top, thick, style, opts); }
  // Box given by min/max corners.
  slab(x0, z0, x1, z1, top, depth = 24, style = this.style) { return this.box((x0 + x1) / 2, (z0 + z1) / 2, Math.abs(x1 - x0), Math.abs(z1 - z0), top, depth, style); }

  addBoxGeo(x0, y0, z0, x1, y1, z1, style) {
    const b = this.buf(style);
    b.top.quad(V(x0, y1, z0), V(x1, y1, z0), V(x1, y1, z1), V(x0, y1, z1), V(0, 1, 0), (v) => [v.x / TS, v.z / TS]);
    const s = b.side;
    s.quad(V(x0, y0, z0), V(x1, y0, z0), V(x1, y1, z0), V(x0, y1, z0), V(0, 0, -1), (v) => [v.x / TS, v.y / TS]);
    s.quad(V(x0, y0, z1), V(x1, y0, z1), V(x1, y1, z1), V(x0, y1, z1), V(0, 0, 1), (v) => [v.x / TS, v.y / TS]);
    s.quad(V(x0, y0, z0), V(x0, y0, z1), V(x0, y1, z1), V(x0, y1, z0), V(-1, 0, 0), (v) => [v.z / TS, v.y / TS]);
    s.quad(V(x1, y0, z0), V(x1, y0, z1), V(x1, y1, z1), V(x1, y1, z0), V(1, 0, 0), (v) => [v.z / TS, v.y / TS]);
    s.quad(V(x0, y0, z0), V(x1, y0, z0), V(x1, y0, z1), V(x0, y0, z1), V(0, -1, 0), (v) => [v.x / TS, v.z / TS]);
  }

  // Sloped block. axis 'z': height h0 at z-d/2 rising to h1 at z+d/2 (axis 'x' likewise).
  ramp(x, z, w, d, h0, h1, axis = 'z', style = this.style, depth = 24) {
    const x0 = x - w / 2, x1 = x + w / 2, z0 = z - d / 2, z1 = z + d / 2;
    const yb = Math.min(h0, h1) - depth;
    this.world.box(x0, yb, z0, x1, Math.max(h0, h1), z1, { ramp: { axis, h0, h1 } });
    const b = this.buf(style);
    const s = b.side;
    if (axis === 'z') {
      b.top.quad(V(x0, h0, z0), V(x1, h0, z0), V(x1, h1, z1), V(x0, h1, z1), V(0, 1, 0), (v) => [v.x / TS, v.z / TS]);
      s.quad(V(x0, yb, z0), V(x1, yb, z0), V(x1, h0, z0), V(x0, h0, z0), V(0, 0, -1), (v) => [v.x / TS, v.y / TS]);
      s.quad(V(x0, yb, z1), V(x1, yb, z1), V(x1, h1, z1), V(x0, h1, z1), V(0, 0, 1), (v) => [v.x / TS, v.y / TS]);
      s.quad(V(x0, yb, z0), V(x0, yb, z1), V(x0, h1, z1), V(x0, h0, z0), V(-1, 0, 0), (v) => [v.z / TS, v.y / TS]);
      s.quad(V(x1, yb, z0), V(x1, yb, z1), V(x1, h1, z1), V(x1, h0, z0), V(1, 0, 0), (v) => [v.z / TS, v.y / TS]);
    } else {
      b.top.quad(V(x0, h0, z0), V(x1, h1, z0), V(x1, h1, z1), V(x0, h0, z1), V(0, 1, 0), (v) => [v.x / TS, v.z / TS]);
      s.quad(V(x0, yb, z0), V(x0, yb, z1), V(x0, h0, z1), V(x0, h0, z0), V(-1, 0, 0), (v) => [v.z / TS, v.y / TS]);
      s.quad(V(x1, yb, z0), V(x1, yb, z1), V(x1, h1, z1), V(x1, h1, z0), V(1, 0, 0), (v) => [v.z / TS, v.y / TS]);
      s.quad(V(x0, yb, z0), V(x1, yb, z0), V(x1, h1, z0), V(x0, h0, z0), V(0, 0, -1), (v) => [v.x / TS, v.y / TS]);
      s.quad(V(x0, yb, z1), V(x1, yb, z1), V(x1, h1, z1), V(x0, h0, z1), V(0, 0, 1), (v) => [v.x / TS, v.y / TS]);
    }
    this.bounds.expandByPoint(V(x0, yb, z0)); this.bounds.expandByPoint(V(x1, Math.max(h0, h1), z1));
  }

  // Invisible wall (keeps players inside arenas / along edges of narrow paths).
  wall(x, z, w, d, bottom, top) { this.world.box(x - w / 2, bottom, z - d / 2, x + w / 2, top, z + d / 2); }

  // ------------------------------------------------ collectibles
  ring(x, y, z) { this.g.pickups.add(0, x, y, z); }
  coin(x, y, z) { this.g.pickups.add(1, x, y, z); }
  line(type, x0, y0, z0, x1, y1, z1, n) {
    for (let i = 0; i < n; i++) {
      const t = n === 1 ? 0 : i / (n - 1);
      this.g.pickups.add(type === 'coin' ? 1 : 0, x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, z0 + (z1 - z0) * t);
    }
  }
  rings(x0, y0, z0, x1, y1, z1, n) { this.line('ring', x0, y0, z0, x1, y1, z1, n); }
  coins(x0, y0, z0, x1, y1, z1, n) { this.line('coin', x0, y0, z0, x1, y1, z1, n); }
  arc(type, x0, y0, z0, x1, z1, h, n) {
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      this.g.pickups.add(type === 'coin' ? 1 : 0, x0 + (x1 - x0) * t, y0 + Math.sin(t * Math.PI) * h, z0 + (z1 - z0) * t);
    }
  }
  circle(type, x, y, z, r, n) {
    for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2; this.g.pickups.add(type === 'coin' ? 1 : 0, x + Math.cos(a) * r, y, z + Math.sin(a) * r); }
  }

  // ------------------------------------------------ objects
  add(e) { this.g.entities.push(e); return e; }
  qblock(x, y, z, content = 'coin') { return this.add(new Block(this.g, x, y, z, 'q', content)); }
  brick(x, y, z, content = null) { return this.add(new Block(this.g, x, y, z, 'brick', content)); }
  hidden(x, y, z, content = 'coin') { return this.add(new Block(this.g, x, y, z, 'hidden', content)); }
  hard(x, y, z) { return this.add(new Block(this.g, x, y, z, 'used', null)); }
  monitor(x, y, z, content) { const m = this.add(new Monitor(this.g, x, y, z, content)); this.g.monitors.push(m); return m; }
  spring(x, y, z, power, dir) { return this.add(new Spring(this.g, x, y, z, power, dir)); }
  boost(x, y, z, yaw = 0, speed) { return this.add(new BoostPad(this.g, x, y, z, yaw, speed)); }
  loop(x, y, z, yaw = 0, r = 7, shift = 3.2) { return this.add(new Loop(this.g, x, y, z, yaw, r, shift)); }
  rail(points, opts) { return this.add(new Rail(this.g, points, opts)); }
  mover(x, y, z, w, d, path, color) { return this.add(new MovingPlatform(this.g, x, y, z, w, d, path, color)); }
  falling(x, y, z, w, d, color) { return this.add(new FallingPlatform(this.g, x, y, z, w, d, color)); }
  blink(x, y, z, w, d, period, phase) { return this.add(new BlinkPlatform(this.g, x, y, z, w, d, period, phase)); }
  firebar(x, y, z, n, speed, axis) { return this.add(new Firebar(this.g, x, y, z, n, speed, axis)); }
  spikes(x, y, z, w, d) { return this.add(new Spikes(this.g, x, y, z, w, d)); }
  crusher(x, z, low, high, size, phase) { return this.add(new Crusher(this.g, x, z, low, high, size, phase)); }
  pendulum(x, y, z, len, axis, amp, period, phase) { return this.add(new Pendulum(this.g, x, y, z, len, axis, amp, period, phase)); }
  dart(x, y, z, dir, period, phase) { return this.add(new DartTrap(this.g, x, y, z, dir, period, phase)); }
  bubble(x, y, z, h, period, phase) { return this.add(new LavaBubble(this.g, x, y, z, h, period, phase)); }
  pipe(x, y, z, h, warp, color) { return this.add(new Pipe(this.g, x, y, z, h, warp, color)); }
  portal(x, y, z, target, color) { return this.add(new Portal(this.g, x, y, z, target, color)); }
  gravity(x, y, z, w, h, d) { return this.add(new GravityZone(this.g, x, y, z, w, h, d)); }
  hint(x, z, r, text) { return this.add(new HintZone(this.g, x, z, r, text)); }
  checkpoint(x, y, z, yaw = 0) { return this.add(new Checkpoint(this.g, x, y, z, yaw)); }
  goal(x, y, z, type, yaw) { return this.add(new Goal(this.g, x, y, z, type, yaw)); }
  medal(x, y, z) { return this.add(new Medal(this.g, x, y, z, this.medalCount++)); }
  enemy(type, x, y, z, opts) { const e = new Enemy(this.g, type, x, y, z, opts); this.g.addEnemy(e); return e; }
  plantPipe(x, y, z, h, color) {
    this.pipe(x, y, z, h, null, color);
    return this.enemy('plant', x, y + h, z, { pipe: true });
  }
  boss(type, cx, cy, cz, radius, gate) {
    const B = type === 'magmor' ? Magmor : Vortex;
    const b = new B(this.g, cx, cy, cz, radius);
    this.g.bosses.push(b);
    this.add(b);
    this.add(new BossArena(this.g, b, cx, cy, cz, radius, gate));
    return b;
  }
  start(x, y, z, yaw = 0) { this.g.startPos = { p: V(x, y, z), yaw }; }

  // ------------------------------------------------ decoration (merged, vertex coloured)
  put(geo, color, x, y, z, sx, sy = sx, sz = sx, rx = 0, ry = 0, rz = 0) {
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    const m = new THREE.Matrix4().compose(V(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), V(sx, sy, sz));
    g.applyMatrix4(m);
    const c = new THREE.Color(color);
    const n = g.attributes.position.count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    this.deco.push(g);
  }
  tree(x, y, z, s = 1, kind = 'round') {
    const r = this.rand;
    const P = (...a) => this.put(...a);
    switch (kind) {
      case 'palm': {
        const h = 5 * s;
        for (let i = 0; i < 5; i++) P(DECO.cyl, i % 2 ? 0x9a6a3a : 0x7a5228, x + i * 0.12 * s, y + (i + 0.5) * h / 5, z, 0.22 * s, h / 5, 0.22 * s, 0, 0, -0.08);
        for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; P(DECO.cone, 0x2fae3f, x + 0.6 * s + Math.cos(a) * 1.3 * s, y + h - 0.2, z + Math.sin(a) * 1.3 * s, 0.5 * s, 2.8 * s, 0.25 * s, Math.sin(a) * 1.3, 0, -Math.cos(a) * 1.3); }
        P(DECO.sphere0, 0x7a4a1a, x + 0.6 * s, y + h - 0.3, z, 0.4 * s);
        break;
      }
      case 'pine':
        P(DECO.cyl, 0x6b4423, x, y + 1 * s, z, 0.25 * s, 2 * s, 0.25 * s);
        for (let i = 0; i < 3; i++) P(DECO.cone, i % 2 ? 0x1f7a3a : 0x23894a, x, y + (2 + i * 1.2) * s, z, (1.8 - i * 0.45) * s, 2.2 * s, (1.8 - i * 0.45) * s);
        break;
      case 'jungle': {
        const h = (7 + r() * 4) * s;
        P(DECO.cyl, 0x5a3a1e, x, y + h / 2, z, 0.45 * s, h, 0.45 * s);
        for (let i = 0; i < 4; i++) P(DECO.sphere, i % 2 ? 0x1f6b2a : 0x2a7d33, x + (r() - 0.5) * 3 * s, y + h + (r() - 0.3) * 1.5 * s, z + (r() - 0.5) * 3 * s, (2 + r()) * s, (1.2 + r() * 0.5) * s, (2 + r()) * s);
        for (let i = 0; i < 3; i++) P(DECO.cyl, 0x3a7a2a, x + (r() - 0.5) * 3 * s, y + h - 2 * s, z + (r() - 0.5) * 3 * s, 0.06, 4 * s, 0.06);
        break;
      }
      case 'mushroom': {
        const h = (3 + r() * 3) * s;
        P(DECO.cyl, 0xf3e3c3, x, y + h / 2, z, 0.5 * s, h, 0.5 * s);
        const cc = [0xe53935, 0x2e9e3a, 0xffb300, 0x1e88e5][Math.floor(r() * 4)];
        P(DECO.hemi, cc, x, y + h - 0.2, z, 2.2 * s, 1.4 * s, 2.2 * s);
        for (let i = 0; i < 5; i++) { const a = i * 1.26; P(DECO.sphere0, 0xffffff, x + Math.cos(a) * 1.4 * s, y + h + 0.6 * s, z + Math.sin(a) * 1.4 * s, 0.35 * s, 0.2 * s, 0.35 * s); }
        break;
      }
      case 'dead':
        P(DECO.cyl, 0x3a2a2a, x, y + 2 * s, z, 0.3 * s, 4 * s, 0.3 * s);
        P(DECO.cyl, 0x3a2a2a, x + 0.6 * s, y + 3.2 * s, z, 0.12 * s, 2 * s, 0.12 * s, 0, 0, -0.8);
        P(DECO.cyl, 0x3a2a2a, x - 0.5 * s, y + 2.8 * s, z, 0.12 * s, 1.6 * s, 0.12 * s, 0, 0, 0.9);
        break;
      default:
        P(DECO.cyl, 0x7a5228, x, y + 1.2 * s, z, 0.3 * s, 2.4 * s, 0.3 * s);
        P(DECO.sphere, 0x3fbf4a, x, y + 3.2 * s, z, 1.7 * s, 1.5 * s, 1.7 * s);
        P(DECO.sphere, 0x34a83f, x + 0.6 * s, y + 3.9 * s, z + 0.3 * s, 1.1 * s);
    }
  }
  bush(x, y, z, s = 1, color = 0x34a83f) { this.put(DECO.sphere, color, x, y + 0.4 * s, z, 1.1 * s, 0.8 * s, 1.1 * s); this.put(DECO.sphere, color, x + 0.8 * s, y + 0.3 * s, z, 0.8 * s, 0.6 * s, 0.8 * s); }
  flower(x, y, z, color = 0xff5a8a) { this.put(DECO.cyl, 0x2e9e3a, x, y + 0.3, z, 0.04, 0.6, 0.04); this.put(DECO.sphere0, color, x, y + 0.65, z, 0.18); this.put(DECO.sphere0, 0xffee55, x, y + 0.66, z, 0.08); }
  rock(x, y, z, s = 1, color = 0x8a8a96) { this.put(DECO.sphere0, color, x, y + 0.3 * s, z, s, 0.7 * s, s, 0, this.rand() * 3, 0); }
  pillar(x, y, z, h = 6, color = 0x6a6a78, solid = false) {
    this.put(DECO.cyl, color, x, y + h / 2, z, 0.8, h, 0.8);
    this.put(DECO.box, color, x, y + h, z, 2, 0.5, 2);
    this.put(DECO.box, color, x, y + 0.25, z, 2, 0.5, 2);
    if (solid) this.world.box(x - 0.8, y, z - 0.8, x + 0.8, y + h + 0.25, z + 0.8);
  }
  torch(x, y, z) {
    this.put(DECO.cyl, 0x4a4040, x, y + 1, z, 0.12, 2, 0.12);
    this.put(DECO.cone, 0xffa21a, x, y + 2.3, z, 0.3, 0.7, 0.3, Math.PI);
    this.put(DECO.sphere0, 0xffe066, x, y + 2.25, z, 0.22);
  }
  crystal(x, y, z, s = 1, color = 0xb46bff) { this.put(DECO.oct, color, x, y + 1.2 * s, z, 0.6 * s, 1.6 * s, 0.6 * s, 0, this.rand() * 3, (this.rand() - 0.5) * 0.4); }
  waterfall(x, y, z, w, h, rotY = 0) {
    const t = tex('water').clone(); t.needsUpdate = true;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0.8, side: THREE.DoubleSide }));
    m.material.map.repeat.set(w / 4, h / 4);
    m.position.set(x, y + h / 2, z); m.rotation.y = rotY; this.scene.add(m);
    this.animated.push({ tex: m.material.map, vx: 0, vy: 1.2 });
  }
  cloud(x, y, z, s = 1) {
    for (let i = 0; i < 4; i++) {
      const g = DECO.sphere.clone();
      g.deleteAttribute('normal'); g.computeVertexNormals();
      g.applyMatrix4(new THREE.Matrix4().compose(V(x + (i - 1.5) * 2.2 * s, y + (i % 2) * 0.8 * s, z + (this.rand() - 0.5) * 2 * s), new THREE.Quaternion(), V(2.2 * s, 1.5 * s, 1.8 * s)));
      this.cloudGeos.push(g);
    }
  }
  forest(x0, z0, x1, z1, n, kind, scaleMin = 0.8, scaleMax = 1.4) {
    for (let i = 0; i < n; i++) {
      const x = x0 + this.rand() * (x1 - x0), z = z0 + this.rand() * (z1 - z0);
      const g = this.world.ground(x, z, 0.1, 200);
      if (!g) continue;
      this.tree(x, g.y, z, scaleMin + this.rand() * (scaleMax - scaleMin), kind);
    }
  }
  scatter(x0, z0, x1, z1, n, fn) {
    for (let i = 0; i < n; i++) {
      const x = x0 + this.rand() * (x1 - x0), z = z0 + this.rand() * (z1 - z0);
      const g = this.world.ground(x, z, 0.1, 200);
      if (g) fn(x, g.y, z, this.rand);
    }
  }

  // ------------------------------------------------ environment
  fluid(kind, y, size = 2000) {
    const t = tex(kind).clone(); t.needsUpdate = true;
    t.repeat.set(size / 8, size / 8);
    const mat = kind === 'lava'
      ? new THREE.MeshBasicMaterial({ map: t, color: 0xffffff })
      : new THREE.MeshLambertMaterial({ map: t, transparent: true, opacity: 0.85 });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
    m.rotation.x = -Math.PI / 2;
    const c = this.bounds.getCenter(new THREE.Vector3());
    m.position.set(c.x, y, c.z);
    m.receiveShadow = kind !== 'lava';
    this.scene.add(m);
    this.animated.push({ tex: t, vx: kind === 'lava' ? 0.02 : 0.03, vy: kind === 'lava' ? 0.015 : 0.01 });
    this.g.fluidY = y; this.g.fluidKind = kind;
    return m;
  }

  finish() {
    const th = this.theme;
    // terrain meshes: one draw call per (style, top/side)
    for (const style in this.buffers) {
      const mats = terrainMaterials(style);
      for (const part of ['top', 'side']) {
        const b = this.buffers[style][part];
        if (!b.idx.length) continue;
        const m = new THREE.Mesh(b.geometry(), mats[part]);
        m.receiveShadow = true; m.castShadow = true;
        this.scene.add(m);
      }
    }
    // background mountains around the level
    const c = this.bounds.getCenter(new THREE.Vector3());
    const size = this.bounds.getSize(new THREE.Vector3());
    const R = Math.max(size.x, size.z) / 2 + 90;
    const baseY = this.bounds.min.y + 18;
    if (th.mountains) {
      for (let i = 0; i < 26; i++) {
        const a = (i / 26) * Math.PI * 2 + this.rand() * 0.2;
        const rr = R + this.rand() * 60;
        const h = 40 + this.rand() * 70;
        this.put(DECO.cone, th.mountains[i % th.mountains.length], c.x + Math.cos(a) * rr, baseY + h / 2 - 10, c.z + Math.sin(a) * rr, 30 + this.rand() * 30, h, 30 + this.rand() * 30);
        if (th.snow && h > 80) this.put(DECO.cone, 0xffffff, c.x + Math.cos(a) * rr, baseY + h - 10 - 7, c.z + Math.sin(a) * rr, 9, 14, 9);
      }
    }
    if (this.deco.length) {
      const merged = mergeGeometries(this.deco, false);
      const m = new THREE.Mesh(merged, new THREE.MeshLambertMaterial({ vertexColors: true }));
      m.castShadow = this.g.quality === 'high'; m.receiveShadow = false;
      this.scene.add(m);
      this.deco.length = 0;
    }
    if (this.cloudGeos.length) {
      const merged = mergeGeometries(this.cloudGeos, false);
      const m = new THREE.Mesh(merged, new THREE.MeshLambertMaterial({ color: th.cloudColor || 0xffffff, emissive: th.cloudEmissive || 0x666666 }));
      this.scene.add(m);
    }
    return { center: c, size };
  }
}

// Gradient sky dome that follows the camera.
export function makeSky(theme) {
  const geo = new THREE.SphereGeometry(800, 24, 12);
  const top = new THREE.Color(theme.skyTop), mid = new THREE.Color(theme.skyMid || theme.skyBottom), bot = new THREE.Color(theme.skyBottom);
  const cols = [];
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) / 800;
    const c = y > 0.15 ? mid.clone().lerp(top, Math.min(1, (y - 0.15) / 0.6)) : bot.clone().lerp(mid, Math.max(0, (y + 0.2) / 0.35));
    cols.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
  m.renderOrder = -10;
  const group = new THREE.Group();
  group.add(m);
  if (theme.stars) {
    const n = 900, arr = new Float32Array(n * 3);
    const r = rng(77);
    for (let i = 0; i < n; i++) {
      const u = r() * 2 - 1, a = r() * Math.PI * 2, s = Math.sqrt(1 - u * u);
      arr[i * 3] = Math.cos(a) * s * 700; arr[i * 3 + 1] = Math.abs(u) * 700 * (theme.stars === 'full' ? Math.sign(u) || 1 : 1); arr[i * 3 + 2] = Math.sin(a) * s * 700;
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    group.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, fog: false })));
  }
  if (theme.sun) {
    const s = new THREE.Mesh(new THREE.CircleGeometry(40, 24), new THREE.MeshBasicMaterial({ color: theme.sun, fog: false, transparent: true, opacity: 0.9 }));
    const d = new THREE.Vector3(...theme.sunDir).normalize().multiplyScalar(700);
    s.position.copy(d); s.lookAt(0, 0, 0);
    group.add(s);
  }
  return group;
}
