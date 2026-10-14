// Player controller for both characters.
import * as THREE from 'three';
import { buildCharacter, animateCharacter, GEO } from './models.js';
import { toon } from './materials.js';
import { clamp, wrapAngle, vibrate } from './util.js';
import { audio } from './audio.js';

export const CHARACTERS = {
  zip: {
    id: 'zip', name: 'Zip', title: 'O Velocista Azul',
    desc: 'Altíssima velocidade, giro (spin dash), ataque teleguiado no ar e TURBO com a energia dos anéis.',
    accel: 30, decel: 24, maxSpeed: 19, airAccel: 17, turnRate: 11, jumpVel: 12.6, gravity: 34,
    doubleJumpVel: 0, spinDashSpeed: 30, boostSpeed: 31,
    stats: { speed: 5, jump: 3, control: 3, power: 4 },
    abilities: ['ATAQUE no chão: Spin Dash', 'PULO/ATAQUE no ar: Ataque Teleguiado', 'ESPECIAL (segurar): Turbo'],
  },
  rocco: {
    id: 'rocco', name: 'Rocco', title: 'O Saltador Preciso',
    desc: 'Pulo alto e preciso com pulo duplo, soco, pisão no chão (quebra blocos) e bolas de fogo com a Flor de Fogo.',
    accel: 22, decel: 32, maxSpeed: 10.5, airAccel: 18, turnRate: 16, jumpVel: 13.6, gravity: 34,
    doubleJumpVel: 11.8, spinDashSpeed: 0, boostSpeed: 0,
    stats: { speed: 3, jump: 5, control: 5, power: 4 },
    abilities: ['Pulo duplo', 'ATAQUE no chão: Soco | no ar: Pisão (quebra blocos)', 'ESPECIAL: Bola de fogo (Flor) ou Giro'],
  },
};

const UP = new THREE.Vector3(0, 1, 0);

export class Player {
  constructor(game, charId) {
    this.game = game;
    this.c = CHARACTERS[charId];
    this.id = charId;
    this.rig = buildCharacter(charId);
    this.obj = new THREE.Group();
    this.obj.add(this.rig);
    game.scene.add(this.obj);
    this.body = { pos: new THREE.Vector3(), vel: new THREE.Vector3(), radius: 0.42, height: 1.6, grounded: false, ground: null, groundVy: 0 };
    this.events = { landed: false, headHit: [], sideHit: [] };
    this.facing = 0;
    this.state = 'normal'; // normal|spindash|homing|airdash|punch|pound|spin|hurt|dead|rail|loop|victory|warp
    this.stateTime = 0;
    this.mode = 'idle';
    this.modeTime = 0;
    this.hearts = 3; this.maxHearts = 3;
    this.big = false; this.fire = false; this.shield = false;
    this.starTime = 0; this.speedTime = 0; this.hurtTime = 0;
    this.energy = 100;
    this.coyote = 0; this.jumpBuffer = 0;
    this.jumping = false; this.usedDouble = false; this.usedAir = false; this.usedSpin = false;
    this.attackCd = 0;
    this.homingTarget = null;
    this.t = 0;
    this.lowGravity = 0;
    this.stompChain = 0;
    this.fireballs = 0;

    // shield bubble + star sparkle
    this.shieldMesh = new THREE.Mesh(GEO.sphere, toon(0x4fc3ff, { transparent: true, opacity: 0.32, emissive: 0x0a3a6a, depthWrite: false }));
    this.shieldMesh.scale.setScalar(1.05); this.shieldMesh.position.y = 0.85; this.shieldMesh.visible = false;
    this.obj.add(this.shieldMesh);
    this.blob = new THREE.Mesh(new THREE.CircleGeometry(0.5, 12), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false }));
    this.blob.rotation.x = -Math.PI / 2;
    game.scene.add(this.blob);
  }

  get pos() { return this.body.pos; }
  get vel() { return this.body.vel; }
  get speed() { return Math.hypot(this.body.vel.x, this.body.vel.z); }
  get maxSpeed() { return this.c.maxSpeed * (this.speedTime > 0 ? 1.4 : 1); }
  get alive() { return this.state !== 'dead'; }
  center(out = new THREE.Vector3()) { return out.set(this.body.pos.x, this.body.pos.y + 0.8, this.body.pos.z); }

  spawn(p, yaw) {
    this.body.pos.copy(p);
    this.body.vel.set(0, 0, 0);
    this.body.grounded = false; this.body.ground = null;
    this.facing = yaw || 0;
    this.state = 'normal'; this.stateTime = 0;
    this.hearts = this.maxHearts;
    this.big = false; this.fire = false; this.shield = false;
    this.starTime = 0; this.speedTime = 0; this.hurtTime = 0; this.energy = 100;
    this.rail = null; this.loop = null;
    this.obj.visible = true;
    this.rig.rotation.set(0, 0, 0);
    this.rig.position.set(0, 0, 0);
  }

  // ---------- combat helpers used by enemies/objects ----------
  isInvincible() { return this.starTime > 0; }
  // Is the player in a state that destroys enemies on contact?
  attackKind() {
    if (this.starTime > 0) return 'star';
    switch (this.state) {
      case 'spindash': case 'homing': case 'airdash': return 'strong';
      case 'pound': return 'pound';
      case 'spin': return 'spin';
      case 'boost': return 'strong';
      default: break;
    }
    if (this.id === 'zip' && this.mode === 'ball') return 'ball';
    return null;
  }
  // Extra hit volume in front of the player (punch / spin attack).
  hitSphere() {
    if (this.state === 'punch' && this.stateTime > 0.04 && this.stateTime < 0.25) {
      return { x: this.pos.x + Math.sin(this.facing) * 1.0, y: this.pos.y + 0.9, z: this.pos.z + Math.cos(this.facing) * 1.0, r: 1.0 };
    }
    if (this.state === 'spin') return { x: this.pos.x, y: this.pos.y + 0.8, z: this.pos.z, r: 1.6 };
    return null;
  }

  bounce(v = 10) {
    this.body.vel.y = v;
    this.body.grounded = false;
    this.usedDouble = false; this.usedAir = false; this.usedSpin = false;
    if (this.state === 'homing' || this.state === 'airdash' || this.state === 'pound') this.state = 'normal';
    this.jumping = false;
    if (this.id === 'zip') this.mode = 'ball';
  }

  onEnemyKilled(kind) {
    if (kind === 'stomp' || this.state === 'homing') {
      this.stompChain++;
      if (this.state === 'homing') {
        this.state = 'normal';
        this.body.vel.x *= 0.2; this.body.vel.z *= 0.2;
      }
      this.bounce(this.game.input.jumpDown ? 13 : 10);
    }
    const pts = 100 * Math.pow(2, Math.min(this.stompChain - 1, 5));
    return Math.max(100, pts);
  }

  launch(vx, vy, vz, lockTime = 0.25) {
    this.body.vel.set(vx, vy, vz);
    this.body.grounded = false;
    this.state = 'normal';
    this.mode = 'spring'; this.modeTime = 0;
    this.springLock = lockTime;
    this.jumping = false;
    this.usedDouble = false; this.usedAir = false; this.usedSpin = false;
    if (Math.hypot(vx, vz) > 1) this.facing = Math.atan2(vx, vz);
  }

  hurt(fromPos, dmg = 1) {
    if (this.state === 'dead' || this.hurtTime > 0 || this.starTime > 0 || this.state === 'victory') return false;
    const g = this.game;
    if (this.shield) {
      this.shield = false;
      audio.sfx('hurt');
    } else if (this.big) {
      this.big = false; this.fire = false;
      audio.sfx('hurt');
    } else {
      this.hearts -= dmg;
      audio.sfx('hurt');
      g.scatterCollectibles(this.pos);
    }
    if (g.settings.vibration) vibrate(120);
    this.hurtTime = 1.8;
    g.camShake(0.35);
    if (this.hearts <= 0) { this.die(); return true; }
    const dx = this.pos.x - (fromPos ? fromPos.x : this.pos.x - Math.sin(this.facing));
    const dz = this.pos.z - (fromPos ? fromPos.z : this.pos.z - Math.cos(this.facing));
    const d = Math.hypot(dx, dz) || 1;
    this.body.vel.set((dx / d) * 5, 7.5, (dz / d) * 5);
    this.body.grounded = false;
    this.state = 'hurt'; this.stateTime = 0;
    this.rail = null; this.loop = null;
    return true;
  }

  die() {
    if (this.state === 'dead') return;
    this.state = 'dead'; this.stateTime = 0;
    this.hearts = 0;
    this.body.vel.set(0, 12, 0);
    this.rail = null; this.loop = null;
    if (this.game.settings.vibration) vibrate(300);
    this.game.onPlayerDying();
  }

  victory() {
    this.state = 'victory'; this.stateTime = 0;
    this.body.vel.set(0, 0, 0);
    this.mode = 'victory'; this.modeTime = 0;
  }

  // Camera-relative input direction.
  inputDir(input, camYaw) {
    const mx = input.moveX, my = input.moveY;
    const m = Math.min(1, Math.hypot(mx, my));
    if (m < 0.05) return { x: 0, z: 0, m: 0 };
    const fx = Math.sin(camYaw), fz = Math.cos(camYaw);
    const rx = -Math.cos(camYaw), rz = Math.sin(camYaw);
    let x = fx * my + rx * mx, z = fz * my + rz * mx;
    const l = Math.hypot(x, z);
    x /= l; z /= l;
    return { x, z, m };
  }

  findHomingTarget() {
    const g = this.game;
    let best = null, bd = 15;
    const fx = Math.sin(this.facing), fz = Math.cos(this.facing);
    for (const t of g.homingTargets()) {
      const tp = t.targetPos();
      const dx = tp.x - this.pos.x, dy = tp.y - (this.pos.y + 0.8), dz = tp.z - this.pos.z;
      const d = Math.hypot(dx, dy, dz);
      if (d > bd || dy > 4) continue;
      const hd = Math.hypot(dx, dz) || 1;
      if ((dx * fx + dz * fz) / hd < 0.25 && d > 3) continue;
      best = t; bd = d;
    }
    return best;
  }

  update(dt, input, camYaw) {
    const b = this.body, c = this.c;
    this.t += dt; this.stateTime += dt; this.modeTime += dt;
    if (this.hurtTime > 0) this.hurtTime -= dt;
    if (this.starTime > 0) this.starTime -= dt;
    if (this.speedTime > 0) this.speedTime -= dt;
    if (this.attackCd > 0) this.attackCd -= dt;
    if (this.springLock > 0) this.springLock -= dt;
    if (this.id === 'zip' && this.state !== 'boost') this.energy = Math.min(100, this.energy + dt * 3);

    if (this.state === 'dead') { this.updateDead(dt); return; }
    if (this.state === 'victory') {
      b.vel.x *= 0.9; b.vel.z *= 0.9;
      b.vel.y -= c.gravity * dt;
      this.game.world.moveBody(b, dt, this.events);
      this.mode = 'victory';
      this.visualUpdate(dt);
      return;
    }
    if (this.state === 'warp') { this.visualUpdate(dt); return; }
    if (this.state === 'rail' && this.rail) { this.rail.updateRider(this, dt, input); this.visualUpdate(dt); return; }
    if (this.state === 'loop' && this.loop) { this.loop.updateRider(this, dt, input); this.visualUpdate(dt); return; }

    const dir = this.inputDir(input, camYaw);
    const grounded = b.grounded;
    if (grounded) { this.coyote = 0.12; this.usedDouble = false; this.usedAir = false; this.usedSpin = false; this.stompChain = 0; } else this.coyote -= dt;
    if (input.jumpPressed) this.jumpBuffer = 0.14; else this.jumpBuffer -= dt;

    // ---------- actions ----------
    const canAct = this.state === 'normal' || this.state === 'boost';
    if (canAct) {
      // jump
      if (this.jumpBuffer > 0 && this.coyote > 0) {
        this.jumpBuffer = 0; this.coyote = 0;
        b.vel.y = c.jumpVel + Math.min(this.speed, 20) * 0.04;
        b.grounded = false; this.jumping = true;
        this.mode = this.id === 'zip' ? 'ball' : 'jump'; this.modeTime = 0;
        audio.sfx('jump');
      } else if (input.jumpPressed && !grounded && this.coyote <= 0) {
        if (this.id === 'rocco' && !this.usedDouble) {
          this.usedDouble = true; this.jumpBuffer = 0;
          b.vel.y = c.doubleJumpVel; this.jumping = true;
          this.mode = 'double'; this.modeTime = 0;
          audio.sfx('jump2');
        } else if (this.id === 'zip' && !this.usedAir) {
          this.jumpBuffer = 0;
          this.zipAirAttack();
        }
      }
      // attack
      if (input.attackPressed && this.attackCd <= 0) {
        if (this.id === 'zip') {
          if (b.grounded) {
            this.state = 'spindash'; this.stateTime = 0;
            const s = Math.max(this.speed, c.spinDashSpeed);
            const f = dir.m > 0 ? Math.atan2(dir.x, dir.z) : this.facing;
            this.facing = f;
            b.vel.x = Math.sin(f) * s; b.vel.z = Math.cos(f) * s;
            this.mode = 'spindash'; this.attackCd = 0.55;
            audio.sfx('spin');
          } else if (!this.usedAir) this.zipAirAttack();
        } else if (b.grounded) {
          this.state = 'punch'; this.stateTime = 0; this.attackCd = 0.38;
          this.mode = 'punch'; this.modeTime = 0;
          audio.sfx('spin');
        } else {
          this.state = 'pound'; this.stateTime = 0; this.attackCd = 0.5;
          b.vel.set(0, 3, 0); this.mode = 'pound'; this.modeTime = 0;
          audio.sfx('spin');
        }
      }
      // special
      if (this.id === 'zip') {
        if (input.specialDown && this.energy > 2 && this.state !== 'boost') {
          this.state = 'boost'; this.stateTime = 0; audio.sfx('boost');
          this.game.camShake(0.15);
        }
      } else if (input.specialPressed) {
        if (this.fire) this.shootFireball();
        else if (!this.usedSpin) {
          this.usedSpin = true;
          this.state = 'spin'; this.stateTime = 0;
          if (!b.grounded) b.vel.y = Math.max(b.vel.y, 9);
          this.mode = 'spinattack'; this.modeTime = 0;
          audio.sfx('spin');
        }
      }
    }

    // ---------- state specific movement ----------
    let control = 1, gravityScale = 1, maxSp = this.maxSpeed;
    switch (this.state) {
      case 'spindash':
        control = 0.25;
        if (this.stateTime > 0.45) { this.state = 'normal'; this.mode = b.grounded ? 'run' : 'ball'; }
        break;
      case 'homing': {
        control = 0; gravityScale = 0;
        const t = this.homingTarget;
        if (!t || !t.alive || this.stateTime > 0.7) { this.state = 'normal'; this.homingTarget = null; break; }
        const tp = t.targetPos();
        const dx = tp.x - this.pos.x, dy = tp.y - (this.pos.y + 0.6), dz = tp.z - this.pos.z;
        const d = Math.hypot(dx, dy, dz) || 1;
        b.vel.set((dx / d) * 34, (dy / d) * 34, (dz / d) * 34);
        this.facing = Math.atan2(dx, dz);
        break;
      }
      case 'airdash':
        control = 0.3; gravityScale = 0.35;
        if (this.stateTime > 0.3 || b.grounded) this.state = 'normal';
        break;
      case 'punch':
        control = 0.2;
        if (this.stateTime > 0.32) this.state = 'normal';
        break;
      case 'spin':
        control = 0.8; gravityScale = 0.6;
        if (this.stateTime > 0.5) this.state = 'normal';
        break;
      case 'pound':
        control = 0;
        if (this.stateTime < 0.18) { b.vel.set(0, 1.5, 0); gravityScale = 0; } else { b.vel.x = 0; b.vel.z = 0; b.vel.y = -30; gravityScale = 0; }
        break;
      case 'boost':
        if (!input.specialDown || this.energy <= 0) { this.state = 'normal'; break; }
        this.energy = Math.max(0, this.energy - dt * 22);
        maxSp = c.boostSpeed * (this.speedTime > 0 ? 1.15 : 1);
        break;
      case 'hurt':
        control = 0;
        if (this.stateTime > 0.45 && (b.grounded || this.stateTime > 1.2)) this.state = 'normal';
        break;
      default: break;
    }
    if (this.springLock > 0) control = Math.min(control, 0.35);

    // ---------- horizontal velocity ----------
    let s = this.speed;
    let vdx = s > 0.01 ? b.vel.x / s : Math.sin(this.facing);
    let vdz = s > 0.01 ? b.vel.z / s : Math.cos(this.facing);
    if (this.state === 'boost') {
      // boost: always full speed forward, steering allowed
      if (dir.m > 0) {
        const ang = Math.atan2(vdx, vdz);
        const tgt = Math.atan2(dir.x, dir.z);
        const na = ang + clamp(wrapAngle(tgt - ang), -4 * dt, 4 * dt);
        vdx = Math.sin(na); vdz = Math.cos(na);
      } else if (s < 0.5) { vdx = Math.sin(this.facing); vdz = Math.cos(this.facing); }
      s = Math.min(maxSp, s + 80 * dt);
      b.vel.x = vdx * s; b.vel.z = vdz * s;
    } else if (control > 0 && this.state !== 'homing') {
      const accel = (b.grounded ? c.accel : c.airAccel) * (this.speedTime > 0 ? 1.5 : 1);
      if (dir.m > 0) {
        if (s < 0.5) { vdx = dir.x; vdz = dir.z; }
        const dot = vdx * dir.x + vdz * dir.z;
        if (b.grounded && dot < -0.6 && s > 2) {
          // skid / brake
          s = Math.max(0, s - c.decel * 2.2 * dt);
          if (s < 1) { vdx = dir.x; vdz = dir.z; }
        } else {
          const ang = Math.atan2(vdx, vdz);
          const tgt = Math.atan2(dir.x, dir.z);
          const rate = (b.grounded ? c.turnRate : c.turnRate * 0.6) * (1.2 - 0.6 * Math.min(1, s / 30)) * control;
          const na = ang + clamp(wrapAngle(tgt - ang), -rate * dt, rate * dt);
          vdx = Math.sin(na); vdz = Math.cos(na);
          const target = maxSp * dir.m;
          if (s < target) s = Math.min(target, s + accel * control * dt);
          // over the target speed: keep momentum at full stick, brake when the stick is eased off
          else if (b.grounded) s = Math.max(target, s - c.decel * (dir.m > 0.9 ? 0.35 : 1.0) * dt);
        }
      } else if (b.grounded) {
        s = Math.max(0, s - c.decel * dt);
      } else {
        s = Math.max(0, s - 1.5 * dt);
      }
      // slopes
      if (b.grounded && b.ground && b.ground.ramp) {
        const sl = b.ground.slope();
        const along = sl.x * vdx + sl.z * vdz;
        s = Math.max(0, s - along * 16 * dt);
        if (s < 0.5 && Math.hypot(sl.x, sl.z) > 0.35 && dir.m === 0) {
          // slide back down steep slopes when idle
          const l = Math.hypot(sl.x, sl.z); vdx = -sl.x / l; vdz = -sl.z / l; s = 1;
        }
      }
      s = Math.min(s, Math.max(maxSp * 1.45, 34));
      b.vel.x = vdx * s; b.vel.z = vdz * s;
    }

    // ---------- gravity ----------
    const grav = c.gravity * (this.lowGravity > 0 ? 0.45 : 1);
    if (!b.grounded) {
      if (this.jumping && !input.jumpDown && b.vel.y > 4 && this.state === 'normal') { b.vel.y *= 0.5; this.jumping = false; }
      b.vel.y -= grav * gravityScale * dt;
      if (b.vel.y < -42) b.vel.y = -42;
    } else if (b.vel.y < 0) b.vel.y = 0;
    if (this.lowGravity > 0) this.lowGravity -= dt;

    // ---------- collide ----------
    const wasAir = !b.grounded;
    const prevVy = b.vel.y;
    this.game.world.moveBody(b, dt, this.events);
    const ev = this.events;
    for (const h of ev.headHit) if (h.owner && h.owner.onHeadHit) h.owner.onHeadHit(this);
    if ((this.state === 'spindash' || this.state === 'boost' || this.state === 'punch' || this.state === 'homing') && ev.sideHit.length) {
      for (const h of ev.sideHit) if (h.owner && h.owner.onAttackHit) h.owner.onAttackHit(this);
    }
    if (ev.landed) {
      if (b.ground && b.ground.owner && b.ground.owner.onLand) b.ground.owner.onLand(this, prevVy);
      if (this.state === 'pound') {
        this.state = 'normal';
        this.game.groundPoundImpact(this.pos);
        this.game.camShake(0.3);
        audio.sfx('stomp');
        if (b.ground && b.ground.owner && b.ground.owner.onPound) b.ground.owner.onPound(this);
        this.bounce(6);
      } else if (wasAir) {
        if (prevVy < -14) this.game.fx.dust(this.pos, 8);
        this.jumping = false;
        if (this.state === 'homing' || this.state === 'airdash') this.state = 'normal';
      }
    }

    // ---------- facing & animation mode ----------
    const sp = this.speed;
    if (sp > 0.6 && this.state !== 'hurt') this.facing = Math.atan2(b.vel.x, b.vel.z);
    else if (dir.m > 0 && this.state === 'normal') this.facing = Math.atan2(dir.x, dir.z);
    this.chooseMode(sp);
    this.visualUpdate(dt);
  }

  zipAirAttack() {
    const b = this.body;
    this.usedAir = true;
    const t = this.findHomingTarget();
    if (t) {
      this.homingTarget = t;
      this.state = 'homing'; this.stateTime = 0;
      this.mode = 'homing';
      audio.sfx('homing');
    } else {
      this.state = 'airdash'; this.stateTime = 0;
      const s = Math.max(this.speed, 24);
      b.vel.x = Math.sin(this.facing) * s; b.vel.z = Math.cos(this.facing) * s;
      b.vel.y = Math.max(b.vel.y, 2.5);
      this.mode = 'ball';
      audio.sfx('homing');
    }
    this.game.fx.burst(this.center(), 10, 0x8fd3ff, 6, 0.3);
  }

  shootFireball() {
    if (this.fireballs >= 3 || this.attackCd > 0) return;
    this.attackCd = 0.28;
    this.game.spawnPlayerFireball(this);
    audio.sfx('fireball');
    this.state = 'punch'; this.stateTime = 0.1; this.mode = 'punch'; this.modeTime = 0;
  }

  chooseMode(sp) {
    const b = this.body;
    let m = this.mode;
    if (this.state === 'hurt') m = 'hurt';
    else if (this.state === 'spindash') m = 'spindash';
    else if (this.state === 'homing') m = 'homing';
    else if (this.state === 'airdash') m = 'ball';
    else if (this.state === 'punch') m = 'punch';
    else if (this.state === 'pound') m = 'pound';
    else if (this.state === 'spin') m = 'spinattack';
    else if (this.state === 'boost') m = b.grounded ? 'boost' : 'ball';
    else if (b.grounded) m = sp > 0.3 ? 'run' : 'idle';
    else if (m === 'spring' && b.vel.y > -2) m = 'spring';
    else if (m === 'double' && this.modeTime < 0.45) m = 'double';
    else if (m === 'ball' || (this.id === 'zip' && this.jumping)) m = 'ball';
    else if (m === 'jump' && b.vel.y > -3) m = 'jump';
    else m = (this.id === 'zip' && m === 'ball') ? 'ball' : 'fall';
    if (m !== this.mode) { this.mode = m; this.modeTime = 0; }
  }

  updateDead(dt) {
    const b = this.body;
    if (this.stateTime > 0.4) {
      b.vel.y -= 30 * dt;
      b.pos.y += b.vel.y * dt;
    }
    this.mode = 'dead';
    this.visualUpdate(dt);
    if (this.stateTime > 2.0 && !this.deathHandled) {
      this.deathHandled = true;
      this.game.onPlayerDead();
    }
  }

  visualUpdate(dt) {
    const b = this.body;
    this.obj.position.copy(b.pos);
    if (this.state !== 'loop' && this.state !== 'rail') {
      this.obj.rotation.set(0, this.facing, 0);
    }
    const sc = this.big ? 1.22 : 1;
    this.rig.scale.setScalar(sc);
    animateCharacter(this.rig, { mode: this.mode, speed: this.speed / this.c.maxSpeed, t: this.t, modeTime: this.modeTime }, dt);
    // blink while invulnerable after a hit, rainbow while star
    const blink = this.hurtTime > 0 && this.state !== 'dead' && Math.floor(this.t * 20) % 2 === 0;
    this.rig.visible = !blink;
    this.shieldMesh.visible = this.shield || this.starTime > 0;
    if (this.starTime > 0) {
      this.shieldMesh.material.color.setHSL((this.t * 2) % 1, 1, 0.6);
      this.shieldMesh.material.opacity = 0.25;
    } else {
      this.shieldMesh.material.color.set(this.fire ? 0xff7a2a : 0x4fc3ff);
      this.shieldMesh.material.opacity = 0.32;
    }
    this.shieldMesh.scale.setScalar(sc * (1.05 + Math.sin(this.t * 8) * 0.04));
    // blob shadow (cheap contact shadow, visible even with shadows disabled)
    const g = this.game.world.ground(b.pos.x, b.pos.z, 0.1, b.pos.y + 0.1);
    if (g && this.state !== 'dead') {
      this.blob.visible = true;
      this.blob.position.set(b.pos.x, g.y + 0.03, b.pos.z);
      const h = b.pos.y - g.y;
      this.blob.scale.setScalar(Math.max(0.3, 1 - h * 0.08));
      this.blob.material.opacity = Math.max(0.08, 0.35 - h * 0.03);
    } else this.blob.visible = false;
    if (this.state === 'boost' || (this.speedTime > 0 && this.speed > 12) || this.state === 'spindash') {
      if (Math.random() < 0.6) this.game.fx.trail(this.center(), this.state === 'boost' ? 0x9fe7ff : 0xffffff);
    }
    if (this.starTime > 0 && Math.random() < 0.5) this.game.fx.sparkle(this.center(), 0xffee66);
  }

  dispose() {
    this.game.scene.remove(this.obj);
    this.game.scene.remove(this.blob);
  }
}

export { UP };
