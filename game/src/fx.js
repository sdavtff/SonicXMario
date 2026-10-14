// Pooled CPU particle system (one draw call per pool).
import * as THREE from 'three';
import { canvasTex } from './materials.js';

const dotTex = () => canvasTex(32, (g, s) => {
  const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.8)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, s, s);
}, false);

class Pool {
  constructor(scene, n, size, additive) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.col = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.life = new Float32Array(n);
    this.max = new Float32Array(n);
    this.grav = new Float32Array(n);
    this.base = new Float32Array(n * 3);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.PointsMaterial({ size, map: dotTex(), vertexColors: true, transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, sizeAttenuation: true });
    this.points = new THREE.Points(this.geo, this.mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.cursor = 0;
    for (let i = 0; i < n; i++) this.pos[i * 3 + 1] = -9999;
  }

  emit(x, y, z, vx, vy, vz, color, life, grav) {
    const i = this.cursor; this.cursor = (this.cursor + 1) % this.n;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    const c = new THREE.Color(color);
    this.base[i * 3] = c.r; this.base[i * 3 + 1] = c.g; this.base[i * 3 + 2] = c.b;
    this.life[i] = life; this.max[i] = life; this.grav[i] = grav;
  }

  update(dt) {
    let any = false;
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) continue;
      any = true;
      this.life[i] -= dt;
      const k = i * 3;
      if (this.life[i] <= 0) { this.pos[k + 1] = -9999; continue; }
      this.vel[k + 1] -= this.grav[i] * dt;
      this.pos[k] += this.vel[k] * dt; this.pos[k + 1] += this.vel[k + 1] * dt; this.pos[k + 2] += this.vel[k + 2] * dt;
      const f = Math.min(1, this.life[i] / this.max[i] * 1.5);
      this.col[k] = this.base[k] * f; this.col[k + 1] = this.base[k + 1] * f; this.col[k + 2] = this.base[k + 2] * f;
    }
    if (any || this.dirty) {
      this.geo.attributes.position.needsUpdate = true;
      this.geo.attributes.color.needsUpdate = true;
      this.dirty = any;
    }
  }
}

export class FX {
  constructor(scene, quality) {
    const n = quality === 'low' ? 220 : 500;
    this.small = new Pool(scene, n, 0.35, true);
    this.big = new Pool(scene, Math.floor(n / 3), 1.1, true);
    this.dustPool = new Pool(scene, 120, 0.9, false);
  }
  burst(p, count, color, speed = 6, life = 0.6, grav = 6) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1;
      const s = speed * (0.4 + Math.random() * 0.6);
      this.small.emit(p.x, p.y, p.z, Math.cos(a) * s * Math.sqrt(1 - e * e), e * s + speed * 0.3, Math.sin(a) * s * Math.sqrt(1 - e * e), color, life * (0.6 + Math.random() * 0.6), grav);
    }
  }
  sparkle(p, color = 0xffffaa) {
    this.small.emit(p.x + (Math.random() - 0.5), p.y + (Math.random() - 0.5) * 1.2, p.z + (Math.random() - 0.5), 0, 1.5, 0, color, 0.5, 0);
  }
  trail(p, color) {
    this.small.emit(p.x + (Math.random() - 0.5) * 0.5, p.y + (Math.random() - 0.5) * 0.8, p.z + (Math.random() - 0.5) * 0.5, 0, 0.3, 0, color, 0.35, 0);
  }
  explosion(p, scale = 1) {
    for (let i = 0; i < 18 * scale; i++) {
      const a = Math.random() * Math.PI * 2, s = (3 + Math.random() * 6) * scale;
      this.big.emit(p.x, p.y, p.z, Math.cos(a) * s, Math.random() * 6 * scale, Math.sin(a) * s, i % 3 ? 0xff8a1a : 0xffe066, 0.7, 4);
    }
    this.burst(p, 20 * scale, 0xffffff, 8 * scale, 0.5);
  }
  dust(p, count = 6) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      this.dustPool.emit(p.x, p.y + 0.15, p.z, Math.cos(a) * 2.5, 0.8 + Math.random(), Math.sin(a) * 2.5, 0xd8cbb8, 0.5, 1);
    }
  }
  update(dt) { this.small.update(dt); this.big.update(dt); this.dustPool.update(dt); }
}
