// Waypoints [x, z, options] for the autopilot along each stage's main path.
// options: j = jump on arrival, wait = seconds to wait, until = JS condition, m = stick magnitude,
//          noauto = disable auto-jump, r = arrival radius, hold = jump button frames (short hop)
const MOVER = (i = 0) => `g.entities.filter(e=>e.path&&e.path.type==="line")[${i}].col`;
const near = (i, z) => `${MOVER(i)}.min.z < ${z}`;
const far = (i, z) => `${MOVER(i)}.max.z > ${z}`;
const CIRCLE = 'g.entities.find(e=>e.path&&e.path.type==="circle").col';
const crusherOk = (z) => `(c=>c.state==='rise'&&c.t>0.45||c.state==='up'&&c.t<0.8)(g.entities.find(e=>e.size&&e.z===${z}))`;
const blinkOk = (i) => `(b=>((b.t%b.period)/b.period)<0.38)(g.entities.filter(e=>e.period&&e.col&&!e.path)[${i}])`;
const MV = (i) => `g.entities.filter(e=>e.path&&e.path.type==="line")[${i}]`;
const dwellNear = (i) => `(m=>{const ph=(m.t%m.path.period)/m.path.period;return ph>0.885||ph<0.01})(${MV(i)})`;
const dwellFar = (i) => `(m=>{const ph=(m.t%m.path.period)/m.path.period;return ph>0.39&&ph<0.5})(${MV(i)})`;
const HOP = { hold: 9, m: 0.5, mz: 0.28 };
const JMP = { hold: 14, m: 0.6, mz: 0.35, r: 1.4 };
const LOWG = { hold: 30, m: 0.5, mz: 0.3 };
export const ROUTES = {
  green: [
    [0, 20], [0, 60], [0, 100], [0, 112], [0, 125], [3, 150], [0, 172], [0, 182], [0, 205], [0, 236],
    [0, 242, { j: 1, r: 1.2 }], [0, 250], [0, 312], [0, 318], [-2, 340], [0, 356], [0, 363.5], [0, 369.5], [0, 377], [0, 386],
    [0, 430], [0, 486],
  ],
  mushroom: [
    [0, 10], [0, 45], [-1, 52], [0, 58], [1, 66], [0, 73, { m: 0.3, until: dwellNear(0) }],
    [0, 78.5, { noauto: 1, m: 0.6, r: 1.2, until: dwellFar(0) }],
    [0, 104], [0, 150], [0, 157, { m: 0.4, wait: 0.6 }], [0, 164, { hold: 9, m: 0.5, mz: 0.28 }], [0, 170.5, { hold: 9, m: 0.5, mz: 0.28 }], [0, 177, { hold: 9, m: 0.5, mz: 0.28 }], [0, 183.5, { hold: 9, m: 0.5, mz: 0.28 }],
    [0, 190], [0, 222], [0, 246],
  ],
  jungle: [
    [0, 14], [0, 42], [0, 47.5, { m: 0.4, wait: 0.6 }], [0, 54, { hold: 9, m: 0.5, mz: 0.28 }], [0, 60.5, { hold: 9, m: 0.5, mz: 0.28 }], [0, 67, { hold: 9, m: 0.5, mz: 0.28 }], [0, 73.5, { hold: 9, m: 0.5, mz: 0.28 }],
    [0, 82], [-4, 95], [0, 126], [0, 127.5, { j: 1, r: 1.0 }], [0, 140],
    [0, 196], [0, 252], [0, 257, { m: 0.3, until: dwellNear(0) }],
    [0, 262.5, { noauto: 1, m: 0.6, r: 1.2, until: dwellFar(0) }], [0, 284],
    [5, 292, { until: 'g.entities.filter(e=>e.size&&e.z===296)[0].state==="rise"||g.entities.filter(e=>e.size&&e.z===296)[0].state==="up"' }],
    [5, 300], [5, 310], [0, 334],
  ],
  lava: [
    [0, 10], [0, 28], [6, 34], [6, 42], [0, 45, { m: 0.5 }], [0, 48.4, { m: 0.3, wait: 0.5 }], [0, 55, JMP],
    [0, 56, { m: 0.3, r: 1.0, until: dwellNear(0) }],
    [0, 59.5, { noauto: 1, m: 0.6, r: 1.2, until: dwellFar(0) }],
    [0, 74, { m: 0.5 }], [0, 75, { m: 0.3, wait: 0.4 }], [0, 81, JMP], [0, 82, { m: 0.3, wait: 0.4 }], [0, 88, JMP], [0, 96],
    [0, 104, { until: crusherOk(108) }], [0, 113], [0, 113.5, { until: crusherOk(118) }], [0, 124], [4.6, 131], [4.6, 139], [0, 142, { m: 0.4 }],
    [0, 144.5, { m: 0.3, wait: 0.6 }], [0, 149.5, HOP], [0, 155.5, HOP], [0, 161.5, HOP], [0, 166, HOP],
    [0, 167, { m: 0.3, r: 1.0, until: `(${CIRCLE}.min.z+${CIRCLE}.max.z)/2 < 172.6` }],
    [0, 172.5, { ...HOP, r: 1.6, until: `(${CIRCLE}.min.z+${CIRCLE}.max.z)/2 > 179.4` }],
    [0, 186, HOP], [0, 191, HOP], [0, 196, HOP], [0, 203], [4, 216], [4, 228], [0, 240], [0, 250], [0, 262],
    [0, 270, { boss: 1 }],
  ],
  final: [
    [0, 10], [0, 34], [0, 38.5, { m: 0.4, until: blinkOk(0) }],
    [0, 45, { ...JMP, until: blinkOk(1) }], [0, 51, { ...JMP, until: blinkOk(2) }], [0, 57, { ...JMP, until: blinkOk(3) }],
    [0, 63, JMP], [0, 72], [-4, 84], [-4, 92], [0, 100, { m: 0.5, mz: 0.3 }],
    [0, 108, LOWG], [-4, 116, LOWG], [2, 124, LOWG], [0, 134, LOWG], [0, 140], [0, 148],
    [3.2, 163.5, { j: 1, r: 1.0 }], [3, 170], [0, 230], [7, 236], [7, 244], [-5, 248], [0, 254], [0, 259], [-4, 263],
    [0, 288], [5, 292], [5, 300], [0, 310], [0, 316, { m: 0.4, until: dwellNear(0) }],
    [0, 320.5, { noauto: 1, m: 0.3, mz: 0.22, r: 1.2, until: dwellFar(0) }],
    [0, 342], [0, 355, { boss: 1 }],
  ],
};
