// One play session of one stage.
import * as THREE from 'three';
import { World } from './physics.js';
import { Player } from './player.js';
import { CameraRig } from './camera.js';
import { FX } from './fx.js';
import { Pickups, ScatterRing, PowerUp, PopCoin, Projectile, Goal } from './objects.js';
import { LevelBuilder, makeSky } from './builder.js';
import { THEMES } from './themes.js';
import { LEVELS } from './levels.js';
import { audio } from './audio.js';
import { vibrate } from './util.js';
import { input } from './input.js';

export class Game {
  constructor(app, levelIndex, charId) {
    this.app = app;
    this.levelIndex = levelIndex;
    this.def = LEVELS[levelIndex];
    this.charId = charId;
    this.settings = app.save.settings;
    this.quality = app.quality;
    this.input = input;
    this.vibrate = vibrate;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, app.aspect(), 0.1, 1200);
    this.world = new World();
    this.fx = new FX(this.scene, this.quality);
    this.pickups = new Pickups(this);
    this.entities = []; this.enemies = []; this.bosses = []; this.monitors = []; this.spawned = [];
    this.medals = [false, false, false];
    const rec = app.save.levelRecord(this.def.id);
    this.savedMedals = rec.medals.slice();
    this.score = 0; this.rings = 0; this.coins = 0; this.lives = 5; this.time = 0;
    this.nextLifeAt = 100;
    this.killY = -40; this.fluidY = null; this.fluidKind = null;
    this.finished = false; this.over = false;
    this.hintText = ''; this.hintT = 0;
    this.deaths = 0;
    this.stats = { enemies: 0 };
  }

  load() {
    const theme = THEMES[this.def.theme];
    this.theme = theme;
    const s = this.scene;
    s.fog = new THREE.Fog(theme.fog, theme.fogNear, theme.fogFar);
    s.background = new THREE.Color(theme.fog);
    this.sky = makeSky(theme);
    s.add(this.sky);
    const hemi = new THREE.HemisphereLight(theme.hemiSky, theme.hemiGround, theme.hemiI);
    s.add(hemi);
    this.sun = new THREE.DirectionalLight(theme.light, theme.lightI);
    this.sunDir = new THREE.Vector3(...theme.sunDir).normalize();
    const shadows = this.quality !== 'low';
    if (shadows) {
      this.sun.castShadow = true;
      const sz = this.quality === 'high' ? 2048 : 1024;
      this.sun.shadow.mapSize.set(sz, sz);
      const c = this.sun.shadow.camera;
      c.left = -28; c.right = 28; c.top = 28; c.bottom = -28; c.near = 1; c.far = 160;
      this.sun.shadow.bias = -0.0006;
      this.sun.shadow.normalBias = 0.02;
    }
    s.add(this.sun); s.add(this.sun.target);

    const b = new LevelBuilder(this, theme);
    this.builder = b;
    this.startPos = { p: new THREE.Vector3(0, 2, 0), yaw: 0 };
    this.def.build(b, this);
    const info = b.finish();
    this.animated = b.animated;
    this.killY = this.def.killY !== undefined ? this.def.killY : b.bounds.min.y + 4;
    this.pickups.finalize();
    this.totalRings = this.pickups.total.rings; this.totalCoins = this.pickups.total.coins;
    this.levelInfo = info;

    this.player = new Player(this, this.charId);
    this.checkpoint = { p: this.startPos.p.clone(), yaw: this.startPos.yaw };
    this.player.spawn(this.checkpoint.p, this.checkpoint.yaw);
    this.cam = new CameraRig(this.camera, this.world);
    this.cam.snapBehind(this.checkpoint.yaw, this.player);
    this.cam.update(0.016, this.player, input, this.settings, null);
    audio.playMusic(theme.music);
    this.app.ui.hudReset(this);
    this.message(this.def.name, '#ffffff', 2.2, this.def.objective);
  }

  // ------------------------------------------------ API used by entities
  addEnemy(e) { this.enemies.push(e); this.entities.push(e); }
  spawn(e) { this.spawned.push(e); return e; }
  homingTargets() {
    const out = [];
    for (const e of this.enemies) if (e.alive && !e.dying && (e.type !== 'plant' || e.emerge > 0.5)) out.push(e);
    for (const m of this.monitors) if (m.alive) out.push(m);
    for (const b of this.bosses) if (b.alive && b.active && b.homingOk) out.push(b);
    for (const p of this.spawned) if (p.alive && p instanceof Projectile && p.destroyable) out.push(p);
    return out;
  }
  hitEnemiesAt(pos, r, how) {
    for (const e of this.enemies) {
      if (!e.alive || e.dying) continue;
      if (e.type === 'plant' && e.emerge < 0.3) continue;
      const c = e.targetPos();
      if (c.distanceTo(pos) < r + e.r) { e.kill(how === 'fire' ? 'hit' : how); return true; }
    }
    for (const b of this.bosses) {
      if (!b.alive || !b.active || b.defeated) continue;
      if (b.targetPos().distanceTo(pos) < r + b.mesh.radius) { b.fireHit(); return true; }
    }
    return false;
  }
  bumpEnemiesAbove(x, y, z) {
    for (const e of this.enemies) {
      if (!e.alive || e.dying || e.flying) continue;
      if (Math.abs(e.pos.x - x) < 1.2 && Math.abs(e.pos.z - z) < 1.2 && Math.abs(e.pos.y - y) < 0.6) e.kill('hit');
    }
  }
  groundPoundImpact(pos) {
    for (const e of this.enemies) {
      if (!e.alive || e.dying) continue;
      if (Math.hypot(e.pos.x - pos.x, e.pos.z - pos.z) < 3 && Math.abs(e.pos.y - pos.y) < 1.2) e.kill('hit');
    }
    this.fx.dust(pos, 12);
  }
  spawnPlayerFireball(p) {
    const f = Math.atan2(Math.sin(p.facing), Math.cos(p.facing));
    const pos = new THREE.Vector3(p.pos.x + Math.sin(f) * 0.8, p.pos.y + 0.9, p.pos.z + Math.cos(f) * 0.8);
    const v = new THREE.Vector3(Math.sin(f) * 16, -2, Math.cos(f) * 16);
    this.spawn(new Projectile(this, pos, v, { friendly: true, bounce: true, grav: 30, color: 0xff7a1a, r: 0.3, life: 2.2 }));
  }
  // Removes every hostile projectile / shockwave / warning / meteor (used when a boss falls).
  clearHazards() {
    for (const e of this.spawned) {
      if (!e.alive) continue;
      const hostile = (e instanceof Projectile && !e.friendly) || e.maxR !== undefined || e.onImpact || e.gy !== undefined;
      if (hostile) { e.alive = false; if (e.mesh) this.scene.remove(e.mesh); }
    }
    for (const e of this.enemies) if (e.alive && !e.dying && e.type === 'drone') e.kill('hit');
  }
  spawnItem(kind, pos, rise) {
    // power-ups adapt to the character
    let k = kind;
    if (this.charId === 'zip') { if (k === 'mushroom') k = 'heart'; if (k === 'fire') k = 'shield'; }
    this.spawn(new PowerUp(this, k, pos, rise));
  }
  popCoin(pos) { this.spawn(new PopCoin(this, pos)); this.addCoins(1); audio.sfx('coin'); }
  scatterCollectibles(pos) {
    const n = Math.min(8, this.rings + this.coins);
    if (n <= 0) return;
    for (let i = 0; i < n; i++) {
      const type = this.rings > 0 ? 0 : 1;
      if (type === 0) this.rings--; else this.coins--;
      this.spawn(new ScatterRing(this, pos, type));
    }
    audio.sfx('ringloss');
  }
  applyPowerUp(kind, pos) {
    const p = this.player;
    const P = (txt, col) => this.message(txt, col, 1.4);
    switch (kind) {
      case 'mushroom': p.hearts = Math.min(p.maxHearts, p.hearts + 1); if (p.id === 'rocco') p.big = true; audio.sfx('powerup'); P('SUPER COGUMELO!', '#ff6a5a'); break;
      case 'fire': p.hearts = Math.min(p.maxHearts, p.hearts + 1); p.big = true; p.fire = true; audio.sfx('powerup'); P('FLOR DE FOGO! (ESPECIAL)', '#ff9a3a'); break;
      case 'star': p.starTime = 10; audio.sfx('powerup'); P('INVENCÍVEL!', '#ffe03a'); break;
      case 'shield': p.shield = true; audio.sfx('shield'); P('ESCUDO!', '#5ad0ff'); break;
      case 'speed': p.speedTime = 12; audio.sfx('powerup'); P('SUPER VELOCIDADE!', '#ff5a8a'); break;
      case 'oneup': this.addLife(); break;
      case 'heart': p.hearts = Math.min(p.maxHearts, p.hearts + 1); audio.sfx('powerup'); P('+1 CORAÇÃO', '#ff5a8a'); break;
      case 'rings10': this.addRings(10); audio.sfx('ring'); break;
      default: break;
    }
    this.addScore(1000, pos);
    if (pos) this.fx.burst(pos, 16, 0xffffff, 5, 0.6, 0);
  }
  addScore(n) { this.score += n; }
  addRings(n) {
    this.rings += n; this.addScore(10 * n);
    if (this.player && this.player.id === 'zip') this.player.energy = Math.min(100, this.player.energy + 4 * n);
    this.checkLifeBonus();
  }
  addCoins(n) { this.coins += n; this.addScore(10 * n); if (this.player && this.player.id === 'zip') this.player.energy = Math.min(100, this.player.energy + 4 * n); this.checkLifeBonus(); }
  checkLifeBonus() {
    if (this.rings + this.coins >= this.nextLifeAt) { this.nextLifeAt += 100; this.addLife(); }
  }
  addLife() { this.lives = Math.min(99, this.lives + 1); audio.sfx('oneup'); this.message('1UP!', '#5aff7a', 1.2); }
  collectMedal(idx, pos) {
    this.medals[idx] = true;
    audio.sfx('medal');
    this.addScore(2000);
    this.fx.burst(pos, 30, 0xfff2a8, 7, 0.9, 2);
    this.message('MEDALHA ESTRELA ' + (idx + 1) + '/3', '#ffd23f', 1.6);
  }
  setCheckpoint(p, yaw, silent) {
    this.checkpoint = { p: p.clone(), yaw };
    if (!silent) { this.message('CHECKPOINT!', '#5ad0ff', 1.2); this.addScore(100); }
  }
  message(text, color = '#fff', dur = 1.5, sub = '') { this.app.ui.flash(text, color, dur, sub); }
  hint(text, dur = 0.2) { this.hintText = text; this.hintT = dur; }
  camShake(a) { if (this.cam) this.cam.shake(a); }
  bossBar(name, hp, max) { this.app.ui.bossBar(name, hp, max); }
  warpPlayer(from, to) {
    const p = this.player;
    p.state = 'warp'; p.stateTime = 0;
    audio.sfx('warp');
    this.warp = { t: 0, from: from.clone(), to: new THREE.Vector3(to[0], to[1], to[2]), yaw: to[3] !== undefined ? to[3] : p.facing, moved: false };
  }

  onBossDefeated(boss) {
    this.addScore(5000);
    this.app.save.data.stats.bossesDefeated++;
    this.bossBar(null);
    audio.playMusic('bossclear', false);
    this.message('CHEFE DERROTADO!', '#ffd23f', 2.5);
    const g = new Goal(this, boss.c.x, boss.c.y, boss.c.z, 'star');
    this.spawn(g);
  }

  win(bonus = 0) {
    if (this.finished) return;
    this.finished = true;
    this.player.victory();
    audio.playMusic('victory', false);
    if (bonus) this.addScore(bonus);
    this.flagBonus = bonus;
    this.winT = 0;
  }

  onPlayerDying() {
    this.deaths++;
    this.app.save.data.stats.deaths++;
    audio.stopMusic();
    audio.playMusic('death', false);
    this.lives--;
  }

  onPlayerDead() {
    if (this.lives <= 0) {
      this.over = true;
      audio.playMusic('gameover', false);
      this.app.showGameOver(this);
      return;
    }
    // respawn at checkpoint
    const p = this.player;
    p.deathHandled = false;
    p.spawn(this.checkpoint.p, this.checkpoint.yaw);
    p.hurtTime = 2;
    this.cam.snapBehind(this.checkpoint.yaw, p);
    const boss = this.bosses.find((b) => b.active && !b.defeated);
    audio.playMusic(boss ? 'boss' : this.theme.music);
    this.message('VIDAS x ' + this.lives, '#fff', 1.2);
  }

  // ------------------------------------------------ main update
  update(dt) {
    const p = this.player;
    input.update();
    if (!this.finished) this.time += dt;

    // kinematic objects first so riders get this frame's motion
    for (const e of this.entities) if (e.alive && (e.col && e.col.dynamic)) e.update(dt, input);

    if (this.warp) this.updateWarp(dt);
    else p.update(dt, input, this.cam.yaw);

    for (const e of this.entities) if (e.alive && !(e.col && e.col.dynamic)) e.update(dt, input);
    for (const e of this.spawned) if (e.alive) e.update(dt, input);
    if (this.spawned.length > 40) this.spawned = this.spawned.filter((e) => e.alive);
    this.pickups.update(dt);
    this.fx.update(dt);

    // death planes
    if (p.alive && !this.finished) {
      if (this.fluidY !== null && p.pos.y < this.fluidY + 0.15) {
        this.fx.burst(p.pos, 25, this.fluidKind === 'lava' ? 0xff7a1a : 0x9fd8ff, 7, 0.7, 10);
        audio.sfx(this.fluidKind === 'lava' ? 'explode' : 'splash');
        p.die();
      } else if (p.pos.y < this.killY) p.die();
    }

    // victory sequence
    if (this.finished) {
      this.winT += dt;
      if (this.winT > 3.2 && !this.resultsShown) { this.resultsShown = true; this.app.showResults(this); }
    }

    this.cam.update(dt, p, input, this.settings, this.bosses.find((b) => b.active));
    // shadow light follows the player
    this.sun.position.set(p.pos.x + this.sunDir.x * 60, p.pos.y + this.sunDir.y * 60, p.pos.z + this.sunDir.z * 60);
    this.sun.target.position.set(p.pos.x, p.pos.y, p.pos.z);
    this.sky.position.copy(this.camera.position);
    for (const a of this.animated) { a.tex.offset.x += a.vx * dt; a.tex.offset.y += a.vy * dt; }
    if (this.hintT > 0) this.hintT -= dt;
    this.app.ui.hudUpdate(this, dt);
    input.consume();
  }

  updateWarp(dt) {
    const w = this.warp, p = this.player;
    w.t += dt;
    if (w.t < 0.7) {
      p.body.pos.set(w.from.x, w.from.y - w.t * 2.4, w.from.z);
    } else if (!w.moved) {
      w.moved = true;
      this.app.ui.fade(0.35);
      p.body.pos.copy(w.to);
      p.facing = w.yaw;
      this.cam.snapBehind(w.yaw, p);
      audio.sfx('warp');
    } else if (w.t > 1.2) {
      p.state = 'normal'; p.body.vel.set(0, 8, 0); p.body.grounded = false;
      this.warp = null;
    }
    p.visualUpdate(dt);
  }

  render(renderer) { renderer.render(this.scene, this.camera); }

  resize(aspect) { this.camera.aspect = aspect; this.camera.updateProjectionMatrix(); }

  dispose() {
    audio.stopMusic();
    this.app.ui.bossBar(null);
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
    this.scene.clear();
  }
}
