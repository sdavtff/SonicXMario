// Unified input: multi-touch virtual joystick + buttons, keyboard and gamepad.
import { clamp } from './util.js';

class Input {
  constructor() {
    this.moveX = 0; this.moveY = 0; // joystick, y>0 = forward
    this.jumpHeld = false; this.attackHeld = false; this.specialHeld = false;
    this.jumpPressed = false; this.attackPressed = false; this.specialPressed = false;
    this.pausePressed = false;
    this.camDX = 0; this.camDY = 0;
    this.lastCamInput = -10;
    this.keys = new Set();
    this.joy = { id: null, cx: 0, cy: 0, x: 0, y: 0 };
    this.camPtr = { id: null, x: 0, y: 0 };
    this.enabled = false;
    this.settings = null;
    this.kbX = 0; this.kbY = 0;
    this.padPrev = {};
  }

  init(root, settings) {
    this.settings = settings;
    this.root = root;
    root.innerHTML = `
      <div id="joy-zone"></div>
      <div id="cam-zone"></div>
      <div id="joy-base"><div id="joy-knob"></div></div>
      <div class="tbtn" id="btn-special"><span>✦</span><small>ESPECIAL</small></div>
      <div class="tbtn" id="btn-attack"><span>✊</span><small>ATAQUE</small></div>
      <div class="tbtn big" id="btn-jump"><span>▲</span><small>PULO</small></div>`;
    this.base = root.querySelector('#joy-base');
    this.knob = root.querySelector('#joy-knob');
    const joyZone = root.querySelector('#joy-zone');
    const camZone = root.querySelector('#cam-zone');

    joyZone.addEventListener('pointerdown', (e) => this.joyDown(e));
    window.addEventListener('pointermove', (e) => this.ptrMove(e), { passive: false });
    window.addEventListener('pointerup', (e) => this.ptrUp(e));
    window.addEventListener('pointercancel', (e) => this.ptrUp(e));
    camZone.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this.camPtr = { id: e.pointerId, x: e.clientX, y: e.clientY };
    });

    const bind = (id, name) => {
      const el = root.querySelector(id);
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault(); e.stopPropagation();
        try { el.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
        el.classList.add('down');
        this[name + 'Held'] = true; this[name + 'Pressed'] = true;
        el._pid = e.pointerId;
      });
      const up = (e) => {
        if (el._pid !== e.pointerId) return;
        el.classList.remove('down');
        this[name + 'Held'] = false;
        el._pid = null;
      };
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
      el.addEventListener('lostpointercapture', up);
    };
    bind('#btn-jump', 'jump');
    bind('#btn-attack', 'attack');
    bind('#btn-special', 'special');

    window.addEventListener('keydown', (e) => this.keyDown(e));
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.releaseAll());
    this.applyLayout();
  }

  applyLayout() {
    if (!this.root) return;
    const s = this.settings.controlSize || 1;
    this.root.style.setProperty('--ctl', s);
    this.fixedJoy = this.settings.joystick === 'fixed';
    if (this.fixedJoy) {
      this.base.classList.add('visible', 'fixed');
    } else {
      this.base.classList.remove('fixed');
      if (this.joy.id === null) this.base.classList.remove('visible');
    }
  }

  setVisible(v) {
    this.root.style.display = v ? 'block' : 'none';
    if (!v) this.releaseAll();
  }

  joyRadius() { return 56 * (this.settings.controlSize || 1); }

  joyDown(e) {
    e.preventDefault();
    if (this.joy.id !== null) return;
    let cx = e.clientX, cy = e.clientY;
    if (this.fixedJoy) {
      const r = this.base.getBoundingClientRect();
      cx = r.left + r.width / 2; cy = r.top + r.height / 2;
    } else {
      this.base.style.left = cx + 'px';
      this.base.style.top = cy + 'px';
      this.base.classList.add('visible');
    }
    this.joy = { id: e.pointerId, cx, cy, x: 0, y: 0 };
    this.updateJoy(e.clientX, e.clientY);
  }

  updateJoy(px, py) {
    const R = this.joyRadius();
    let dx = px - this.joy.cx, dy = py - this.joy.cy;
    const d = Math.hypot(dx, dy);
    if (d > R) { dx *= R / d; dy *= R / d; }
    this.knob.style.transform = `translate(${dx}px, ${dy}px)`;
    let x = dx / R, y = -dy / R;
    const m = Math.hypot(x, y);
    // small dead zone, then rescale so movement starts smoothly
    if (m < 0.12) { x = 0; y = 0; } else { const k = (m - 0.12) / (0.88 * m); x *= k; y *= k; }
    this.joy.x = x; this.joy.y = y;
  }

  ptrMove(e) {
    if (e.pointerId === this.joy.id) {
      e.preventDefault();
      this.updateJoy(e.clientX, e.clientY);
    } else if (e.pointerId === this.camPtr.id) {
      e.preventDefault();
      const sens = this.settings.sensitivity || 1;
      this.camDX += (e.clientX - this.camPtr.x) * sens;
      this.camDY += (e.clientY - this.camPtr.y) * sens * (this.settings.invertY ? -1 : 1);
      this.camPtr.x = e.clientX; this.camPtr.y = e.clientY;
      this.lastCamInput = performance.now() / 1000;
    }
  }

  ptrUp(e) {
    if (e.pointerId === this.joy.id) {
      this.joy = { id: null, cx: 0, cy: 0, x: 0, y: 0 };
      this.knob.style.transform = 'translate(0px,0px)';
      if (!this.fixedJoy) this.base.classList.remove('visible');
    }
    if (e.pointerId === this.camPtr.id) this.camPtr.id = null;
  }

  keyDown(e) {
    if (e.repeat) { this.keys.add(e.code); return; }
    this.keys.add(e.code);
    switch (e.code) {
      case 'Space': case 'KeyK': this.jumpPressed = true; break;
      case 'KeyJ': case 'ShiftLeft': case 'ShiftRight': this.attackPressed = true; break;
      case 'KeyL': case 'KeyE': this.specialPressed = true; break;
      case 'Escape': case 'KeyP': this.pausePressed = true; break;
      default: break;
    }
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  }

  releaseAll() {
    this.keys.clear();
    this.jumpHeld = this.attackHeld = this.specialHeld = false;
    this.joy = { id: null, cx: 0, cy: 0, x: 0, y: 0 };
    this.camPtr.id = null;
    if (this.knob) this.knob.style.transform = 'translate(0px,0px)';
    if (this.root) this.root.querySelectorAll('.tbtn').forEach((b) => b.classList.remove('down'));
  }

  pollGamepad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const p = pads && pads[0];
    if (!p) return null;
    const btn = (i) => !!(p.buttons[i] && p.buttons[i].pressed);
    const edge = (i) => { const v = btn(i); const was = this.padPrev[i]; this.padPrev[i] = v; return v && !was; };
    if (edge(0)) this.jumpPressed = true;
    if (edge(2)) this.attackPressed = true;
    if (edge(1) || edge(3)) this.specialPressed = true;
    if (edge(9)) this.pausePressed = true;
    const ax = Math.abs(p.axes[2] || 0) > 0.15 ? p.axes[2] : 0;
    const ay = Math.abs(p.axes[3] || 0) > 0.15 ? p.axes[3] : 0;
    if (ax || ay) {
      this.camDX += ax * 14 * (this.settings.sensitivity || 1);
      this.camDY += ay * 10 * (this.settings.sensitivity || 1);
      this.lastCamInput = performance.now() / 1000;
    }
    return { x: Math.abs(p.axes[0]) > 0.15 ? p.axes[0] : 0, y: Math.abs(p.axes[1]) > 0.15 ? -p.axes[1] : 0, jump: btn(0), attack: btn(2), special: btn(1) || btn(3) };
  }

  // Called once per frame before game logic.
  update() {
    const k = this.keys;
    let x = 0, y = 0;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (k.has('KeyW') || k.has('ArrowUp')) y += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) y -= 1;
    const m = Math.hypot(x, y); if (m > 1) { x /= m; y /= m; }
    const pad = this.pollGamepad();
    this.moveX = clamp(this.joy.x + x + (pad ? pad.x : 0), -1, 1);
    this.moveY = clamp(this.joy.y + y + (pad ? pad.y : 0), -1, 1);
    this.jumpDown = this.jumpHeld || k.has('Space') || k.has('KeyK') || !!(pad && pad.jump);
    this.attackDown = this.attackHeld || k.has('KeyJ') || !!(pad && pad.attack);
    this.specialDown = this.specialHeld || k.has('KeyL') || k.has('KeyE') || !!(pad && pad.special);
    if (k.has('KeyQ')) { this.camDX -= 6; this.lastCamInput = performance.now() / 1000; }
    if (k.has('KeyR')) { this.camDX += 6; this.lastCamInput = performance.now() / 1000; }
  }

  // Called at the end of each frame: clears one-shot events.
  consume() {
    this.jumpPressed = this.attackPressed = this.specialPressed = this.pausePressed = false;
    this.camDX = 0; this.camDY = 0;
  }
}

export const input = new Input();
