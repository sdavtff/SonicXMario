// Procedural audio: every sound effect and every song is synthesized at runtime with
// WebAudio (no audio files, no licensed music). All melodies are original.

const NOTE_IDX = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
function noteFreq(n) {
  const m = /^([A-G])([#b]?)(-?\d)$/.exec(n);
  if (!m) return null;
  let semi = NOTE_IDX[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
  const midi = (parseInt(m[3], 10) + 1) * 12 + semi;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

// "C5:2 r:2 E5:4 | ..." -> events; length in 16th notes.
function parseSeq(str) {
  const ev = [];
  let step = 0;
  for (const tok of str.replace(/\|/g, ' ').split(/\s+/)) {
    if (!tok) continue;
    const [n, l] = tok.split(':');
    const len = parseFloat(l || '1');
    if (n !== 'r') ev.push({ step, f: noteFreq(n), len });
    step += len;
  }
  return { ev, length: step };
}
function parseDrums(str) {
  const s = str.replace(/[\s|]/g, '');
  const ev = [];
  for (let i = 0; i < s.length; i++) if (s[i] !== '.') ev.push({ step: i, d: s[i], len: 1 });
  return { ev, length: s.length };
}
// Arpeggio helper: chords like "C4 E4 G4" -> 16 sixteenths each
function arp(chords, stepsEach = 16, pattern = [0, 1, 2, 1]) {
  let out = '';
  for (const c of chords) {
    const notes = c.split(' ');
    for (let i = 0; i < stepsEach; i++) out += notes[pattern[i % pattern.length] % notes.length] + ':1 ';
  }
  return out;
}

const SONGS = {
  menu: {
    bpm: 120,
    tracks: [
      { inst: 'lead', vol: 0.16, seq: 'G4:2 B4:2 D5:2 G5:2 F#5:2 D5:2 E5:4 | C5:2 E5:2 G5:2 E5:2 D5:8 | G4:2 B4:2 D5:2 G5:2 A5:2 B5:2 A5:4 | G5:4 D5:4 G5:8' },
      { inst: 'bass', vol: 0.22, seq: 'G2:4 D3:4 G2:4 D3:4 | C3:4 G2:4 D3:4 A2:4 | G2:4 D3:4 E2:4 B2:4 | C3:4 D3:4 G2:8' },
      { inst: 'arp', vol: 0.05, seq: arp(['G4 B4 D5', 'C5 E5 G5', 'G4 B4 D5', 'C5 D5 G5']) },
      { inst: 'drums', vol: 0.5, seq: 'k...h...s...h... k...h...s...h.h.' },
    ],
  },
  green: {
    bpm: 150,
    tracks: [
      { inst: 'lead', vol: 0.15, seq: 'E5:2 G5:2 C6:4 B5:2 G5:2 A5:4 | G5:2 E5:2 C5:2 D5:2 E5:6 r:2 | F5:2 A5:2 C6:4 B5:2 A5:2 G5:4 | E5:2 G5:2 D5:2 E5:2 C5:6 r:2 | E5:2 G5:2 C6:4 D6:2 C6:2 B5:4 | A5:2 B5:2 C6:2 A5:2 G5:8 | F5:2 E5:2 D5:2 F5:2 E5:2 D5:2 C5:4 | D5:2 E5:2 F5:2 G5:2 C5:8' },
      { inst: 'bass', vol: 0.24, seq: 'C3:4 C3:2 G2:2 C3:4 G2:4 | A2:4 A2:2 E2:2 A2:4 E2:4 | F2:4 F2:2 C3:2 F2:4 C3:4 | G2:4 G2:2 D3:2 G2:4 B2:4 | C3:4 C3:2 G2:2 C3:4 G2:4 | F2:4 F2:2 C3:2 G2:4 D3:4 | D2:4 D2:2 A2:2 G2:4 D3:4 | G2:4 F2:4 E2:4 D2:4' },
      { inst: 'arp', vol: 0.045, seq: arp(['C5 E5 G5', 'A4 C5 E5', 'F4 A4 C5', 'G4 B4 D5', 'C5 E5 G5', 'F4 A4 C5', 'D5 F5 A5', 'G4 B4 D5'], 16, [0, 1, 2, 1, 2, 1]) },
      { inst: 'drums', vol: 0.55, seq: 'k.h.s.h.k.k.s.h. k.h.s.h.k.k.s.hs' },
    ],
  },
  mushroom: {
    bpm: 132,
    tracks: [
      { inst: 'lead', vol: 0.15, seq: 'C5:2 r:1 C5:1 F5:2 A5:2 C6:2 A5:2 F5:4 | G5:2 r:1 G5:1 Bb5:2 G5:2 E5:4 C5:4 | A4:2 C5:2 F5:2 A5:2 G5:2 F5:2 D5:4 | E5:2 G5:2 E5:2 C5:2 F5:8' },
      { inst: 'bass', vol: 0.24, seq: 'F2:2 r:2 C3:2 r:2 F2:2 r:2 C3:2 r:2 | C2:2 r:2 G2:2 r:2 C2:2 r:2 G2:2 r:2 | D2:2 r:2 A2:2 r:2 Bb2:2 r:2 F2:2 r:2 | C2:2 r:2 G2:2 r:2 F2:2 r:2 C3:2 r:2' },
      { inst: 'pluck', vol: 0.06, seq: 'r:2 A4:2 r:2 A4:2 r:2 A4:2 r:2 A4:2 | r:2 G4:2 r:2 G4:2 r:2 Bb4:2 r:2 Bb4:2 | r:2 F4:2 r:2 F4:2 r:2 D4:2 r:2 D4:2 | r:2 E4:2 r:2 E4:2 r:2 A4:2 r:2 A4:2' },
      { inst: 'drums', vol: 0.5, seq: 'k...s.k.k...s... k...s.k.k...s.hh' },
    ],
  },
  jungle: {
    bpm: 112,
    tracks: [
      { inst: 'flute', vol: 0.16, seq: 'A4:3 C5:1 E5:4 D5:2 C5:2 B4:4 | A4:3 G4:1 A4:4 E4:8 | F4:3 A4:1 C5:4 B4:2 A4:2 G4:4 | E5:6 D5:2 C5:4 B4:4' },
      { inst: 'bass', vol: 0.25, seq: 'A2:6 A2:2 E2:4 G2:4 | A2:6 A2:2 E2:8 | F2:6 F2:2 C3:4 G2:4 | E2:6 E2:2 E2:4 G#2:4' },
      { inst: 'pluck', vol: 0.05, seq: arp(['A3 C4 E4', 'A3 C4 E4', 'F3 A3 C4', 'E3 G#3 B3'], 16, [0, 2, 1, 2]) },
      { inst: 'drums', vol: 0.55, seq: 'k..tk.t.k..tk.ts k..tk.t.k.ttk.ts' },
    ],
  },
  lava: {
    bpm: 140,
    tracks: [
      { inst: 'lead', vol: 0.14, seq: 'D5:2 D5:2 F5:2 D5:2 G5:2 F5:2 E5:2 C5:2 | D5:4 A4:4 D5:8 | Bb4:2 Bb4:2 D5:2 Bb4:2 C5:2 D5:2 E5:2 G5:2 | A5:4 G5:2 E5:2 A4:8' },
      { inst: 'bass', vol: 0.26, seq: 'D2:2 D3:2 D2:2 D3:2 D2:2 D3:2 D2:2 D3:2 | D2:2 D3:2 D2:2 D3:2 C2:2 C3:2 C2:2 C3:2 | Bb1:2 Bb2:2 Bb1:2 Bb2:2 Bb1:2 Bb2:2 Bb1:2 Bb2:2 | A1:2 A2:2 A1:2 A2:2 A1:2 A2:2 C#2:2 C#3:2' },
      { inst: 'organ', vol: 0.05, seq: 'D4:16 C4:16 Bb3:16 A3:16' },
      { inst: 'drums', vol: 0.6, seq: 'k.h.s.hkk.h.s.h. k.h.s.hkk.hss.ss' },
    ],
  },
  final: {
    bpm: 156,
    tracks: [
      { inst: 'lead', vol: 0.14, seq: 'E5:2 B4:2 E5:2 G5:2 F#5:4 D5:4 | E5:2 B4:2 E5:2 G5:2 A5:4 B5:4 | C6:2 B5:2 A5:2 G5:2 F#5:4 D5:4 | E5:12 r:4' },
      { inst: 'bass', vol: 0.25, seq: 'E2:2 E3:2 E2:2 E3:2 D2:2 D3:2 D2:2 D3:2 | C2:2 C3:2 C2:2 C3:2 D2:2 D3:2 D2:2 D3:2 | A1:2 A2:2 A1:2 A2:2 B1:2 B2:2 B1:2 B2:2 | E2:2 E3:2 E2:2 E3:2 E2:2 E3:2 E2:2 E3:2' },
      { inst: 'arp', vol: 0.05, seq: arp(['E4 G4 B4 E5', 'C4 E4 G4 C5', 'A3 C4 E4 A4', 'B3 D#4 F#4 B4'], 16, [0, 1, 2, 3]) },
      { inst: 'drums', vol: 0.6, seq: 'k.hsk.hsk.hsk.hs k.hsk.hskkhsk.ss' },
    ],
  },
  boss: {
    bpm: 168,
    tracks: [
      { inst: 'lead', vol: 0.14, seq: 'C5:1 r:1 C5:1 r:1 Eb5:2 C5:2 G5:2 F5:2 Eb5:2 D5:2 | C5:1 r:1 C5:1 r:1 Eb5:2 C5:2 Ab5:4 G5:4 | Bb4:1 r:1 Bb4:1 r:1 D5:2 Bb4:2 F5:2 Eb5:2 D5:2 C5:2 | B4:4 D5:4 G5:8' },
      { inst: 'bass', vol: 0.27, seq: 'C2:1 C2:1 C3:1 C2:1 C2:1 C2:1 C3:1 C2:1 C2:1 C2:1 C3:1 C2:1 C2:1 C2:1 C3:1 C2:1 | Ab1:2 Ab2:2 Ab1:2 Ab2:2 Ab1:2 Ab2:2 Ab1:2 Ab2:2 | Bb1:2 Bb2:2 Bb1:2 Bb2:2 Bb1:2 Bb2:2 Bb1:2 Bb2:2 | G1:2 G2:2 G1:2 G2:2 G1:2 G2:2 B1:2 B2:2' },
      { inst: 'drums', vol: 0.65, seq: 'k.hsk.hsk.hsk.hs k.hsk.hskkhskshs' },
    ],
  },
  ending: {
    bpm: 100,
    tracks: [
      { inst: 'flute', vol: 0.16, seq: 'C5:4 E5:4 G5:4 E5:4 | F5:4 A5:4 G5:8 | E5:4 D5:4 C5:4 A4:4 | B4:4 D5:4 C5:8' },
      { inst: 'bass', vol: 0.22, seq: 'C3:8 A2:8 | F2:8 G2:8 | C3:8 A2:8 | G2:8 C3:8' },
      { inst: 'arp', vol: 0.045, seq: arp(['C5 E5 G5', 'F4 A4 C5', 'C5 E5 G5', 'G4 B4 D5']) },
    ],
  },
};

const JINGLES = {
  victory: { bpm: 160, tracks: [{ inst: 'lead', vol: 0.18, seq: 'C5:2 E5:2 G5:2 C6:4 G5:2 C6:8 r:4' }, { inst: 'bass', vol: 0.25, seq: 'C3:2 G2:2 C3:2 E3:4 G2:2 C3:8 r:4' }] },
  gameover: { bpm: 90, tracks: [{ inst: 'lead', vol: 0.18, seq: 'G4:4 E4:4 C4:4 Eb4:2 D4:2 C4:8' }, { inst: 'bass', vol: 0.25, seq: 'C3:8 G2:8 C2:8' }] },
  death: { bpm: 150, tracks: [{ inst: 'lead', vol: 0.18, seq: 'B4:1 F5:2 r:1 F5:1 F5:2 E5:2 D5:2 C5:4' }] },
  bossclear: { bpm: 140, tracks: [{ inst: 'lead', vol: 0.18, seq: 'G4:2 C5:2 E5:2 G5:4 E5:2 G5:2 C6:10' }, { inst: 'bass', vol: 0.25, seq: 'C3:4 E3:4 G3:4 C3:10' }] },
};

class AudioSys {
  constructor() {
    this.ctx = null;
    this.musicVol = 0.6; this.sfxVol = 0.8;
    this.current = null; this.currentName = null;
    this.timer = null;
    this.noiseBuf = null;
    this.lastPlay = {};
  }

  // Must be called from a user gesture on some browsers.
  unlock() {
    try {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        this.ctx = new AC({ latencyHint: 'interactive' });
        this.master = this.ctx.createGain();
        this.master.gain.value = 0.9;
        const comp = this.ctx.createDynamicsCompressor();
        this.master.connect(comp); comp.connect(this.ctx.destination);
        this.musicGain = this.ctx.createGain(); this.musicGain.connect(this.master);
        this.sfxGain = this.ctx.createGain(); this.sfxGain.connect(this.master);
        this.setVolumes(this.musicVol, this.sfxVol);
        const len = this.ctx.sampleRate;
        this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
        const d = this.noiseBuf.getChannelData(0);
        for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
        if (this.pendingMusic) { const p = this.pendingMusic; this.pendingMusic = null; this.playMusic(p); }
      }
      if (this.ctx.state === 'suspended') this.ctx.resume();
    } catch (e) { console.warn('Audio indisponível', e); }
  }

  suspend() { try { if (this.ctx) this.ctx.suspend(); } catch (e) { /* ignore */ } }
  resume() { try { if (this.ctx) this.ctx.resume(); } catch (e) { /* ignore */ } }

  setVolumes(music, sfx) {
    this.musicVol = music; this.sfxVol = sfx;
    if (this.musicGain) {
      this.musicGain.gain.value = music * 0.9;
      this.sfxGain.gain.value = sfx * 0.9;
    }
  }

  // ---------- low level voices ----------
  tone(type, f0, f1, dur, vol, when = 0, dest = null, attack = 0.005) {
    const c = this.ctx; const t = c.currentTime + when;
    const o = c.createOscillator(); const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 && f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest || this.sfxGain);
    o.start(t); o.stop(t + dur + 0.02);
  }

  noise(dur, vol, filterType, f0, f1, when = 0, dest = null, q = 1) {
    const c = this.ctx; const t = c.currentTime + when;
    const s = c.createBufferSource(); s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter(); f.type = filterType; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(dest || this.sfxGain);
    s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.02);
  }

  // ---------- sound effects ----------
  sfx(name) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    // anti-spam: identical sounds closer than 30ms are merged
    if (this.lastPlay[name] && now - this.lastPlay[name] < 0.03) return;
    this.lastPlay[name] = now;
    const T = (...a) => this.tone(...a);
    const N = (...a) => this.noise(...a);
    switch (name) {
      case 'jump': T('square', 320, 760, 0.16, 0.14); break;
      case 'jump2': T('square', 520, 1100, 0.16, 0.12); break;
      case 'ring': T('square', 1568, 0, 0.08, 0.09); T('square', 2093, 0, 0.22, 0.09, 0.06); T('sine', 3136, 0, 0.2, 0.05, 0.06); break;
      case 'coin': T('square', 988, 0, 0.07, 0.1); T('square', 1319, 0, 0.3, 0.1, 0.07); break;
      case 'spring': T('triangle', 180, 1200, 0.32, 0.3); T('square', 360, 1400, 0.25, 0.06); break;
      case 'boostpad': N(0.35, 0.3, 'bandpass', 400, 4000, 0, null, 2); T('sawtooth', 200, 800, 0.3, 0.08); break;
      case 'boost': N(0.5, 0.35, 'bandpass', 300, 2500, 0, null, 1.5); break;
      case 'spin': N(0.3, 0.25, 'bandpass', 800, 3000, 0, null, 4); T('square', 200, 500, 0.2, 0.06); break;
      case 'homing': N(0.18, 0.3, 'highpass', 1200, 6000); T('square', 700, 1600, 0.12, 0.08); break;
      case 'stomp': T('square', 420, 90, 0.14, 0.2); N(0.08, 0.2, 'lowpass', 900); break;
      case 'kill': T('square', 600, 120, 0.18, 0.15); N(0.25, 0.3, 'lowpass', 1500, 200); break;
      case 'hurt': T('sawtooth', 500, 80, 0.4, 0.2); N(0.3, 0.25, 'bandpass', 1200, 300); break;
      case 'ringloss': for (let i = 0; i < 6; i++) T('square', 1500 - i * 120, 0, 0.08, 0.06, i * 0.035); break;
      case 'break': N(0.35, 0.45, 'lowpass', 2500, 200); T('square', 160, 60, 0.2, 0.12); break;
      case 'bump': T('square', 140, 90, 0.1, 0.2); break;
      case 'itemappear': for (let i = 0; i < 6; i++) T('square', 400 + i * 140, 0, 0.05, 0.08, i * 0.045); break;
      case 'powerup': [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => T('square', f, 0, 0.09, 0.1, i * 0.06)); break;
      case 'oneup': [659, 784, 1319, 1047, 1175, 1568].forEach((f, i) => T('square', f, 0, 0.1, 0.11, i * 0.09)); break;
      case 'shield': T('sine', 300, 900, 0.4, 0.2); T('triangle', 600, 1800, 0.4, 0.08); break;
      case 'checkpoint': T('triangle', 784, 0, 0.2, 0.2); T('triangle', 1175, 0, 0.5, 0.2, 0.15); T('sine', 2350, 0, 0.4, 0.05, 0.15); break;
      case 'medal': [784, 988, 1175, 1568, 1976].forEach((f, i) => T('triangle', f, 0, 0.25, 0.14, i * 0.07)); break;
      case 'fireball': T('square', 900, 300, 0.1, 0.1); N(0.12, 0.15, 'highpass', 2000); break;
      case 'explode': N(0.8, 0.6, 'lowpass', 1800, 60); T('sawtooth', 120, 30, 0.6, 0.2); break;
      case 'bosshit': T('square', 220, 70, 0.3, 0.25); N(0.3, 0.4, 'lowpass', 3000, 300); T('square', 880, 440, 0.15, 0.1, 0.05); break;
      case 'laser': T('sawtooth', 1400, 200, 0.5, 0.1); break;
      case 'slam': N(0.6, 0.6, 'lowpass', 600, 40); T('sine', 90, 30, 0.5, 0.5); break;
      case 'roar': T('sawtooth', 160, 70, 0.9, 0.18); N(0.9, 0.25, 'bandpass', 500, 200, 0, null, 3); break;
      case 'warp': T('square', 800, 120, 0.5, 0.1); T('square', 600, 90, 0.5, 0.06, 0.08); break;
      case 'portal': T('sine', 300, 1500, 0.5, 0.2); T('triangle', 1500, 300, 0.5, 0.08, 0.1); break;
      case 'grind': N(0.15, 0.08, 'bandpass', 3000, 2500, 0, null, 6); break;
      case 'splash': N(0.5, 0.35, 'lowpass', 2000, 200); break;
      case 'menu': T('square', 880, 0, 0.05, 0.08); break;
      case 'select': T('square', 660, 0, 0.06, 0.1); T('square', 1320, 0, 0.12, 0.1, 0.06); break;
      case 'back': T('square', 520, 260, 0.1, 0.1); break;
      case 'pause': T('square', 1047, 0, 0.06, 0.1); T('square', 784, 0, 0.06, 0.1, 0.07); T('square', 1047, 0, 0.1, 0.1, 0.14); break;
      case 'tick': T('square', 1200, 0, 0.03, 0.05); break;
      default: break;
    }
  }

  // ---------- music ----------
  playVoice(inst, f, t, dur, vol) {
    const c = this.ctx;
    const g = c.createGain();
    g.connect(this.musicGain);
    const o = c.createOscillator();
    let rel = 0.05;
    switch (inst) {
      case 'lead': o.type = 'square'; rel = 0.04; break;
      case 'bass': o.type = 'triangle'; vol *= 1.6; rel = 0.03; break;
      case 'arp': o.type = 'square'; rel = 0.02; dur = Math.min(dur, 0.09); break;
      case 'pluck': o.type = 'triangle'; dur = Math.min(dur, 0.15); vol *= 2; break;
      case 'flute': o.type = 'sine'; vol *= 1.8; rel = 0.12; break;
      case 'organ': o.type = 'sawtooth'; vol *= 0.6; rel = 0.2; break;
      default: o.type = 'square';
    }
    o.frequency.setValueAtTime(f, t);
    if (inst === 'flute' || inst === 'lead') {
      // gentle vibrato on long notes
      const lfo = c.createOscillator(); const lg = c.createGain();
      lfo.frequency.value = 5.5; lg.gain.value = f * 0.006;
      lfo.connect(lg); lg.connect(o.frequency); lfo.start(t + 0.12); lfo.stop(t + dur + rel + 0.05);
    }
    let node = o;
    if (inst === 'lead' || inst === 'organ') {
      const filt = c.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = inst === 'organ' ? 1200 : 3200;
      o.connect(filt); node = filt;
    }
    node.connect(g);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.008);
    g.gain.setValueAtTime(vol * 0.8, t + Math.max(0.01, dur - 0.01));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + rel);
    o.start(t); o.stop(t + dur + rel + 0.05);
  }

  playDrum(d, t, vol) {
    const c = this.ctx;
    if (d === 'k') {
      const o = c.createOscillator(); const g = c.createGain();
      o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.12);
      g.gain.setValueAtTime(vol * 0.9, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
      o.connect(g); g.connect(this.musicGain); o.start(t); o.stop(t + 0.16);
    } else if (d === 's') {
      this.noiseAt(t, 0.12, vol * 0.45, 'bandpass', 1800);
      const o = c.createOscillator(); const g = c.createGain(); o.type = 'triangle';
      o.frequency.setValueAtTime(220, t); g.gain.setValueAtTime(vol * 0.25, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
      o.connect(g); g.connect(this.musicGain); o.start(t); o.stop(t + 0.1);
    } else if (d === 'h') {
      this.noiseAt(t, 0.04, vol * 0.18, 'highpass', 7000);
    } else if (d === 't') {
      const o = c.createOscillator(); const g = c.createGain();
      o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(110, t + 0.15);
      g.gain.setValueAtTime(vol * 0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      o.connect(g); g.connect(this.musicGain); o.start(t); o.stop(t + 0.2);
    }
  }

  noiseAt(t, dur, vol, type, freq) {
    const c = this.ctx;
    const s = c.createBufferSource(); s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.musicGain);
    s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.01);
  }

  playMusic(name, loop = true) {
    if (!this.ctx) { this.pendingMusic = name; return; }
    if (this.currentName === name && this.current && loop) return;
    this.stopMusic();
    const song = SONGS[name] || JINGLES[name];
    if (!song) return;
    const stepDur = 60 / song.bpm / 4;
    const tracks = song.tracks.map((tr) => ({ ...tr, ...(tr.inst === 'drums' ? parseDrums(tr.seq) : parseSeq(tr.seq)), idx: 0, loopStart: 0 }));
    const start = this.ctx.currentTime + 0.08;
    tracks.forEach((tr) => { tr.loopStart = start; });
    const total = Math.max(...tracks.map((t) => t.length));
    this.current = { tracks, stepDur, loop, start, total };
    this.currentName = name;
    const tick = () => {
      if (!this.current || !this.ctx) return;
      const horizon = this.ctx.currentTime + 0.15;
      let finished = true;
      for (const tr of this.current.tracks) {
        for (;;) {
          if (tr.idx >= tr.ev.length) {
            if (!loop) break;
            tr.idx = 0; tr.loopStart += tr.length * stepDur;
          }
          const e = tr.ev[tr.idx];
          const t = tr.loopStart + e.step * stepDur;
          if (t > horizon) { finished = false; break; }
          if (t >= this.ctx.currentTime - 0.05) {
            if (tr.inst === 'drums') this.playDrum(e.d, t, tr.vol);
            else if (e.f) this.playVoice(tr.inst, e.f, t, e.len * stepDur * 0.92, tr.vol);
          }
          tr.idx++;
        }
        if (tr.idx < tr.ev.length) finished = false;
      }
      if (!loop && finished) { this.current = null; this.currentName = null; clearInterval(this.timer); this.timer = null; }
    };
    tick();
    this.timer = setInterval(tick, 40);
  }

  stopMusic() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null; this.current = null; this.currentName = null;
  }
}

export const audio = new AudioSys();
export const SONG_NAMES = Object.keys(SONGS);
