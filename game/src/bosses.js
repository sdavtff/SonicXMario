// Boss fights: Magmor (Lava Castle) and Vortex (Final Dimension).
import * as THREE from 'three';
import { buildBoss, GEO } from './models.js';
import { toon, basic } from './materials.js';
import { touches, Projectile } from './objects.js';
import { Enemy } from './enemies.js';
import { audio } from './audio.js';
import { clamp, dampAngle } from './util.js';

class Shockwave {
  constructor(game, x, y, z, speed = 11, maxR = 18) {
    this.game = game; this.alive = true; this.x = x; this.y = y; this.z = z; this.r = 0.5; this.speed = speed; this.maxR = maxR;
    this.mesh = new THREE.Mesh(new THREE.TorusGeometry(1, 0.18, 6, 48), toon(0xffa21a, { emissive: 0xff5500, transparent: true, opacity: 0.9 }));
    this.mesh.rotation.x = Math.PI / 2; this.mesh.position.set(x, y + 0.25, z);
    game.scene.add(this.mesh);
  }
  update(dt) {
    this.r += this.speed * dt;
    this.mesh.scale.set(this.r, this.r, 1.4);
    this.mesh.material.opacity = Math.max(0, 1 - this.r / this.maxR);
    const p = this.game.player;
    const d = Math.hypot(p.pos.x - this.x, p.pos.z - this.z);
    if (p.alive && Math.abs(d - this.r) < 0.6 && p.pos.y < this.y + 0.5) p.hurt(new THREE.Vector3(this.x, this.y, this.z));
    if (this.r > this.maxR) { this.alive = false; this.game.scene.remove(this.mesh); }
  }
}

class Telegraph {
  // red warning circle on the ground, then an impact
  constructor(game, x, y, z, r, delay, onImpact) {
    this.game = game; this.alive = true; this.t = 0; this.delay = delay; this.onImpact = onImpact; this.x = x; this.y = y; this.z = z; this.r = r;
    this.mesh = new THREE.Mesh(new THREE.RingGeometry(r * 0.8, r, 24), basic(0xff2a2a, { transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false }));
    this.mesh.rotation.x = -Math.PI / 2; this.mesh.position.set(x, y + 0.05, z);
    game.scene.add(this.mesh);
  }
  update(dt) {
    this.t += dt;
    this.mesh.material.opacity = 0.3 + Math.abs(Math.sin(this.t * 12)) * 0.5;
    if (this.t >= this.delay) { this.alive = false; this.game.scene.remove(this.mesh); this.onImpact(this); }
  }
}

class Meteor {
  constructor(game, x, y, z, groundY) {
    this.game = game; this.alive = true; this.x = x; this.z = z; this.gy = groundY;
    this.mesh = new THREE.Mesh(GEO.sphereLo, toon(0xff6a2a, { emissive: 0xaa2200 })); this.mesh.scale.setScalar(0.8);
    this.mesh.position.set(x, y, z); game.scene.add(this.mesh);
  }
  update(dt) {
    this.mesh.position.y -= 30 * dt;
    if (Math.random() < 0.6) this.game.fx.trail(this.mesh.position, 0xff7a1a);
    if (this.mesh.position.y <= this.gy) {
      this.alive = false; this.game.scene.remove(this.mesh);
      this.game.fx.explosion(this.mesh.position, 0.7); audio.sfx('explode');
      const p = this.game.player;
      if (p.alive && Math.hypot(p.pos.x - this.x, p.pos.z - this.z) < 1.8 && p.pos.y < this.gy + 2) p.hurt(this.mesh.position);
    }
  }
}

class Boss {
  constructor(game, type, cx, cy, cz, name, maxHp) {
    this.game = game; this.type = type; this.alive = true; this.active = false; this.name = name;
    this.c = new THREE.Vector3(cx, cy, cz);
    this.hp = maxHp; this.maxHp = maxHp;
    this.mesh = buildBoss(type);
    this.mesh.position.set(cx, cy, cz + 8);
    game.scene.add(this.mesh);
    this.pos = this.mesh.position;
    this.state = 'wait'; this.t = 0; this.inv = 0; this.yaw = Math.PI; this.flash = 0;
    this.defeated = false;
  }
  targetPos() { return new THREE.Vector3(this.pos.x, this.pos.y + this.mesh.height * 0.6, this.pos.z); }
  get vulnerable() { return false; }
  get homingOk() { return this.vulnerable && this.inv <= 0; }
  start() {
    if (this.active) return;
    this.active = true; this.state = 'intro'; this.t = 0;
    this.game.bossBar(this.name, this.hp, this.maxHp);
    audio.playMusic('boss');
    audio.sfx('roar');
    this.game.camShake(0.5);
  }
  setState(s) { this.state = s; this.t = 0; this.inited = false; }
  takeHit(dmg = 1) {
    if (this.inv > 0 || this.defeated) return false;
    const g = this.game;
    this.hp = Math.max(0, this.hp - dmg);
    this.inv = 1.0; this.flash = 0.6;
    audio.sfx('bosshit'); g.camShake(0.4);
    g.addScore(500, this.targetPos());
    g.fx.burst(this.targetPos(), 25, 0xffffff, 8, 0.6, 4);
    g.bossBar(this.name, this.hp, this.maxHp);
    if (this.hp <= 0) { this.defeated = true; this.setState('dying'); audio.stopMusic(); g.clearHazards(); this.laser && (this.laser.visible = false); }
    else this.onHurt();
    return true;
  }
  onHurt() {}
  checkPlayer() {
    const g = this.game, p = g.player;
    if (!p.alive || this.defeated) return;
    const c = this.targetPos();
    const r = this.mesh.radius;
    const hs = p.hitSphere();
    if (hs && this.vulnerable && Math.hypot(hs.x - c.x, hs.y - c.y, hs.z - c.z) < hs.r + r) { this.takeHit(); return; }
    if (!touches(p, c.x, c.y, c.z, r)) return;
    const ak = p.attackKind();
    const above = p.vel.y < 0 && p.pos.y > c.y - r * 0.5;
    const dx = p.pos.x - c.x, dz = p.pos.z - c.z, d = Math.hypot(dx, dz) || 1;
    if (this.vulnerable) {
      // a dazed boss never hurts on contact: stomp or attack it, otherwise get nudged away
      if ((ak || above) && this.takeHit()) {
        p.state = 'normal';
        p.hurtTime = Math.max(p.hurtTime, 0.9); // brief grace period after a successful hit
        p.bounce(12);
        p.body.vel.x = (dx / d) * 9; p.body.vel.z = (dz / d) * 9;
      } else if (!ak && !above) {
        p.body.vel.x += (dx / d) * 2; p.body.vel.z += (dz / d) * 2;
      }
    } else {
      p.hurt(c);
      if (p.alive) { p.body.vel.x = (dx / d) * 12; p.body.vel.z = (dz / d) * 12; }
    }
  }
  fireHit() { if (this.vulnerable) this.takeHit(); else audio.sfx('bump'); }
  dyingUpdate(dt) {
    const g = this.game;
    this.mesh.position.x += (Math.random() - 0.5) * 0.2;
    if (Math.random() < dt * 10) {
      const p = this.targetPos().add(new THREE.Vector3((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 4));
      g.fx.explosion(p, 0.8); audio.sfx('explode');
    }
    if (this.t > 2.6) {
      g.fx.explosion(this.targetPos(), 2.5); audio.sfx('explode');
      this.alive = false; g.scene.remove(this.mesh);
      g.onBossDefeated(this);
    }
  }
  playerDist() { const p = this.game.player.pos; return Math.hypot(p.x - this.pos.x, p.z - this.pos.z); }
}

export class Magmor extends Boss {
  constructor(game, cx, cy, cz, radius) {
    super(game, 'magmor', cx, cy, cz, 'REI MAGMOR', 6);
    this.R = radius; this.next = 0;
    this.stars = new THREE.Group();
    for (let i = 0; i < 3; i++) { const s = new THREE.Mesh(GEO.sphereLo, toon(0xffee55, { emissive: 0x887700 })); s.scale.setScalar(0.25); this.stars.add(s); }
    this.stars.visible = false; game.scene.add(this.stars);
  }
  get vulnerable() { return this.state === 'stunned'; }
  onHurt() { this.setState('recover'); }
  update(dt) {
    const g = this.game, p = g.player;
    this.t += dt; if (this.inv > 0) this.inv -= dt; if (this.flash > 0) this.flash -= dt;
    this.mesh.visible = !(this.flash > 0 && Math.floor(this.flash * 20) % 2 === 0);
    if (!this.active) return;
    const P = this.mesh.parts;
    const enraged = this.hp <= 3;
    const toP = Math.atan2(p.pos.x - this.pos.x, p.pos.z - this.pos.z);
    this.stars.visible = this.state === 'stunned';
    if (this.state === 'dying') { this.dyingUpdate(dt); return; }
    switch (this.state) {
      case 'intro':
        P.head.rotation.x = -0.4 + Math.sin(this.t * 20) * 0.1;
        if (this.t > 1.8) this.setState('walk');
        break;
      case 'walk': {
        this.yaw = dampAngle(this.yaw, toP, 3, dt);
        const sp = enraged ? 5.5 : 3.8;
        if (this.playerDist() > 5) { this.pos.x += Math.sin(this.yaw) * sp * dt; this.pos.z += Math.cos(this.yaw) * sp * dt; }
        this.walkAnim(dt, 1);
        if (this.t > (enraged ? 1.4 : 2.2)) this.setState(Math.random() < 0.45 ? 'breath' : 'jump');
        break;
      }
      case 'breath':
        this.yaw = dampAngle(this.yaw, toP, 4, dt);
        P.head.rotation.x = -0.3; P.jaw.position.y = -0.45 - Math.min(0.3, this.t * 0.6);
        if (this.t > 0.7 && !this.fired) {
          this.fired = true;
          const n = enraged ? 7 : 5;
          for (let i = 0; i < n; i++) {
            const a = this.yaw + (i - (n - 1) / 2) * 0.22;
            const from = new THREE.Vector3(this.pos.x + Math.sin(this.yaw) * 2.8, this.c.y + 1.0, this.pos.z + Math.cos(this.yaw) * 2.8);
            g.spawn(new Projectile(g, from, new THREE.Vector3(Math.sin(a) * 11, 0, Math.cos(a) * 11), { color: 0xff6a1a, r: 0.55, life: 3 }));
          }
          audio.sfx('roar');
        }
        if (this.t > 1.6) { this.fired = false; P.jaw.position.y = -0.45; this.setState('jump'); }
        break;
      case 'jump': {
        if (!this.inited) {
          this.inited = true;
          this.jumpFrom = this.pos.clone();
          const tx = p.pos.x, tz = p.pos.z;
          const d = Math.hypot(tx - this.c.x, tz - this.c.z);
          const k = d > this.R - 3 ? (this.R - 3) / d : 1;
          this.jumpTo = new THREE.Vector3(this.c.x + (tx - this.c.x) * k, this.c.y, this.c.z + (tz - this.c.z) * k);
          this.tele = new Telegraph(g, this.jumpTo.x, this.c.y, this.jumpTo.z, 3.0, 1.1, () => {});
          g.spawn(this.tele);
        }
        const T = 1.1, k = clamp(this.t / T, 0, 1);
        this.pos.x = this.jumpFrom.x + (this.jumpTo.x - this.jumpFrom.x) * k;
        this.pos.z = this.jumpFrom.z + (this.jumpTo.z - this.jumpFrom.z) * k;
        this.pos.y = this.c.y + Math.sin(k * Math.PI) * 9;
        this.yaw = dampAngle(this.yaw, toP, 3, dt);
        if (k >= 1) {
          this.pos.y = this.c.y;
          audio.sfx('slam'); g.camShake(0.6);
          g.fx.dust(this.pos, 16);
          g.spawn(new Shockwave(g, this.pos.x, this.c.y, this.pos.z, enraged ? 14 : 10, this.R + 2));
          this.setState('stunned');
        }
        break;
      }
      case 'stunned':
        P.head.rotation.x = 0.5 + Math.sin(this.t * 3) * 0.05;
        this.stars.position.set(this.pos.x + Math.sin(this.yaw) * 1.8, this.c.y + 4.3, this.pos.z + Math.cos(this.yaw) * 1.8);
        this.stars.children.forEach((s, i) => s.position.set(Math.cos(this.t * 4 + i * 2.1) * 0.9, 0, Math.sin(this.t * 4 + i * 2.1) * 0.9));
        if (this.t > (enraged ? 2.2 : 2.8)) this.setState('walk');
        break;
      case 'recover':
        P.head.rotation.x = -0.5;
        if (this.t > 0.8) { audio.sfx('roar'); this.setState(Math.random() < 0.5 ? 'breath' : 'jump'); }
        break;
      default: break;
    }
    // keep inside arena
    const dx = this.pos.x - this.c.x, dz = this.pos.z - this.c.z, d = Math.hypot(dx, dz);
    if (d > this.R - 2.5) { this.pos.x = this.c.x + dx / d * (this.R - 2.5); this.pos.z = this.c.z + dz / d * (this.R - 2.5); }
    this.mesh.rotation.y = this.yaw;
    if (this.state !== 'stunned' && this.state !== 'recover') P.head.rotation.x *= 0.9;
    this.checkPlayer();
  }
  walkAnim(dt, s) {
    const P = this.mesh.parts;
    const a = Math.sin(this.t * 6 * s) * 0.4;
    P.legLF.rotation.x = a; P.legRB.rotation.x = a; P.legRF.rotation.x = -a; P.legLB.rotation.x = -a;
    P.torso.position.y = 2.2 + Math.abs(Math.sin(this.t * 6)) * 0.12;
  }
}

export class Vortex extends Boss {
  constructor(game, cx, cy, cz, radius) {
    super(game, 'vortex', cx, cy, cz, 'IMPERADOR VÓRTEX', 10);
    this.R = radius;
    this.pos.set(cx, cy + 8, cz);
    this.laser = new THREE.Mesh(GEO.box, toon(0xff3df2, { emissive: 0xff00cc, transparent: true, opacity: 0.85 }));
    this.laser.visible = false; game.scene.add(this.laser);
    this.angle = 0; this.cycle = 0;
  }
  get phase() { return this.hp > 6 ? 1 : this.hp > 3 ? 2 : 3; }
  get vulnerable() { return this.state === 'exposed'; }
  onHurt() { this.setState('rise'); }
  update(dt) {
    const g = this.game, p = g.player;
    this.t += dt; if (this.inv > 0) this.inv -= dt; if (this.flash > 0) this.flash -= dt;
    this.mesh.visible = !(this.flash > 0 && Math.floor(this.flash * 20) % 2 === 0);
    if (!this.active) { this.mesh.parts.hull.rotation.y += dt * 0.5; return; }
    const P = this.mesh.parts;
    P.hull.rotation.y += dt * (this.state === 'exposed' ? 0.3 : 1.5);
    P.core.material.emissive.setHex(this.state === 'exposed' ? 0xffffff : 0xaa00aa);
    P.core.scale.setScalar(this.state === 'exposed' ? 0.9 + Math.sin(this.t * 12) * 0.1 : 0.7);
    if (this.state === 'dying') { this.pos.y -= dt * 1.5; this.dyingUpdate(dt); return; }
    const hoverY = this.c.y + 7;
    switch (this.state) {
      case 'intro':
        this.pos.y = hoverY + Math.sin(this.t * 2) * 0.5;
        if (this.t > 2) this.setState('float');
        break;
      case 'float': {
        this.angle += dt * (0.5 + this.phase * 0.15);
        const tx = this.c.x + Math.cos(this.angle) * this.R * 0.55, tz = this.c.z + Math.sin(this.angle) * this.R * 0.55;
        this.pos.x += (tx - this.pos.x) * Math.min(1, dt * 1.5);
        this.pos.z += (tz - this.pos.z) * Math.min(1, dt * 1.5);
        this.pos.y += (hoverY + Math.sin(this.t * 2) * 0.6 - this.pos.y) * Math.min(1, dt * 2);
        if (this.t > 2.4 - this.phase * 0.3) {
          this.cycle++;
          const opts = ['orbs', 'slam'];
          if (this.phase >= 2) opts.push('laser', 'drones');
          if (this.phase >= 3) opts.push('meteors');
          let pick = opts[Math.floor(Math.random() * opts.length)];
          if (this.cycle % 2 === 0) pick = 'slam'; // guarantee frequent openings
          if (pick === 'drones' && g.enemies.filter((e) => e.alive && e.type === 'drone').length >= 2) pick = 'orbs';
          this.setState(pick);
        }
        break;
      }
      case 'orbs':
        if (this.t > 0.4 && !this.fired) {
          this.fired = true;
          const n = 2 + this.phase;
          for (let i = 0; i < n; i++) {
            const a = (i / n) * Math.PI * 2;
            const v = new THREE.Vector3(Math.cos(a) * 6, -1, Math.sin(a) * 6);
            g.spawn(new Projectile(g, this.pos.clone(), v, { color: 0xff3df2, r: 0.45, life: 6, homing: 1.1, destroyable: true }));
          }
          audio.sfx('laser');
        }
        if (this.t > 1.4) { this.fired = false; this.setState('float'); }
        break;
      case 'slam': {
        if (!this.inited) {
          this.inited = true;
          this.slamTo = new THREE.Vector3(p.pos.x, this.c.y, p.pos.z);
          const dx = this.slamTo.x - this.c.x, dz = this.slamTo.z - this.c.z, d = Math.hypot(dx, dz), m = this.R - 3.5;
          if (d > m) { this.slamTo.x = this.c.x + dx / d * m; this.slamTo.z = this.c.z + dz / d * m; }
          g.spawn(new Telegraph(g, this.slamTo.x, this.c.y, this.slamTo.z, 3.2, 1.3, () => {}));
        }
        if (this.t < 1.0) {
          this.pos.x += (this.slamTo.x - this.pos.x) * Math.min(1, dt * 4);
          this.pos.z += (this.slamTo.z - this.pos.z) * Math.min(1, dt * 4);
        } else {
          this.pos.y -= dt * 30;
          if (this.pos.y <= this.c.y + 1.2) {
            this.pos.y = this.c.y + 1.2;
            audio.sfx('slam'); g.camShake(0.6); g.fx.dust(new THREE.Vector3(this.pos.x, this.c.y, this.pos.z), 16);
            g.spawn(new Shockwave(g, this.pos.x, this.c.y, this.pos.z, 9 + this.phase * 2, this.R + 2));
            this.setState('exposed');
          }
        }
        break;
      }
      case 'exposed':
        if (this.t > 3.2 - this.phase * 0.3) this.setState('rise');
        break;
      case 'rise':
        this.pos.y += dt * 6;
        if (this.pos.y > hoverY) this.setState('float');
        break;
      case 'laser': {
        if (!this.inited) {
          this.inited = true; this.laserFrom = this.pos.clone(); audio.sfx('laser'); }
        const T = 4.5;
        const k = Math.min(1, this.t / 0.8);
        this.pos.x += (this.c.x - this.pos.x) * Math.min(1, dt * 3);
        this.pos.z += (this.c.z - this.pos.z) * Math.min(1, dt * 3);
        this.pos.y = hoverY + (this.c.y + 2.5 - hoverY) * k;
        if (this.t > 1.0 && this.t < T) {
          const a = (this.t - 1) * (1.3 + this.phase * 0.2);
          const len = this.R + 2;
          this.laser.visible = true;
          this.laser.scale.set(0.35, 0.35, len);
          this.laser.position.set(this.pos.x + Math.sin(a) * len / 2, this.c.y + 0.55, this.pos.z + Math.cos(a) * len / 2);
          this.laser.rotation.set(0, a, 0);
          // hit test: is the player near the beam line, low enough?
          const dx = p.pos.x - this.pos.x, dz = p.pos.z - this.pos.z;
          const along = dx * Math.sin(a) + dz * Math.cos(a), perp = Math.abs(dx * Math.cos(a) - dz * Math.sin(a));
          if (p.alive && along > 0 && along < len && perp < 0.6 && p.pos.y < this.c.y + 0.9) p.hurt(p.pos.clone().sub(new THREE.Vector3(Math.sin(a + 1.57), 0, Math.cos(a + 1.57))));
          if (Math.random() < 0.5) g.fx.sparkle(this.laser.position, 0xff3df2);
        }
        if (this.t > T) { this.laser.visible = false; this.setState('rise'); }
        break;
      }
      case 'drones':
        if (this.t > 0.5 && !this.fired) {
          this.fired = true;
          for (const s of [-1, 1]) {
            const e = new Enemy(g, 'drone', this.pos.x + s * 4, this.c.y + 3, this.pos.z, { patrol: 3 });
            g.addEnemy(e);
            g.fx.burst(e.pos, 15, 0x7a3cff, 5, 0.5, 0);
          }
          audio.sfx('portal');
        }
        if (this.t > 1.2) { this.fired = false; this.setState('float'); }
        break;
      case 'meteors':
        if (!this.inited) {
          this.inited = true;
          for (let i = 0; i < 7; i++) {
            const a = Math.random() * Math.PI * 2, r = Math.random() * 5;
            const x = (i === 0 ? p.pos.x : p.pos.x + Math.cos(a) * r), z = (i === 0 ? p.pos.z : p.pos.z + Math.sin(a) * r);
            const d = Math.hypot(x - this.c.x, z - this.c.z);
            if (d > this.R - 1) continue;
            g.spawn(new Telegraph(g, x, this.c.y, z, 1.8, 1.2 + i * 0.15, (tg) => g.spawn(new Meteor(g, tg.x, this.c.y + 20, tg.z, this.c.y))));
          }
          audio.sfx('roar');
        }
        if (this.t > 2.6) this.setState('float');
        break;
      default: break;
    }
    this.checkPlayer();
  }
}

// Closes the arena and starts the fight when the player walks in.
export class BossArena {
  constructor(game, boss, cx, cy, cz, radius, gate) {
    this.game = game; this.alive = true; this.boss = boss; this.c = new THREE.Vector3(cx, cy, cz); this.R = radius; this.gate = gate; this.closed = false;
  }
  update() {
    const p = this.game.player;
    if (this.closed || !p.alive) return;
    const d = Math.hypot(p.pos.x - this.c.x, p.pos.z - this.c.z);
    if (d < this.R - 3 && Math.abs(p.pos.y - this.c.y) < 3) {
      this.closed = true;
      if (this.gate) {
        const [x, z, w, d2] = this.gate;
        this.game.world.box(x - w / 2, this.c.y, z - d2 / 2, x + w / 2, this.c.y + 12, z + d2 / 2);
        const bars = new THREE.Mesh(GEO.box, toon(0x40444f)); bars.scale.set(w, 6, d2); bars.position.set(x, this.c.y + 3, z);
        this.game.scene.add(bars);
      }
      this.game.setCheckpoint(p.pos.clone(), Math.atan2(this.c.x - p.pos.x, this.c.z - p.pos.z), true);
      this.game.message(this.boss.name + '!', '#ff5a3a');
      this.boss.start();
    }
  }
}
