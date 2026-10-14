// Enemies with simple AI: patrol, chase, charge, hover & shoot, emerge & spit.
import * as THREE from 'three';
import { buildEnemy } from './models.js';
import { touches, Projectile } from './objects.js';
import { audio } from './audio.js';
import { clamp, dampAngle } from './util.js';

const STOMPABLE = { walker: true, firewalker: true, beetle: true, buzzer: true, drone: true, spiny: false, plant: false };

export class Enemy {
  constructor(game, type, x, y, z, opts = {}) {
    this.game = game; this.type = type; this.alive = true; this.dying = 0;
    this.mesh = buildEnemy(type);
    this.mesh.position.set(x, y, z);
    game.scene.add(this.mesh);
    this.pos = this.mesh.position;
    this.home = new THREE.Vector3(x, y, z);
    this.vy = 0;
    this.r = this.mesh.radius || 0.6; this.h = this.mesh.height || 1;
    this.patrol = opts.patrol !== undefined ? opts.patrol : 4;
    this.axis = opts.axis || 'x';
    this.dir = 1;
    this.speed = opts.speed || (type === 'spiny' ? 1.6 : type === 'beetle' ? 2.6 : 2.2);
    this.chase = opts.chase !== undefined ? opts.chase : (type === 'walker' || type === 'beetle' || type === 'firewalker');
    this.yaw = 0;
    this.t = Math.random() * 10;
    this.state = 'patrol'; this.stateT = 0;
    this.shootT = 1 + Math.random() * 2;
    this.flying = type === 'buzzer' || type === 'drone';
    this.hoverY = y;
    this.pipe = !!opts.pipe;
  }

  targetPos() { return new THREE.Vector3(this.pos.x, this.pos.y + (this.flying ? 0 : this.h * 0.5), this.pos.z); }

  kill(how = 'hit') {
    if (!this.alive || this.dying) return;
    const g = this.game;
    this.dying = 0.001;
    if (how === 'stomp') {
      audio.sfx('stomp');
      this.squash = true;
    } else {
      audio.sfx('kill');
      g.fx.explosion(this.targetPos(), 0.45);
    }
    const pts = g.player.onEnemyKilled(how);
    g.addScore(pts, this.targetPos());
    g.fx.burst(this.targetPos(), 10, 0xffffff, 5, 0.5, 4);
    if (g.settings.vibration) g.vibrate(30);
  }

  // Player contact resolution.
  checkPlayer() {
    const g = this.game, p = g.player;
    if (!p.alive || this.dying) return;
    if (this.type === 'plant' && this.emerge < 0.3) return;
    const c = this.targetPos();
    const hs = p.hitSphere();
    if (hs && Math.hypot(hs.x - c.x, hs.y - c.y, hs.z - c.z) < hs.r + this.r) { this.kill('hit'); return; }
    if (!touches(p, c.x, c.y, c.z, this.r * 0.85)) return;
    const ak = p.attackKind();
    const falling = p.vel.y < 0 && p.pos.y > c.y - this.h * 0.15;
    if (ak === 'star' || ak === 'strong' || ak === 'pound' || ak === 'spin') { this.kill(ak === 'pound' ? 'stomp' : 'hit'); return; }
    if (ak === 'ball') {
      if (!STOMPABLE[this.type]) { p.hurt(c); if (p.body.vel.y < 6) p.body.vel.y = 8; return; }
      this.kill(falling ? 'stomp' : 'hit');
      if (!falling) p.bounce(7);
      return;
    }
    if (falling && STOMPABLE[this.type]) { this.kill('stomp'); return; }
    if (falling && this.type === 'spiny') { p.hurt(c); p.body.vel.y = 9; return; }
    p.hurt(c);
  }

  groundAt(x, z, maxY) { return this.game.world.ground(x, z, 0.2, maxY); }

  update(dt) {
    const g = this.game, p = g.player;
    this.t += dt; this.stateT += dt;
    if (this.dying) {
      this.dying += dt;
      if (this.squash) { this.mesh.scale.set(1.3, Math.max(0.15, 1 - this.dying * 4), 1.3); }
      else { this.mesh.scale.multiplyScalar(0.85); this.pos.y += dt * 3; }
      if (this.dying > 0.4) { this.alive = false; g.scene.remove(this.mesh); }
      return;
    }
    // sleep when far away (performance)
    const dx = p.pos.x - this.pos.x, dz = p.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist > 70) return;

    if (this.type === 'plant') this.updatePlant(dt, dist);
    else if (this.flying) this.updateFlyer(dt, dist, dx, dz);
    else this.updateWalker(dt, dist, dx, dz);
    this.checkPlayer();
  }

  updateWalker(dt, dist, dx, dz) {
    const g = this.game, p = g.player, pos = this.pos;
    let mvx = 0, mvz = 0, sp = this.speed;
    const dy = Math.abs(p.pos.y - pos.y);
    if (this.type === 'beetle') {
      if (this.state === 'patrol' && dist < 11 && dy < 2.5 && p.alive) { this.state = 'aim'; this.stateT = 0; }
      if (this.state === 'aim') {
        this.yaw = dampAngle(this.yaw, Math.atan2(dx, dz), 10, dt);
        if (this.stateT > 0.5) { this.state = 'charge'; this.stateT = 0; this.cx = Math.sin(this.yaw); this.cz = Math.cos(this.yaw); }
      } else if (this.state === 'charge') {
        mvx = this.cx; mvz = this.cz; sp = 8;
        if (this.stateT > 1.3) { this.state = 'cool'; this.stateT = 0; }
      } else if (this.state === 'cool') {
        if (this.stateT > 1.2) { this.state = 'patrol'; this.stateT = 0; }
      }
    }
    if (this.state === 'patrol') {
      if (this.chase && dist < 9 && dy < 2 && p.alive) {
        mvx = dx / (dist || 1); mvz = dz / (dist || 1); sp = this.speed * 1.6;
      } else if (this.patrol > 0) {
        const off = this.axis === 'x' ? pos.x - this.home.x : pos.z - this.home.z;
        if (off > this.patrol) this.dir = -1; else if (off < -this.patrol) this.dir = 1;
        if (this.axis === 'x') mvx = this.dir; else mvz = this.dir;
      }
    }
    if (mvx || mvz) {
      const nx = pos.x + mvx * sp * dt, nz = pos.z + mvz * sp * dt;
      // stay on the platform and avoid walls
      const ahead = this.groundAt(pos.x + mvx * 0.8, pos.z + mvz * 0.8, pos.y + 0.5);
      const wall = g.world.pointSolid(pos.x + mvx * (this.r + 0.1), pos.y + 0.5, pos.z + mvz * (this.r + 0.1));
      if (ahead && ahead.y > pos.y - 0.8 && !wall) { pos.x = nx; pos.z = nz; }
      else { this.dir *= -1; if (this.state === 'charge') { this.state = 'cool'; this.stateT = 0; } }
      this.yaw = dampAngle(this.yaw, Math.atan2(mvx, mvz), 8, dt);
    }
    // gravity / ground
    const gr = this.groundAt(pos.x, pos.z, pos.y + 0.5);
    if (gr && pos.y - gr.y < 0.6) { pos.y = gr.y; this.vy = 0; if (gr.c.dynamic) { pos.x += gr.c.delta.x; pos.z += gr.c.delta.z; pos.y = gr.c.topAt(pos.x, pos.z); } }
    else { this.vy -= 30 * dt; pos.y += this.vy * dt; if (gr && pos.y < gr.y) { pos.y = gr.y; this.vy = 0; } }
    if (pos.y < this.game.killY) { this.alive = false; this.game.scene.remove(this.mesh); return; }
    this.mesh.rotation.y = this.yaw;
    // animation
    const P = this.mesh.parts;
    const moving = mvx || mvz;
    if (P.footL) { const s = moving ? Math.sin(this.t * 14) * 0.15 : 0; P.footL.position.z = 0.05 + s; P.footR.position.z = 0.05 - s; this.mesh.rotation.z = moving ? Math.sin(this.t * 14) * 0.08 : 0; }
    if (P.wheel) P.wheel.rotation.x += dt * sp * 4 * (moving ? 1 : 0);
    if (this.type === 'spiny') this.mesh.children[0].rotation.y += dt;
    if (this.state === 'aim') this.mesh.position.y = pos.y + Math.abs(Math.sin(this.t * 30)) * 0.1;
  }

  updateFlyer(dt, dist, dx, dz) {
    const g = this.game, p = g.player, pos = this.pos;
    const drone = this.type === 'drone';
    const P = this.mesh.parts;
    P.wingL.rotation.z = Math.sin(this.t * 40) * 0.5; P.wingR.rotation.z = -Math.sin(this.t * 40) * 0.5;
    if (drone && this.state === 'dash') {
      pos.addScaledVector(this.dashV, dt);
      if (this.stateT > 0.8) { this.state = 'patrol'; this.stateT = 0; this.home.copy(pos); this.hoverY = pos.y; }
      return;
    }
    // hover patrol
    const off = Math.sin(this.t * 0.8) * this.patrol;
    let tx = this.home.x + (this.axis === 'x' ? off : 0), tz = this.home.z + (this.axis === 'z' ? off : 0);
    if (dist < 14 && p.alive) { tx = this.home.x + clamp(p.pos.x - this.home.x, -6, 6); tz = this.home.z + clamp(p.pos.z - this.home.z, -6, 6); }
    pos.x += (tx - pos.x) * Math.min(1, dt * 1.5);
    pos.z += (tz - pos.z) * Math.min(1, dt * 1.5);
    pos.y = this.hoverY + Math.sin(this.t * 2.5) * 0.4;
    this.mesh.rotation.y = dampAngle(this.mesh.rotation.y, Math.atan2(dx, dz), 5, dt);
    this.shootT -= dt;
    if (dist < 16 && p.alive && this.shootT <= 0) {
      this.shootT = drone ? 2.6 : 3.2;
      if (drone && Math.random() < 0.5) {
        const to = new THREE.Vector3(p.pos.x - pos.x, p.pos.y + 0.8 - pos.y, p.pos.z - pos.z).normalize();
        this.dashV = to.multiplyScalar(14); this.state = 'dash'; this.stateT = 0; audio.sfx('homing');
      } else {
        const from = pos.clone(); from.y -= 0.3;
        const v = new THREE.Vector3(p.pos.x - from.x, p.pos.y + 0.8 - from.y, p.pos.z - from.z).normalize().multiplyScalar(9);
        g.spawn(new Projectile(g, from, v, { color: drone ? 0xff3df2 : 0xff5a1a, r: 0.28, life: 3, destroyable: true }));
        audio.sfx('fireball');
      }
    }
  }

  updatePlant(dt, dist) {
    const g = this.game, p = g.player;
    // cycle: hidden -> rise -> shoot -> sink
    const cyc = this.t % 5;
    let e;
    if (cyc < 1.2) e = 0; else if (cyc < 1.8) e = (cyc - 1.2) / 0.6; else if (cyc < 4.0) e = 1; else if (cyc < 4.6) e = 1 - (cyc - 4.0) / 0.6; else e = 0;
    if (this.pipe && dist < 3.0 && e === 0) e = 0; // stays hidden if player stands next to the pipe
    this.emerge = e;
    this.mesh.position.y = this.home.y - (1 - e) * 2.2;
    this.mesh.visible = e > 0.02;
    const head = this.mesh.parts.head;
    head.rotation.y = Math.atan2(p.pos.x - this.pos.x, p.pos.z - this.pos.z);
    this.mesh.parts.jaw.rotation.x = Math.PI + Math.abs(Math.sin(this.t * 6)) * 0.5;
    if (e === 1 && !this.shot && cyc > 2.6 && dist < 20 && p.alive) {
      this.shot = true;
      const from = new THREE.Vector3(this.pos.x, this.pos.y + 1.5, this.pos.z);
      const v = new THREE.Vector3(p.pos.x - from.x, p.pos.y + 0.8 - from.y, p.pos.z - from.z).normalize().multiplyScalar(8);
      g.spawn(new Projectile(g, from, v, { color: 0xff5a1a, r: 0.3, life: 3 }));
      audio.sfx('fireball');
    }
    if (cyc < 1) this.shot = false;
  }
}
