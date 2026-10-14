// Local progress persistence: Android SharedPreferences (via the JS bridge) with
// localStorage as mirror/fallback. Never throws: a corrupted save resets to defaults.
const KEY = 'dashkingdom_save_v1';

export const DEFAULT_SETTINGS = {
  music: 0.6,
  sfx: 0.8,
  sensitivity: 1.0,
  invertY: false,
  autoCamera: true,
  joystick: 'dynamic', // 'dynamic' | 'fixed'
  controlSize: 1.0,
  quality: 'auto', // 'auto' | 'low' | 'medium' | 'high'
  fpsCap: 60,
  showFps: false,
  vibration: true,
};

function defaults() {
  return {
    version: 1,
    character: 'zip',
    unlocked: 1,
    levels: {},
    settings: { ...DEFAULT_SETTINGS },
    stats: { plays: 0, deaths: 0, bossesDefeated: 0, gameCompleted: false },
  };
}

function readRaw() {
  try {
    if (window.AndroidBridge && window.AndroidBridge.loadData) {
      const s = window.AndroidBridge.loadData();
      if (s) return s;
    }
  } catch (e) { /* fall through */ }
  try { return localStorage.getItem(KEY); } catch (e) { return null; }
}

export const Save = {
  data: defaults(),

  load() {
    const raw = readRaw();
    const d = defaults();
    if (raw) {
      try {
        const p = JSON.parse(raw);
        Object.assign(d, p);
        d.settings = { ...DEFAULT_SETTINGS, ...(p.settings || {}) };
        d.stats = { ...defaults().stats, ...(p.stats || {}) };
        d.levels = p.levels || {};
      } catch (e) {
        console.warn('Save corrompido, usando padrão', e);
      }
    }
    this.data = d;
    return d;
  },

  persist() {
    const s = JSON.stringify(this.data);
    try { if (window.AndroidBridge && window.AndroidBridge.saveData) window.AndroidBridge.saveData(s); } catch (e) { /* ignore */ }
    try { localStorage.setItem(KEY, s); } catch (e) { /* ignore */ }
  },

  get settings() { return this.data.settings; },

  levelRecord(id) {
    if (!this.data.levels[id]) this.data.levels[id] = { completed: false, bestScore: 0, bestTime: 0, medals: [false, false, false] };
    return this.data.levels[id];
  },

  // Records a finished level; returns { newBest }.
  completeLevel(index, id, score, time, medals) {
    const r = this.levelRecord(id);
    const newBest = score > r.bestScore;
    r.completed = true;
    if (newBest) r.bestScore = score;
    if (!r.bestTime || time < r.bestTime) r.bestTime = time;
    r.medals = r.medals.map((m, i) => m || !!medals[i]);
    this.data.unlocked = Math.max(this.data.unlocked, index + 2);
    this.persist();
    return { newBest };
  },

  reset() {
    const settings = this.data.settings;
    this.data = defaults();
    this.data.settings = settings;
    this.persist();
  },
};
