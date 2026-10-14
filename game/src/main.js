// Application entry: renderer, main loop, state machine, menu diorama.
import * as THREE from 'three';
import { Save } from './save.js';
import { input } from './input.js';
import { audio } from './audio.js';
import { UI } from './ui.js';
import { Game } from './game.js';
import { LEVELS } from './levels.js';
import { buildCharacter, animateCharacter, buildRingGeo } from './models.js';
import { makeSky } from './builder.js';
import { THEMES } from './themes.js';
import { toon } from './materials.js';
import { buildMedal } from './models.js';

const TIPS = [
  'Dica: segure ESPECIAL com o Zip para usar o TURBO (a energia vem dos anéis).',
  'Dica: com o Rocco, aperte PULO no ar para dar um pulo duplo.',
  'Dica: ATAQUE no ar com o Rocco faz um pisão que quebra blocos.',
  'Dica: com o Zip, PULO no ar perto de um inimigo ativa o ataque teleguiado.',
  'Dica: cada fase tem 3 Medalhas Estrela escondidas.',
  '100 anéis/moedas = 1 vida extra!',
  'Arraste o lado direito da tela para girar a câmera.',
];

class MenuScene {
  constructor(app) {
    this.app = app;
    this.scene = new THREE.Scene();
    const th = THEMES.green;
    this.scene.fog = new THREE.Fog(th.fog, 30, 120);
    this.scene.add(makeSky(th));
    this.scene.add(new THREE.HemisphereLight(th.hemiSky, th.hemiGround, 0.9));
    const sun = new THREE.DirectionalLight(0xffffff, 1.2); sun.position.set(5, 10, 6);
    sun.castShadow = app.quality !== 'low'; sun.shadow.mapSize.set(1024, 1024);
    const c = sun.shadow.camera; c.left = -8; c.right = 8; c.top = 8; c.bottom = -8;
    this.scene.add(sun);
    const ground = new THREE.Mesh(new THREE.CylinderGeometry(7, 6, 2, 32), [toon(0xb0743a), toon(0x5cc542), toon(0x8a5a2a)]);
    ground.position.y = -1; ground.receiveShadow = true; this.scene.add(ground);
    const far = new THREE.Mesh(new THREE.CircleGeometry(300, 32), new THREE.MeshLambertMaterial({ color: 0x4fae3a }));
    far.rotation.x = -Math.PI / 2; far.position.y = -4; this.scene.add(far);
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2, r = 16 + (i % 3) * 6;
      const t = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 3, 6), toon(0x7a5228)); trunk.position.y = 1.5; t.add(trunk);
      const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(1.8, 0), toon(i % 2 ? 0x3fbf4a : 0x2e9e3a)); leaf.position.y = 3.6; t.add(leaf);
      t.position.set(Math.cos(a) * r, -3.5, Math.sin(a) * r);
      this.scene.add(t);
    }
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(new THREE.ConeGeometry(30 + i * 3, 50 + (i % 4) * 15, 6), toon(i % 2 ? 0x5aa85a : 0x4d9a4d));
      const a = (i / 10) * Math.PI * 2; m.position.set(Math.cos(a) * 160, 10, Math.sin(a) * 160); this.scene.add(m);
    }
    this.rings = new THREE.InstancedMesh(buildRingGeo(), toon(0xffcc22, { emissive: 0x6a4a00 }), 12);
    this.scene.add(this.rings);
    this.medal = buildMedal(); this.medal.position.set(-3.5, 2.8, -1); this.scene.add(this.medal);
    this.camera = new THREE.PerspectiveCamera(50, app.aspect(), 0.1, 1000);
    this.t = 0; this.charId = null;
    this.m4 = new THREE.Matrix4();
  }
  setChar(id) {
    if (this.charId === id) return;
    if (this.rig) this.scene.remove(this.rig);
    this.rig = buildCharacter(id);
    this.rig.scale.setScalar(1.4);
    this.scene.add(this.rig);
    this.charId = id;
    this.rigT = 0;
  }
  update(dt) {
    this.t += dt; this.rigT += dt;
    const t = this.t;
    if (this.rig) {
      this.rig.rotation.y = Math.sin(t * 0.4) * 0.6 + 0.3;
      const mode = this.rigT < 1.2 ? 'victory' : 'idle';
      animateCharacter(this.rig, { mode, speed: 0, t, modeTime: this.rigT }, dt);
    }
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + t * 0.6;
      this.m4.makeRotationY(t * 3 + i);
      this.m4.setPosition(Math.cos(a) * 4.2, 2.2 + Math.sin(t * 2 + i) * 0.3, Math.sin(a) * 4.2);
      this.rings.setMatrixAt(i, this.m4);
    }
    this.rings.instanceMatrix.needsUpdate = true;
    this.medal.rotation.y = t * 2;
    const aspect = this.camera.aspect;
    // keep character on the right-hand side of the screen (menu buttons on the left)
    const ox = aspect > 1.6 ? -2.6 : -1.8;
    this.camera.position.set(ox + Math.sin(t * 0.1) * 0.5, 3.4, 9.5);
    this.camera.lookAt(ox, 1.8, 0);
  }
  render(r) { r.render(this.scene, this.camera); }
}

class App {
  constructor() {
    this.save = Save;
    this.save.load();
    this.state = 'menu';
    this.game = null;
    this.fps = 60; this.fpsAcc = 0; this.fpsFrames = 0;
    this.lowFpsTime = 0;
    this.canvas = document.getElementById('gl');
    this.quality = this.resolveQuality();
    this.createRenderer();
    this.ui = new UI(this);
    input.init(document.getElementById('touch'), this.save.settings);
    input.setVisible(false);
    audio.setVolumes(this.save.settings.music, this.save.settings.sfx);
    this.menuScene = new MenuScene(this);
    this.menuScene.setChar(this.save.data.character);
    this.ui.mainMenu();
    this.ui.showHud(false);
    this.bindSystem();
    this.last = performance.now();
    this.acc = 0;
    requestAnimationFrame((t) => this.frame(t));
    audio.playMusic('menu');
    window.__app = this; // used by automated tests
    window.__test = { app: this, input, audio, LEVELS };
    // status lines (visible in `adb logcat -s DashKingdom`; used by the emulator CI test)
    const gl = this.renderer.getContext();
    console.log(`[DK] boot ok webgl=${this.renderer.capabilities.isWebGL2 ? 2 : 1} quality=${this.quality} gpu=${gl.getParameter(gl.RENDERER)} size=${window.innerWidth}x${window.innerHeight}`);
    const auto = new URLSearchParams(location.search).get('autostart');
    if (auto !== null && /^[0-4]$/.test(auto)) { this.save.data.unlocked = Math.max(this.save.data.unlocked, +auto + 1); setTimeout(() => this.startLevel(+auto), 500); }
    setInterval(() => { if (this.state === 'playing' && this.game) console.log(`[DK] playing level=${this.game.def.id} fps=${this.fps.toFixed(1)} z=${this.game.player.pos.z.toFixed(1)}`); }, 5000);
  }

  resolveQuality() {
    const q = this.save.settings.quality;
    if (q !== 'auto') return q;
    const mem = navigator.deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    if (mem <= 2 || cores <= 4) return 'low';
    return 'medium';
  }

  createRenderer() {
    const q = this.quality;
    let r;
    try {
      r = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: q !== 'low', powerPreference: 'high-performance', stencil: false });
    } catch (e) {
      document.getElementById('error').innerHTML = '<div class="panel"><h2>WebGL indisponível</h2><p>Seu aparelho ou WebView não suporta gráficos 3D (WebGL). Atualize o "Android System WebView" pela Play Store e tente novamente.</p></div>';
      document.getElementById('error').classList.remove('hidden');
      throw e;
    }
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.shadowMap.enabled = q !== 'low';
    r.shadowMap.type = q === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
    this.baseRatio = q === 'low' ? 1.0 : q === 'medium' ? 1.5 : 2.0;
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, this.baseRatio);
    r.setPixelRatio(this.pixelRatio);
    r.setSize(window.innerWidth, window.innerHeight, false);
    this.renderer = r;
  }

  aspect() { return window.innerWidth / Math.max(1, window.innerHeight); }

  bindSystem() {
    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.onResize(), 200));
    // input diagnostics (first few events only; visible in logcat)
    this.evLog = 0;
    for (const t of ['pointerdown', 'touchstart', 'mousedown', 'click']) {
      window.addEventListener(t, (e) => {
        if (this.evLog++ < 12) {
          const p = e.touches ? e.touches[0] : e;
          console.log(`[DK] input ${t} ${e.pointerType || ''} ${p ? Math.round(p.clientX) + ',' + Math.round(p.clientY) : ''} target=${e.target && (e.target.id || e.target.className || e.target.tagName)}`);
        }
      }, { capture: true, passive: true });
    }
    const unlock = () => audio.unlock();
    window.addEventListener('pointerdown', unlock, { capture: true });
    window.addEventListener('keydown', unlock, { capture: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { this.pause(true); audio.suspend(); } else audio.resume();
    });
    window.onAndroidPause = () => { this.pause(true); audio.suspend(); };
    window.onAndroidResume = () => { audio.resume(); };
    window.onAndroidBack = () => { this.back(); return true; };
    this.canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); this.ui.loading(true, 'Recuperando gráficos...', ''); });
    this.canvas.addEventListener('webglcontextrestored', () => location.reload());
    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.menuScene.camera.aspect = this.aspect(); this.menuScene.camera.updateProjectionMatrix();
    if (this.game) this.game.resize(this.aspect());
    document.getElementById('rotate-hint').classList.toggle('show', window.innerHeight > window.innerWidth * 1.1);
  }

  setSetting(k, v) {
    const s = this.save.settings;
    s[k] = v;
    this.save.persist();
    if (k === 'music' || k === 'sfx') audio.setVolumes(s.music, s.sfx);
    if (k === 'controlSize' || k === 'joystick') input.applyLayout();
    if (k === 'quality') {
      this.quality = this.resolveQuality();
      const r = this.renderer;
      this.baseRatio = this.quality === 'low' ? 1.0 : this.quality === 'medium' ? 1.5 : 2.0;
      this.pixelRatio = Math.min(window.devicePixelRatio || 1, this.baseRatio);
      r.setPixelRatio(this.pixelRatio);
      r.setSize(window.innerWidth, window.innerHeight, false);
      r.shadowMap.enabled = this.quality !== 'low';
      r.shadowMap.type = this.quality === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
      r.shadowMap.needsUpdate = true;
      this.toast('Qualidade aplicada' + (this.game ? ' (sombras completas ao reiniciar a fase)' : ''));
    }
  }
  toast(t) { this.ui.toastMsg(t); }

  // ---------------------------------------------------------------- menu actions
  action(act, arg) {
    console.log(`[DK] action ${act}${arg ? ' ' + arg : ''}`);
    switch (act) {
      case 'play': {
        const s = this.save.data;
        let next = LEVELS.findIndex((l, i) => i < s.unlocked && !(s.levels[l.id] && s.levels[l.id].completed));
        if (next < 0) { this.ui.levelMenu(); break; }
        this.startLevel(next);
        break;
      }
      case 'chars': this.ui.charMenu(); break;
      case 'pickchar': this.save.data.character = arg; this.save.persist(); this.menuScene.setChar(arg); this.ui.charMenu(); break;
      case 'levels': this.ui.levelMenu(); break;
      case 'settings': this.ui.settingsMenu('main'); break;
      case 'credits': this.ui.creditsMenu(); break;
      case 'back': this.ui.mainMenu(); break;
      case 'startlevel': this.startLevel(parseInt(arg, 10)); break;
      case 'resume': this.resume(); break;
      case 'restart': this.startLevel(this.game ? this.game.levelIndex : 0); break;
      case 'next': this.startLevel(Math.min(LEVELS.length - 1, this.game.levelIndex + 1)); break;
      case 'quit': this.quitToMenu(); break;
      case 'pausesettings': this.ui.settingsMenu('pause'); break;
      case 'settingsback': this.ui.pauseMenu(this.game); break;
      case 'ending': this.showEnding(); break;
      default: break;
    }
  }

  back() {
    const st = this.state;
    if (st === 'playing') { this.pause(); return; }
    if (st === 'paused') {
      if (this.ui.current === 'settings') this.ui.pauseMenu(this.game); else this.resume();
      return;
    }
    if (st === 'menu') {
      if (this.ui.current && this.ui.current !== 'main') { audio.sfx('back'); this.ui.mainMenu(); return; }
      if (window.AndroidBridge && window.AndroidBridge.exitApp) window.AndroidBridge.exitApp();
      return;
    }
    if (st === 'results' || st === 'gameover' || st === 'ending') this.quitToMenu();
  }

  startLevel(i) {
    if (i + 1 > this.save.data.unlocked) return;
    const def = LEVELS[i];
    this.ui.hideScreens();
    this.ui.loading(true, `${i + 1}. ${def.name}`, TIPS[Math.floor(Math.random() * TIPS.length)]);
    this.state = 'loading';
    console.log(`[DK] loading level ${def.id}`);
    audio.stopMusic();
    // give the browser a frame to paint the loading screen
    setTimeout(() => {
      try {
        if (this.game) { this.game.dispose(); this.game = null; }
        const t0 = performance.now();
        this.game = new Game(this, i, this.save.data.character);
        this.game.load();
        this.renderer.compile(this.game.scene, this.game.camera);
        this.loadMs = performance.now() - t0;
        this.save.data.stats.plays++;
        this.save.persist();
        this.state = 'playing';
        console.log(`[DK] level loaded ${def.id} in ${Math.round(this.loadMs)}ms`);
        this.ui.showHud(true);
        input.setVisible(true);
        input.releaseAll();
        this.ui.fade(0.5);
      } catch (e) {
        console.error('[DK] level load failed: ' + (e && e.stack || e));
        this.ui.error('Falha ao carregar a fase: ' + (e && e.message));
        this.state = 'menu';
      }
      this.ui.loading(false);
    }, 60);
  }

  pause(silent) {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    input.setVisible(false);
    if (!silent) audio.sfx('pause');
    this.ui.pauseMenu(this.game);
  }
  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.ui.hideScreens();
    input.setVisible(true);
    input.releaseAll();
    this.last = performance.now();
  }

  showResults(game) {
    const base = game.score;
    const timeBonus = Math.max(0, Math.round((game.def.par - game.time) * 50));
    const ringBonus = (game.rings + game.coins) * 20;
    const perfect = game.deaths === 0 ? 3000 : 0;
    const total = base + timeBonus + ringBonus + perfect;
    const res = this.save.completeLevel(game.levelIndex, game.def.id, total, game.time, game.medals);
    if (game.levelIndex === LEVELS.length - 1) { this.save.data.stats.gameCompleted = true; this.save.persist(); }
    this.state = 'results';
    input.setVisible(false);
    this.ui.resultsMenu(game, { base, timeBonus, ringBonus, perfect, total, newBest: res.newBest });
  }

  showGameOver(game) {
    this.state = 'gameover';
    input.setVisible(false);
    setTimeout(() => this.ui.gameOverMenu(game), 1200);
  }

  showEnding() {
    if (this.game) { this.game.dispose(); this.game = null; }
    this.state = 'ending';
    this.ui.showHud(false);
    this.menuScene.setChar(this.save.data.character);
    this.menuScene.rigT = 0;
    audio.playMusic('ending');
    this.ui.endingScreen();
  }

  quitToMenu() {
    this.crashed = false;
    if (this.game) { this.game.dispose(); this.game = null; }
    this.state = 'menu';
    this.ui.showHud(false);
    input.setVisible(false);
    this.menuScene.setChar(this.save.data.character);
    this.ui.mainMenu();
    audio.playMusic('menu');
  }

  // ---------------------------------------------------------------- main loop
  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    let dt = (now - this.last) / 1000;
    const cap = this.save.settings.fpsCap || 60;
    if (cap < 60 && dt < 1 / cap - 0.004) return; // frame limiter (battery saver)
    this.last = now;
    if (dt > 0.1) dt = 0.1;
    if (dt <= 0) return;
    // FPS meter + dynamic resolution for "auto" quality
    this.fpsAcc += dt; this.fpsFrames++;
    if (this.fpsAcc >= 0.5) {
      this.fps = this.fpsFrames / this.fpsAcc; this.fpsAcc = 0; this.fpsFrames = 0;
      if (this.save.settings.quality === 'auto' && this.state === 'playing') {
        if (this.fps < Math.min(cap, 60) * 0.75) this.lowFpsTime += 0.5; else this.lowFpsTime = 0;
        if (this.lowFpsTime >= 2 && this.pixelRatio > 0.7) {
          this.pixelRatio = Math.max(0.7, this.pixelRatio - 0.15);
          this.renderer.setPixelRatio(this.pixelRatio);
          this.renderer.setSize(window.innerWidth, window.innerHeight, false);
          this.lowFpsTime = 0;
        }
      }
    }
    try {
      const step = Math.min(dt, 1 / 30);
      if (this.state === 'playing' && this.game) {
        if (input.pausePressed) { input.consume(); this.pause(); }
        else {
          // large frame gaps are processed in <=1/30 s slices for stable physics
          let left = dt;
          while (left > 1e-4) { const d = Math.min(left, step); this.game.update(d); left -= d; }
        }
        this.game.render(this.renderer);
      } else if ((this.state === 'paused' || this.state === 'results' || this.state === 'gameover') && this.game) {
        if (this.state !== 'paused') {
          // keep the world animating behind result/game over panels
          this.game.player.visualUpdate(dt);
          this.game.fx.update(dt);
        }
        this.game.render(this.renderer);
      } else {
        this.menuScene.update(dt);
        this.menuScene.render(this.renderer);
      }
    } catch (e) {
      console.error(e);
      if (!this.crashed) {
        this.crashed = true;
        this.ui.error(e && e.message ? e.message : String(e));
        this.state = 'error';
      }
    }
  }
}

window.addEventListener('error', (e) => { console.error('Erro global:', e.message); });

function boot() {
  try {
    new App();
  } catch (e) {
    console.error(e);
    const el = document.getElementById('error');
    if (el && !el.innerHTML) { el.innerHTML = `<div class="panel"><h2>Erro ao iniciar</h2><p>${String(e && e.message)}</p></div>`; }
    el && el.classList.remove('hidden');
  }
  const l = document.getElementById('boot');
  if (l) l.remove();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
