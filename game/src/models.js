// Procedural low-poly 3D models. Characters use a joint hierarchy ("rig") that is
// animated procedurally (run cycle, jump, spin ball, hurt, victory, defeat...).
import * as THREE from 'three';
import { toon, basic, tex, lambert } from './materials.js';
import { damp, clamp } from './util.js';

const G = {
  sphere: new THREE.SphereGeometry(1, 14, 10),
  sphereLo: new THREE.SphereGeometry(1, 10, 7),
  hemi: new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 10),
  cone: new THREE.ConeGeometry(1, 1, 8),
  box: new THREE.BoxGeometry(1, 1, 1),
  torus: new THREE.TorusGeometry(1, 0.25, 8, 20),
};
export const GEO = G;

function mesh(geo, mat, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx, parent = null) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  if (parent) parent.add(m);
  return m;
}
function joint(parent, x, y, z) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

// ---------------------------------------------------------------- characters
function buildLimbs(root, c, opts) {
  const J = {};
  // legs
  for (const side of [-1, 1]) {
    const hip = joint(root.body, side * 0.17, 0.72, 0);
    mesh(G.cyl, c.leg, 0, -0.17, 0, 0.09, 0.34, 0.09, hip);
    const knee = joint(hip, 0, -0.34, 0);
    mesh(G.cyl, c.leg, 0, -0.15, 0, 0.085, 0.3, 0.085, knee);
    const shoe = mesh(G.sphere, c.shoe, 0, -0.32, 0.08, 0.15, 0.12, 0.27, knee);
    if (opts.shoeStripe) mesh(G.box, c.stripe, 0, -0.27, 0.12, 0.31, 0.05, 0.08, knee);
    if (opts.sole) mesh(G.box, c.sole, 0, -0.42, 0.08, 0.28, 0.05, 0.5, knee);
    J[side < 0 ? 'hipL' : 'hipR'] = hip;
    J[side < 0 ? 'kneeL' : 'kneeR'] = knee;
    void shoe;
  }
  // arms
  for (const side of [-1, 1]) {
    const sh = joint(root.torso, side * 0.38, 0.22, 0);
    const upper = mesh(G.cyl, c.arm, 0, -0.15, 0, 0.075, 0.3, 0.075, sh);
    upper.rotation.z = 0;
    const el = joint(sh, 0, -0.3, 0);
    mesh(G.cyl, c.forearm || c.arm, 0, -0.12, 0, 0.07, 0.24, 0.07, el);
    mesh(G.sphere, c.glove, 0, -0.3, 0, 0.13, 0.13, 0.13, el);
    if (opts.cuff) mesh(G.cyl, c.glove, 0, -0.2, 0, 0.1, 0.07, 0.1, el);
    J[side < 0 ? 'shL' : 'shR'] = sh;
    J[side < 0 ? 'elL' : 'elR'] = el;
  }
  return J;
}

function eyes(head, white, iris, y, z, spread, size, irisColor) {
  for (const s of [-1, 1]) {
    mesh(G.sphere, white, s * spread, y, z, size * 0.85, size, size * 0.6, head);
    mesh(G.sphere, iris, s * spread * 0.9, y - size * 0.05, z + size * 0.45, size * 0.42, size * 0.55, size * 0.25, head);
    mesh(G.sphere, basic(0xffffff), s * spread * 0.85 + 0.02, y + size * 0.15, z + size * 0.62, size * 0.13, size * 0.15, size * 0.08, head);
  }
  void irisColor;
}

export function buildZip() {
  const c = {
    blue: toon(0x1f5fe0), tan: toon(0xf2c79a), leg: toon(0x1f5fe0), arm: toon(0xf2c79a), forearm: toon(0xf2c79a),
    glove: toon(0xffffff), shoe: toon(0x22b35a), stripe: toon(0xffffff), sole: toon(0xeeeeee),
    white: toon(0xffffff), iris: toon(0x1a8f3a), black: toon(0x111111), goggle: toon(0xff8a1a), lens: toon(0x7fe7ff, { emissive: 0x114455 }),
    scarf: toon(0xffd23f),
  };
  const root = new THREE.Group();
  root.body = joint(root, 0, 0, 0);
  root.torso = joint(root.body, 0, 0.98, 0);
  mesh(G.sphere, c.blue, 0, 0, 0, 0.38, 0.42, 0.34, root.torso);
  mesh(G.sphere, c.tan, 0, -0.02, 0.17, 0.25, 0.3, 0.2, root.torso);
  // scarf
  mesh(G.torus, c.scarf, 0, 0.3, 0, 0.27, 0.27, 0.35, root.torso).rotation.x = Math.PI / 2;
  const tail = mesh(G.cone, c.scarf, 0, 0.22, -0.38, 0.1, 0.45, 0.06, root.torso);
  tail.rotation.x = -1.9;
  root.scarfTail = tail;
  // head
  const head = joint(root.torso, 0, 0.55, 0.02);
  root.head = head;
  mesh(G.sphere, c.blue, 0, 0, 0, 0.43, 0.42, 0.42, head);
  mesh(G.sphere, c.tan, 0, -0.12, 0.3, 0.24, 0.18, 0.18, head);
  mesh(G.sphere, c.black, 0, -0.04, 0.48, 0.06, 0.05, 0.05, head);
  eyes(head, c.white, c.iris, 0.06, 0.3, 0.13, 0.15);
  // quills (backwards)
  const quills = [[0, 0.18, -1.2, 0.55], [0.22, 0.05, -1.35, 0.5], [-0.22, 0.05, -1.35, 0.5], [0, -0.12, -1.55, 0.5], [0.16, -0.22, -1.7, 0.4], [-0.16, -0.22, -1.7, 0.4]];
  for (const [x, y, rx, l] of quills) {
    const q = mesh(G.cone, c.blue, x, y, -0.32, 0.16, l, 0.16, head);
    q.rotation.x = rx; q.rotation.z = -x * 0.8;
  }
  // ears
  for (const s of [-1, 1]) { const e = mesh(G.cone, c.blue, s * 0.25, 0.36, -0.05, 0.11, 0.25, 0.08, head); e.rotation.z = -s * 0.3; }
  // goggles on forehead (distinctive accessory)
  const band = mesh(G.torus, c.goggle, 0, 0.2, 0, 0.42, 0.42, 0.3, head); band.rotation.x = Math.PI / 2 - 0.25;
  for (const s of [-1, 1]) { const l = mesh(G.cyl, c.lens, s * 0.13, 0.27, 0.33, 0.1, 0.06, 0.1, head); l.rotation.x = Math.PI / 2 - 0.5; }
  Object.assign(root, buildLimbs(root, c, { shoeStripe: true, sole: true, cuff: true }));
  // spin ball (shown while jumping / spin dashing)
  const ball = new THREE.Group();
  mesh(G.sphere, c.blue, 0, 0, 0, 0.62, 0.62, 0.62, ball);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const sp = mesh(G.cone, c.blue, 0, Math.cos(a) * 0.6, Math.sin(a) * 0.6, 0.18, 0.38, 0.18, ball);
    sp.rotation.x = a;
  }
  mesh(G.torus, toon(0x6fa8ff, { transparent: true, opacity: 0.45 }), 0, 0, 0, 0.7, 0.7, 0.7, ball).rotation.y = Math.PI / 2;
  ball.position.y = 0.62; ball.visible = false;
  root.add(ball);
  root.ball = ball;
  root.kind = 'zip';
  return root;
}

export function buildRocco() {
  const c = {
    skin: toon(0xf6c49a), cap: toon(0xe8541c), shirt: toon(0xe8541c), overall: toon(0x1a8f8f), leg: toon(0x1a8f8f),
    arm: toon(0xe8541c), forearm: toon(0xe8541c), glove: toon(0xffffff), shoe: toon(0x6b3b1a), sole: toon(0x3a200d),
    white: toon(0xffffff), iris: toon(0x2a5bd7), hair: toon(0x5a3214), button: toon(0xffd23f),
  };
  const root = new THREE.Group();
  root.body = joint(root, 0, 0, 0);
  root.torso = joint(root.body, 0, 0.98, 0);
  mesh(G.sphere, c.overall, 0, -0.08, 0, 0.42, 0.4, 0.36, root.torso);
  mesh(G.sphere, c.shirt, 0, 0.16, -0.02, 0.36, 0.26, 0.32, root.torso);
  for (const s of [-1, 1]) {
    mesh(G.box, c.overall, s * 0.15, 0.17, 0.25, 0.09, 0.32, 0.06, root.torso);
    mesh(G.sphere, c.button, s * 0.15, 0.06, 0.32, 0.05, 0.05, 0.03, root.torso);
  }
  const head = joint(root.torso, 0, 0.6, 0.02);
  root.head = head;
  mesh(G.sphere, c.skin, 0, 0, 0, 0.4, 0.4, 0.38, head);
  mesh(G.sphere, c.hair, 0, -0.02, -0.12, 0.38, 0.3, 0.3, head);
  mesh(G.sphere, c.skin, 0, -0.06, 0.38, 0.12, 0.11, 0.11, head); // nose
  for (const s of [-1, 1]) {
    const m = mesh(G.sphere, c.hair, s * 0.11, -0.16, 0.34, 0.13, 0.06, 0.07, head); m.rotation.z = s * 0.25; // moustache
    mesh(G.sphere, c.skin, s * 0.39, -0.02, 0, 0.07, 0.1, 0.06, head); // ears
  }
  eyes(head, c.white, c.iris, 0.1, 0.27, 0.11, 0.12);
  // cap
  mesh(G.hemi, c.cap, 0, 0.1, -0.02, 0.43, 0.36, 0.42, head);
  const brim = mesh(G.cyl, c.cap, 0, 0.12, 0.3, 0.32, 0.04, 0.24, head);
  brim.rotation.x = 0.12;
  const emb = mesh(G.cyl, toon(0xffffff, { map: tex('emblemR') }), 0, 0.32, 0.3, 0.12, 0.02, 0.12, head);
  emb.rotation.x = Math.PI / 2 - 0.5;
  Object.assign(root, buildLimbs(root, c, { sole: true }));
  root.kind = 'rocco';
  return root;
}

export function buildCharacter(id) {
  return id === 'rocco' ? buildRocco() : buildZip();
}

// Pose targets are blended toward smoothly every frame.
const POSE_KEYS = ['hipL', 'hipR', 'kneeL', 'kneeR', 'shL', 'shR', 'elL', 'elR'];
export function animateCharacter(rig, st, dt) {
  // st: { mode, speed (0..1+), t, vy, facingTilt }
  const P = {
    hipL: [0, 0, 0], hipR: [0, 0, 0], kneeL: [0, 0, 0], kneeR: [0, 0, 0],
    shL: [0, 0, 0.15], shR: [0, 0, -0.15], elL: [0, 0, 0], elR: [0, 0, 0],
  };
  let lean = 0, bob = 0, headX = 0, roll = 0, bodyY = 0;
  const t = st.t;
  rig.phase = (rig.phase || 0);
  const m = st.mode;
  let showBall = false;

  if (m === 'run' || m === 'idle') {
    const s = clamp(st.speed, 0, 1.6);
    if (s < 0.05) {
      bob = Math.sin(t * 2.5) * 0.02;
      P.shL = [0.05, 0, 0.18 + Math.sin(t * 2.5) * 0.03]; P.shR = [0.05, 0, -0.18 - Math.sin(t * 2.5) * 0.03];
      P.elL = [-0.2, 0, 0]; P.elR = [-0.2, 0, 0];
      headX = Math.sin(t * 0.7) * 0.05;
    } else {
      rig.phase += dt * (5 + s * 9);
      const p = rig.phase;
      const a = 0.45 + Math.min(s, 1) * 0.6;
      P.hipL = [Math.sin(p) * a, 0, 0]; P.hipR = [-Math.sin(p) * a, 0, 0];
      P.kneeL = [-(Math.max(0, -Math.cos(p)) * 1.3 * a + 0.1), 0, 0];
      P.kneeR = [-(Math.max(0, Math.cos(p)) * 1.3 * a + 0.1), 0, 0];
      if (rig.kind === 'zip' && s > 1.05) {
        // high speed: arms swept back
        P.shL = [0.9, 0, 0.4]; P.shR = [0.9, 0, -0.4]; P.elL = [0.3, 0, 0]; P.elR = [0.3, 0, 0];
      } else {
        P.shL = [-Math.sin(p) * a * 0.9, 0, 0.15]; P.shR = [Math.sin(p) * a * 0.9, 0, -0.15];
        P.elL = [-0.7, 0, 0]; P.elR = [-0.7, 0, 0];
      }
      lean = 0.1 + Math.min(s, 1.5) * 0.22;
      bob = Math.abs(Math.sin(p)) * 0.07 * Math.min(s, 1);
    }
  } else if (m === 'ball' || m === 'spindash' || m === 'homing') {
    showBall = rig.kind === 'zip';
    if (!showBall) { // Rocco somersault tuck
      P.hipL = P.hipR = [-1.6, 0, 0]; P.kneeL = P.kneeR = [-2.2, 0, 0]; P.shL = [-1.2, 0, 0.3]; P.shR = [-1.2, 0, -0.3];
      roll = t * 14;
    }
  } else if (m === 'jump' || m === 'spring') {
    if (rig.kind === 'rocco' && m === 'jump') {
      P.hipL = [-1.0, 0, 0]; P.kneeL = [-1.2, 0, 0]; P.hipR = [0.4, 0, 0]; P.kneeR = [-0.3, 0, 0];
      P.shR = [-2.9, 0, -0.1]; P.elR = [0, 0, 0]; P.shL = [0.3, 0, 0.6]; P.elL = [-0.5, 0, 0];
    } else {
      P.hipL = [0.1, 0, 0.05]; P.hipR = [-0.1, 0, -0.05]; P.shL = [-2.8, 0, 0.2]; P.shR = [-2.8, 0, -0.2];
      P.kneeL = [-0.2, 0, 0]; P.kneeR = [-0.2, 0, 0];
    }
  } else if (m === 'fall') {
    P.hipL = [0.3, 0, 0.1]; P.hipR = [-0.4, 0, -0.1]; P.kneeL = [-0.6, 0, 0]; P.kneeR = [-0.3, 0, 0];
    P.shL = [-1.5 + Math.sin(t * 14) * 0.4, 0, 0.9]; P.shR = [-1.5 - Math.sin(t * 14) * 0.4, 0, -0.9];
  } else if (m === 'double') {
    P.hipL = P.hipR = [-1.2, 0, 0]; P.kneeL = P.kneeR = [-1.8, 0, 0]; P.shL = [-1.0, 0, 1.0]; P.shR = [-1.0, 0, -1.0];
    roll = (st.modeTime || 0) * 18;
  } else if (m === 'punch') {
    const k = Math.min(1, (st.modeTime || 0) / 0.08);
    P.shR = [-1.55 * k, 0, -0.1]; P.elR = [0, 0, 0]; P.shL = [0.6, 0, 0.3]; P.elL = [-1.2, 0, 0];
    P.hipL = [-0.5, 0, 0]; P.hipR = [0.4, 0, 0]; P.kneeL = [-0.4, 0, 0];
    lean = 0.25;
  } else if (m === 'spinattack') {
    P.shL = [0, 0, 1.4]; P.shR = [0, 0, -1.4];
    rig.body.rotation.y = (st.modeTime || 0) * 28;
  } else if (m === 'pound') {
    P.hipL = P.hipR = [-1.5, 0, 0]; P.kneeL = P.kneeR = [-2.0, 0, 0]; P.shL = [-0.6, 0, 0.6]; P.shR = [-0.6, 0, -0.6];
  } else if (m === 'grind') {
    P.hipL = [-0.5, 0, 0.2]; P.hipR = [0.4, 0, -0.2]; P.kneeL = [-0.8, 0, 0]; P.kneeR = [-0.6, 0, 0];
    P.shL = [0, 0, 1.3 + Math.sin(t * 6) * 0.1]; P.shR = [0, 0, -1.3 + Math.sin(t * 6) * 0.1];
    bodyY = -0.15; lean = 0.15;
  } else if (m === 'hurt') {
    P.shL = [-0.5, 0, 1.2]; P.shR = [-0.5, 0, -1.2]; P.hipL = [0.6, 0, 0]; P.hipR = [0.3, 0, 0];
    P.kneeL = [-0.8, 0, 0]; lean = -0.5;
  } else if (m === 'victory') {
    const v = st.modeTime || 0;
    rig.body.rotation.y = v < 0.6 ? v * 10.5 : 0;
    P.shR = [-2.8, 0, -0.3]; P.elR = [-0.3, 0, 0];
    P.shL = [0, 0, 0.3 + Math.abs(Math.sin(v * 6)) * 0.3]; P.elL = [-1.5, 0, 0];
    bodyY = Math.max(0, Math.sin(Math.min(v, 0.6) / 0.6 * Math.PI)) * 0.8;
    P.hipL = [-0.3, 0, 0.1]; P.kneeL = [-0.5, 0, 0];
  } else if (m === 'dead') {
    P.shL = [-2.9, 0, 0.5]; P.shR = [-2.9, 0, -0.5]; P.hipL = [-0.6, 0, 0.3]; P.hipR = [-0.6, 0, -0.3];
    P.kneeL = [-1, 0, 0]; P.kneeR = [-1, 0, 0];
  } else if (m === 'boost') {
    rig.phase += dt * 22;
    const p = rig.phase;
    P.hipL = [Math.sin(p) * 1.1, 0, 0]; P.hipR = [-Math.sin(p) * 1.1, 0, 0];
    P.kneeL = [-1.2, 0, 0]; P.kneeR = [-1.2, 0, 0];
    P.shL = [1.1, 0, 0.5]; P.shR = [1.1, 0, -0.5];
    lean = 0.5;
  }

  if (m !== 'spinattack' && m !== 'victory') rig.body.rotation.y = 0;
  if (rig.ball) {
    rig.ball.visible = showBall;
    if (showBall) rig.ball.rotation.x += dt * (m === 'spindash' ? 40 : 22);
  }
  rig.body.visible = !showBall;

  const k = 1 - Math.exp(-18 * dt);
  for (const key of POSE_KEYS) {
    const j = rig[key]; const p = P[key];
    j.rotation.x += (p[0] - j.rotation.x) * k;
    j.rotation.y += (p[1] - j.rotation.y) * k;
    j.rotation.z += (p[2] - j.rotation.z) * k;
  }
  rig.torso.rotation.x = damp(rig.torso.rotation.x, lean, 12, dt);
  rig.body.position.y = damp(rig.body.position.y, bob + bodyY, 20, dt);
  rig.body.rotation.x = roll ? roll : damp(rig.body.rotation.x, 0, 20, dt);
  if (roll) rig.body.position.y = Math.max(rig.body.position.y, 0.2);
  rig.head.rotation.x = headX;
  if (rig.scarfTail) rig.scarfTail.rotation.x = -1.9 + Math.sin(t * 15) * 0.15 - clamp(st.speed, 0, 1.5) * 0.3;
}

// ---------------------------------------------------------------- enemies
export function buildEnemy(type) {
  const root = new THREE.Group();
  const black = toon(0x111111), white = toon(0xffffff);
  root.parts = {};
  if (type === 'walker' || type === 'firewalker') {
    const capCol = type === 'firewalker' ? 0x8a1a8a : 0xb03a1a;
    mesh(G.cyl, toon(0xf3d9a8), 0, 0.45, 0, 0.32, 0.5, 0.32, root);
    const cap = mesh(G.hemi, toon(capCol), 0, 0.62, 0, 0.62, 0.55, 0.62, root);
    for (let i = 0; i < 5; i++) {
      const a = i * 1.3; mesh(G.sphereLo, white, Math.cos(a) * 0.38, 0.95 - (i % 2) * 0.15, Math.sin(a) * 0.38, 0.11, 0.06, 0.11, root);
    }
    for (const s of [-1, 1]) {
      mesh(G.sphere, white, s * 0.13, 0.5, 0.27, 0.1, 0.13, 0.06, root);
      mesh(G.sphere, black, s * 0.12, 0.48, 0.32, 0.05, 0.07, 0.03, root);
      const brow = mesh(G.box, black, s * 0.13, 0.66, 0.3, 0.18, 0.04, 0.04, root); brow.rotation.z = s * 0.4;
      root.parts[s < 0 ? 'footL' : 'footR'] = mesh(G.sphere, toon(0x3a2410), s * 0.18, 0.1, 0.05, 0.17, 0.1, 0.24, root);
    }
    void cap;
    root.height = 1.1; root.radius = 0.55;
  } else if (type === 'beetle') {
    const shell = mesh(G.hemi, toon(0xd8261c), 0, 0.45, -0.05, 0.62, 0.5, 0.75, root);
    void shell;
    for (let i = 0; i < 6; i++) mesh(G.sphereLo, black, (i % 2 ? 1 : -1) * (0.22 + (i % 3) * 0.08), 0.75 - Math.floor(i / 2) * 0.1, -0.35 + Math.floor(i / 2) * 0.28, 0.09, 0.05, 0.09, root);
    mesh(G.sphere, toon(0x2a2a3a), 0, 0.45, 0.62, 0.32, 0.28, 0.25, root);
    for (const s of [-1, 1]) {
      mesh(G.sphere, toon(0xffee55, { emissive: 0x554400 }), s * 0.13, 0.52, 0.82, 0.08, 0.08, 0.05, root);
      const ant = mesh(G.cyl, black, s * 0.12, 0.85, 0.6, 0.02, 0.4, 0.02, root); ant.rotation.x = 0.5;
    }
    const wheel = mesh(G.torus, toon(0x333333), 0, 0.22, 0.1, 0.2, 0.2, 0.3, root); wheel.rotation.y = Math.PI / 2;
    root.parts.wheel = wheel;
    root.height = 1.0; root.radius = 0.65;
  } else if (type === 'buzzer' || type === 'drone') {
    const isDrone = type === 'drone';
    const bodyMat = toon(isDrone ? 0x7a3cff : 0xffc61a, isDrone ? { emissive: 0x220055 } : {});
    const b = mesh(G.sphere, bodyMat, 0, 0, 0, 0.42, 0.36, 0.55, root);
    void b;
    if (!isDrone) for (let i = 0; i < 2; i++) mesh(G.cyl, black, 0, 0, -0.1 + i * 0.25, 0.4, 0.06, 0.4, root).rotation.x = Math.PI / 2;
    mesh(G.sphere, toon(isDrone ? 0x00f0ff : 0xff3030, { emissive: isDrone ? 0x00aacc : 0x880000 }), 0, 0.05, 0.48, 0.16, 0.16, 0.1, root);
    const sting = mesh(G.cone, black, 0, -0.1, -0.6, 0.12, 0.35, 0.12, root); sting.rotation.x = -Math.PI / 2 - 0.3;
    const wm = toon(0xcfeeff, { transparent: true, opacity: 0.6 });
    root.parts.wingL = mesh(G.box, wm, -0.45, 0.32, 0, 0.6, 0.03, 0.3, root);
    root.parts.wingR = mesh(G.box, wm, 0.45, 0.32, 0, 0.6, 0.03, 0.3, root);
    root.height = 0.8; root.radius = 0.6; root.yOffset = -0.4;
  } else if (type === 'spiny') {
    mesh(G.sphere, toon(0xd8302a), 0, 0.5, 0, 0.55, 0.48, 0.55, root);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2, e = i % 2 ? 0.5 : 1.0;
      const sp = mesh(G.cone, white, Math.cos(a) * 0.42 * e, 0.62 + (1 - e) * 0.3, Math.sin(a) * 0.42 * e, 0.12, 0.38, 0.12, root);
      sp.lookAt(Math.cos(a) * 3, 3, Math.sin(a) * 3); sp.rotateX(Math.PI / 2);
    }
    mesh(G.sphere, toon(0xf3d9a8), 0, 0.35, 0.45, 0.25, 0.2, 0.15, root);
    for (const s of [-1, 1]) mesh(G.sphere, black, s * 0.09, 0.42, 0.57, 0.04, 0.06, 0.03, root);
    root.height = 1.0; root.radius = 0.6;
  } else if (type === 'plant') {
    const stem = mesh(G.cyl, toon(0x2e9e3a), 0, 0.6, 0, 0.12, 1.2, 0.12, root);
    void stem;
    for (const s of [-1, 1]) { const l = mesh(G.sphere, toon(0x2e9e3a), s * 0.3, 0.4, 0, 0.3, 0.06, 0.14, root); l.rotation.z = s * 0.4; }
    const head = joint(root, 0, 1.4, 0);
    mesh(G.sphere, toon(0xd8261c), 0, 0.08, 0, 0.45, 0.32, 0.45, head);
    for (let i = 0; i < 5; i++) mesh(G.sphereLo, white, Math.cos(i * 1.25) * 0.3, 0.28, Math.sin(i * 1.25) * 0.3, 0.07, 0.04, 0.07, head);
    const jaw = mesh(G.hemi, toon(0xd8261c), 0, -0.02, 0, 0.42, 0.25, 0.42, head); jaw.rotation.x = Math.PI;
    mesh(G.sphere, toon(0xffffff), 0, 0.0, 0.2, 0.32, 0.05, 0.25, head);
    root.parts.head = head; root.parts.jaw = jaw;
    root.height = 1.9; root.radius = 0.5;
  }
  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return root;
}

export function buildBoss(type) {
  const root = new THREE.Group();
  root.parts = {};
  if (type === 'magmor') {
    const shell = toon(0x5a1a10), body = toon(0xe0702a), glow = toon(0xffcf3a, { emissive: 0xff6a00 });
    const torso = joint(root, 0, 2.2, 0);
    mesh(G.sphere, body, 0, 0, 0.2, 2.0, 1.8, 2.0, torso);
    mesh(G.hemi, shell, 0, 0.2, -0.3, 2.3, 2.0, 2.3, torso);
    for (let i = 0; i < 7; i++) {
      const a = -0.9 + i * 0.3;
      const sp = mesh(G.cone, toon(0xfff2cc), Math.sin(a) * 1.5, 1.8 - Math.abs(a) * 0.6, -0.6 + Math.cos(a) * 0.2, 0.3, 0.9, 0.3, torso);
      sp.rotation.z = -a * 0.8; sp.rotation.x = -0.3;
    }
    const head = joint(torso, 0, 0.6, 1.8);
    mesh(G.sphere, body, 0, 0, 0, 1.1, 0.95, 1.0, head);
    for (const s of [-1, 1]) {
      const h = mesh(G.cone, toon(0xfff2cc), s * 0.6, 0.8, -0.2, 0.2, 0.9, 0.2, head); h.rotation.z = -s * 0.5;
      mesh(G.sphere, glow, s * 0.38, 0.25, 0.8, 0.2, 0.22, 0.12, head);
      mesh(G.box, toon(0x111111), s * 0.38, 0.5, 0.82, 0.45, 0.08, 0.08, head).rotation.z = s * 0.35;
    }
    const jaw = mesh(G.box, toon(0xb0501a), 0, -0.45, 0.6, 1.2, 0.3, 0.8, head);
    for (let i = 0; i < 4; i++) mesh(G.cone, toon(0xffffff), -0.45 + i * 0.3, -0.25, 0.9, 0.08, 0.2, 0.08, head).rotation.x = Math.PI;
    root.parts.head = head; root.parts.jaw = jaw; root.parts.torso = torso;
    for (const [x, z] of [[-1.3, 1], [1.3, 1], [-1.3, -1], [1.3, -1]]) {
      const leg = joint(root, x, 1.2, z);
      mesh(G.cyl, body, 0, -0.6, 0, 0.5, 1.2, 0.5, leg);
      mesh(G.sphere, shell, 0, -1.15, 0.1, 0.6, 0.3, 0.7, leg);
      root.parts['leg' + (x < 0 ? 'L' : 'R') + (z > 0 ? 'F' : 'B')] = leg;
    }
    const tail = mesh(G.cone, body, 0, 1.6, -2.4, 0.5, 1.6, 0.5, root); tail.rotation.x = -1.9;
    root.radius = 2.4; root.height = 4.4;
  } else if (type === 'vortex') {
    const metal = toon(0x9aa3b5), dark = toon(0x3a3f4f), core = toon(0xff3df2, { emissive: 0xaa00aa });
    const hull = joint(root, 0, 0, 0);
    mesh(G.cyl, metal, 0, 0, 0, 2.6, 0.7, 2.6, hull);
    mesh(G.torus, dark, 0, 0, 0, 2.6, 2.6, 1.6, hull).rotation.x = Math.PI / 2;
    mesh(G.hemi, toon(0x88e8ff, { transparent: true, opacity: 0.55 }), 0, 0.3, 0, 1.6, 1.3, 1.6, hull);
    const c = mesh(G.sphere, core, 0, 0.9, 0, 0.7, 0.7, 0.7, hull);
    mesh(G.cone, dark, 0, -0.9, 0, 1.2, 1.2, 1.2, hull).rotation.x = Math.PI;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      mesh(G.sphere, toon(0x38e8ff, { emissive: 0x0088aa }), Math.cos(a) * 2.4, 0.05, Math.sin(a) * 2.4, 0.22, 0.22, 0.22, hull);
    }
    for (const s of [-1, 1]) {
      const arm = joint(hull, s * 2.6, -0.2, 0);
      mesh(G.cyl, dark, s * 0.4, -0.4, 0, 0.18, 1.2, 0.18, arm).rotation.z = s * 0.6;
      const claw = mesh(G.cone, metal, s * 0.9, -1.1, 0, 0.35, 0.8, 0.35, arm); claw.rotation.x = Math.PI;
      root.parts['arm' + (s < 0 ? 'L' : 'R')] = arm;
    }
    // menacing face panel
    for (const s of [-1, 1]) mesh(G.box, toon(0xff2a2a, { emissive: 0xaa0000 }), s * 0.6, 0.1, 2.55, 0.5, 0.15, 0.1, hull).rotation.z = s * 0.3;
    root.parts.hull = hull; root.parts.core = c;
    root.radius = 2.8; root.height = 2.4;
  }
  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return root;
}

// ---------------------------------------------------------------- items
const starShape = (() => {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 0.22 : 0.5;
    if (i === 0) s.moveTo(Math.cos(a) * r, Math.sin(a) * r); else s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  s.closePath();
  return s;
})();
export const STAR_GEO = new THREE.ExtrudeGeometry(starShape, { depth: 0.18, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 1 });
STAR_GEO.center();
const heartShape = (() => {
  const s = new THREE.Shape();
  s.moveTo(0, -0.45);
  s.bezierCurveTo(-0.6, -0.05, -0.5, 0.45, 0, 0.2);
  s.bezierCurveTo(0.5, 0.45, 0.6, -0.05, 0, -0.45);
  return s;
})();
const HEART_GEO = new THREE.ExtrudeGeometry(heartShape, { depth: 0.2, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 1 });
HEART_GEO.center();

export function buildItem(kind) {
  const g = new THREE.Group();
  switch (kind) {
    case 'mushroom': case 'oneup': {
      const col = kind === 'oneup' ? 0x2ec44a : 0xe53935;
      mesh(G.cyl, toon(0xfbe9c8), 0, 0.25, 0, 0.25, 0.4, 0.25, g);
      mesh(G.hemi, toon(col), 0, 0.4, 0, 0.45, 0.4, 0.45, g);
      for (let i = 0; i < 4; i++) mesh(G.sphereLo, toon(0xffffff), Math.cos(i * 1.57) * 0.3, 0.62, Math.sin(i * 1.57) * 0.3, 0.12, 0.07, 0.12, g);
      for (const s of [-1, 1]) mesh(G.sphere, toon(0x111111), s * 0.09, 0.3, 0.24, 0.04, 0.08, 0.03, g);
      break;
    }
    case 'fire': {
      mesh(G.cyl, toon(0x2e9e3a), 0, 0.2, 0, 0.06, 0.4, 0.06, g);
      for (let i = 0; i < 6; i++) mesh(G.sphereLo, toon(i % 2 ? 0xff5a1a : 0xffd23f), Math.cos(i * 1.05) * 0.22, 0.55, Math.sin(i * 1.05) * 0.06 + 0.02, 0.16, 0.16, 0.08, g);
      mesh(G.sphere, toon(0xffffff), 0, 0.55, 0.06, 0.12, 0.12, 0.06, g);
      break;
    }
    case 'star': {
      const s = mesh(STAR_GEO, toon(0xffd23f, { emissive: 0x996600 }), 0, 0.5, 0, 1.2, 1.2, 1.2, g);
      void s;
      break;
    }
    case 'shield': {
      mesh(G.sphere, toon(0x38bdf8, { transparent: true, opacity: 0.55, emissive: 0x0a4a7a }), 0, 0.5, 0, 0.45, 0.45, 0.45, g);
      mesh(G.torus, toon(0xffffff), 0, 0.5, 0, 0.36, 0.36, 0.36, g);
      break;
    }
    case 'speed': {
      mesh(G.sphere, toon(0xe53935), 0, 0.35, 0.05, 0.22, 0.18, 0.4, g);
      mesh(G.box, toon(0xffffff), 0, 0.38, 0.1, 0.46, 0.06, 0.12, g);
      mesh(G.cone, toon(0xffd23f), 0, 0.6, -0.2, 0.12, 0.3, 0.12, g).rotation.x = -1.2;
      break;
    }
    case 'heart': {
      mesh(HEART_GEO, toon(0xff3d6e, { emissive: 0x550018 }), 0, 0.5, 0, 0.9, 0.9, 0.9, g);
      break;
    }
    case 'rings10': {
      mesh(G.torus, toon(0xffd23f, { emissive: 0x664400 }), 0, 0.5, 0, 0.32, 0.32, 0.6, g);
      mesh(G.torus, toon(0xffd23f, { emissive: 0x664400 }), 0.15, 0.55, 0.05, 0.25, 0.25, 0.5, g);
      break;
    }
    default:
      mesh(G.sphere, toon(0xffffff), 0, 0.5, 0, 0.3, 0.3, 0.3, g);
  }
  return g;
}

export function buildMedal() {
  const g = new THREE.Group();
  const disc = mesh(G.cyl, toon(0xffb300, { emissive: 0x553300 }), 0, 0, 0, 0.7, 0.14, 0.7, g);
  disc.rotation.x = Math.PI / 2;
  mesh(G.torus, toon(0xfff2a8, { emissive: 0x665500 }), 0, 0, 0, 0.7, 0.7, 0.5, g);
  mesh(STAR_GEO, toon(0xffffff, { emissive: 0x666666 }), 0, 0, 0.06, 0.8, 0.8, 0.8, g);
  return g;
}

export function buildRingGeo() {
  return new THREE.TorusGeometry(0.42, 0.09, 6, 16);
}
export function buildCoinGeo() {
  const g = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 14);
  g.rotateX(Math.PI / 2);
  return g;
}

export { mesh, joint, lambert };
