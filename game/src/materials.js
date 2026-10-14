// Shared materials and procedural canvas textures (no external image files).
import * as THREE from 'three';

let gradient = null;
function gradientMap() {
  if (gradient) return gradient;
  const data = new Uint8Array([90, 90, 90, 255, 170, 170, 170, 255, 255, 255, 255, 255]);
  gradient = new THREE.DataTexture(data, 3, 1, THREE.RGBAFormat);
  gradient.minFilter = gradient.magFilter = THREE.NearestFilter;
  gradient.needsUpdate = true;
  return gradient;
}

const cache = new Map();
// Toon material for characters/props.
export function toon(color, opts = {}) {
  const key = 't' + color + JSON.stringify(opts);
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.MeshToonMaterial({ color, gradientMap: gradientMap(), ...opts });
  cache.set(key, m);
  return m;
}
export function lambert(color, opts = {}) {
  const key = 'l' + color + JSON.stringify(opts);
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.MeshLambertMaterial({ color, ...opts });
  cache.set(key, m);
  return m;
}
export function basic(color, opts = {}) {
  const key = 'b' + color + JSON.stringify(opts);
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.MeshBasicMaterial({ color, ...opts });
  cache.set(key, m);
  return m;
}

export function canvasTex(size, draw, repeat = true) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 2;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

function noise(g, s, base, vary, n = 400, r = 3) {
  g.fillStyle = base; g.fillRect(0, 0, s, s);
  for (let i = 0; i < n; i++) {
    g.fillStyle = vary[i % vary.length];
    g.globalAlpha = 0.35;
    g.fillRect(Math.random() * s, Math.random() * s, r, r);
  }
  g.globalAlpha = 1;
}

const texCache = {};
export function tex(name) {
  if (texCache[name]) return texCache[name];
  let t;
  switch (name) {
    case 'grass': t = canvasTex(64, (g, s) => { noise(g, s, '#5cc542', ['#4fb236', '#74d957', '#3f9c2c'], 300, 3); }); break;
    case 'grassDark': t = canvasTex(64, (g, s) => { noise(g, s, '#2f7d32', ['#276b2a', '#3a9440', '#1f5c22'], 300, 3); }); break;
    case 'checker': t = canvasTex(64, (g, s) => {
      for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.fillStyle = (x + y) % 2 ? '#a0632e' : '#c98443'; g.fillRect(x * 16, y * 16, 16, 16); }
      g.fillStyle = 'rgba(0,0,0,0.12)'; for (let y = 0; y < 4; y++) g.fillRect(0, y * 16 + 14, s, 2);
    }); break;
    case 'dirt': t = canvasTex(64, (g, s) => { noise(g, s, '#b0743a', ['#9a6230', '#c4874a', '#87552a'], 400, 4); }); break;
    case 'brickWall': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#c25b2a'; g.fillRect(0, 0, s, s); g.fillStyle = '#7a3115';
      for (let y = 0; y < 4; y++) { g.fillRect(0, y * 16, s, 2); const o = y % 2 ? 0 : 16; for (let x = 0; x < 3; x++) g.fillRect(o + x * 32, y * 16, 2, 16); }
    }); break;
    case 'stone': t = canvasTex(64, (g, s) => {
      noise(g, s, '#6b6b78', ['#5a5a66', '#7c7c8a', '#4d4d58'], 350, 4);
      g.strokeStyle = '#3e3e48'; g.lineWidth = 2;
      for (let y = 0; y < 2; y++) { g.strokeRect(1 + (y % 2) * 16, y * 32 + 1, 30, 30); g.strokeRect(33 + (y % 2) * 16 - 32 * (y % 2), y * 32 + 1, 30, 30); }
    }); break;
    case 'stoneDark': t = canvasTex(64, (g, s) => {
      noise(g, s, '#3c3440', ['#2e2832', '#4a404e', '#5a2a2a'], 350, 4);
      g.strokeStyle = '#1e1a20'; g.lineWidth = 2;
      for (let y = 0; y < 4; y++) { g.beginPath(); g.moveTo(0, y * 16); g.lineTo(s, y * 16); g.stroke(); const o = y % 2 ? 8 : 24; g.beginPath(); g.moveTo(o, y * 16); g.lineTo(o, y * 16 + 16); g.moveTo(o + 32, y * 16); g.lineTo(o + 32, y * 16 + 16); g.stroke(); }
    }); break;
    case 'jungleTop': t = canvasTex(64, (g, s) => { noise(g, s, '#3f8f2f', ['#2f7a22', '#5aa83a', '#6b4a24'], 350, 4); }); break;
    case 'ruin': t = canvasTex(64, (g, s) => {
      noise(g, s, '#8a8a6a', ['#77775a', '#9a9a78', '#4f7a3a'], 350, 4);
      g.strokeStyle = '#55553f'; g.lineWidth = 2; for (let y = 0; y < 4; y++) { g.beginPath(); g.moveTo(0, y * 16); g.lineTo(s, y * 16); g.stroke(); }
    }); break;
    case 'crystal': t = canvasTex(64, (g, s) => {
      const gr = g.createLinearGradient(0, 0, s, s); gr.addColorStop(0, '#5b2a9e'); gr.addColorStop(1, '#2a1a5e');
      g.fillStyle = gr; g.fillRect(0, 0, s, s);
      g.strokeStyle = '#a77bff'; g.lineWidth = 2; g.strokeRect(2, 2, s - 4, s - 4);
      g.strokeStyle = 'rgba(160,220,255,0.6)'; g.beginPath(); g.moveTo(0, s / 2); g.lineTo(s, s / 2); g.moveTo(s / 2, 0); g.lineTo(s / 2, s); g.stroke();
    }); break;
    case 'neonTop': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#1b1240'; g.fillRect(0, 0, s, s);
      g.strokeStyle = '#38e8ff'; g.lineWidth = 3; g.strokeRect(1.5, 1.5, s - 3, s - 3);
      g.strokeStyle = 'rgba(255,80,220,0.5)'; g.lineWidth = 1; g.strokeRect(10, 10, s - 20, s - 20);
    }); break;
    case 'lava': t = canvasTex(128, (g, s) => {
      g.fillStyle = '#d43b0b'; g.fillRect(0, 0, s, s);
      for (let i = 0; i < 60; i++) {
        const x = Math.random() * s, y = Math.random() * s, r = 6 + Math.random() * 18;
        const gr = g.createRadialGradient(x, y, 0, x, y, r);
        gr.addColorStop(0, 'rgba(255,230,90,0.9)'); gr.addColorStop(1, 'rgba(255,120,0,0)');
        g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
      }
    }); break;
    case 'water': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#2a7fd4'; g.fillRect(0, 0, s, s);
      g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 2;
      for (let i = 0; i < 6; i++) { g.beginPath(); const y = i * 11 + 4; g.moveTo(0, y); g.bezierCurveTo(16, y - 4, 32, y + 4, 64, y); g.stroke(); }
    }); break;
    case 'qblock': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#f5b324'; g.fillRect(0, 0, s, s);
      g.fillStyle = '#c47a10'; g.fillRect(0, s - 5, s, 5); g.fillRect(s - 5, 0, 5, s);
      g.fillStyle = '#ffe08a'; g.fillRect(0, 0, s, 4); g.fillRect(0, 0, 4, s);
      g.fillStyle = '#7a4a08'; [[8, 8], [52, 8], [8, 52], [52, 52]].forEach(([x, y]) => g.fillRect(x, y, 4, 4));
      g.font = 'bold 44px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillStyle = '#7a4a08'; g.fillText('?', 34, 36); g.fillStyle = '#fff'; g.fillText('?', 32, 33);
    }, false); break;
    case 'usedblock': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#9a6a3a'; g.fillRect(0, 0, s, s); g.strokeStyle = '#5a3a1a'; g.lineWidth = 4; g.strokeRect(2, 2, s - 4, s - 4);
      g.fillStyle = '#5a3a1a'; [[8, 8], [52, 8], [8, 52], [52, 52]].forEach(([x, y]) => g.fillRect(x, y, 4, 4));
    }, false); break;
    case 'brick': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#c8602a'; g.fillRect(0, 0, s, s); g.fillStyle = '#3a1a0a';
      for (let y = 0; y < 4; y++) { g.fillRect(0, y * 16, s, 2); const o = y % 2 ? 0 : 16; g.fillRect(o, y * 16, 2, 16); g.fillRect(o + 32, y * 16, 2, 16); }
      g.fillStyle = 'rgba(255,200,150,0.35)'; for (let y = 0; y < 4; y++) g.fillRect(0, y * 16 + 2, s, 2);
    }, false); break;
    case 'monitor': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#d8dde6'; g.fillRect(0, 0, s, s);
      g.fillStyle = '#20232b'; g.fillRect(8, 8, 48, 40);
      g.fillStyle = '#5a6070'; g.fillRect(0, 54, s, 10);
    }, false); break;
    case 'boostpad': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#20262e'; g.fillRect(0, 0, s, s);
      g.fillStyle = '#ffdd33';
      for (let i = 0; i < 2; i++) { g.beginPath(); const y = 10 + i * 26; g.moveTo(10, y + 18); g.lineTo(32, y); g.lineTo(54, y + 18); g.lineTo(46, y + 18); g.lineTo(32, y + 8); g.lineTo(18, y + 18); g.fill(); }
    }, false); break;
    case 'crusherFace': t = canvasTex(64, (g, s) => {
      noise(g, s, '#8a94a6', ['#7a8496', '#9aa4b6'], 200, 4);
      g.fillStyle = '#fff'; g.fillRect(12, 18, 14, 12); g.fillRect(38, 18, 14, 12);
      g.fillStyle = '#000'; g.fillRect(18, 22, 6, 6); g.fillRect(40, 22, 6, 6);
      g.fillRect(10, 14, 18, 3); g.fillRect(36, 14, 18, 3);
      g.fillStyle = '#fff'; g.fillRect(16, 40, 32, 10); g.fillStyle = '#000'; for (let i = 0; i < 5; i++) g.fillRect(18 + i * 6, 40, 2, 10);
    }, false); break;
    case 'sign': t = canvasTex(128, (g, s) => {
      g.fillStyle = '#ffffff'; g.fillRect(0, 0, s, s);
      g.fillStyle = '#1f6fe0'; g.beginPath(); g.arc(64, 64, 52, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ffd23f'; g.font = 'bold 54px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('GO!', 64, 68);
    }, false); break;
    case 'signBack': t = canvasTex(128, (g, s) => {
      g.fillStyle = '#ffffff'; g.fillRect(0, 0, s, s);
      g.fillStyle = '#e53935'; g.beginPath(); g.arc(64, 64, 52, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#fff'; g.font = 'bold 40px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('META', 64, 68);
    }, false); break;
    case 'emblemR': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#ffffff'; g.beginPath(); g.arc(32, 32, 30, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#e8541c'; g.font = 'bold 40px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('R', 32, 35);
    }, false); break;
    case 'flag': t = canvasTex(64, (g, s) => {
      g.fillStyle = '#2ec44a'; g.fillRect(0, 0, s, s); g.fillStyle = '#fff'; g.beginPath(); g.arc(32, 32, 16, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ffcf33'; g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5; const r = i % 2 ? 6 : 13; g.lineTo(32 + Math.cos(a) * r, 32 + Math.sin(a) * r); } g.fill();
    }, false); break;
    default: t = canvasTex(8, (g, s) => { g.fillStyle = '#ff00ff'; g.fillRect(0, 0, s, s); });
  }
  texCache[name] = t;
  return t;
}

// Theme materials for terrain (top surface + sides). Textures are tiled in world units.
const themeCache = {};
export function terrainMaterials(style) {
  if (themeCache[style]) return themeCache[style];
  const defs = {
    grass: ['grass', 'checker'],
    grassDirt: ['grass', 'dirt'],
    mario: ['grass', 'dirt'],
    brick: ['brick', 'brick'],
    jungle: ['jungleTop', 'ruin'],
    ruin: ['ruin', 'ruin'],
    stone: ['stone', 'stone'],
    castle: ['stoneDark', 'stoneDark'],
    crystal: ['neonTop', 'crystal'],
    wood: ['dirt', 'dirt'],
  };
  const [top, side] = defs[style] || defs.grass;
  const res = {
    top: new THREE.MeshLambertMaterial({ map: tex(top) }),
    side: new THREE.MeshLambertMaterial({ map: tex(side) }),
  };
  if (style === 'crystal') { res.top.emissive = new THREE.Color('#120a30'); res.side.emissive = new THREE.Color('#1a0a3a'); }
  themeCache[style] = res;
  return res;
}

export function disposeCaches() {
  // terrain/texture caches are small and reused between levels; nothing to free.
}
