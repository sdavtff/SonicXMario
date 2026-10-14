// Waypoints [x, z, options] for the autopilot along each stage's main path.
// options: j = jump on arrival, wait = seconds to wait, until = JS condition, m = stick magnitude,
//          noauto = disable auto-jump, r = arrival radius, hold = jump button frames (short hop)
const MOVER = (i = 0) => `g.entities.filter(e=>e.path&&e.path.type==="line")[${i}].col`;
const near = (i, z) => `${MOVER(i)}.min.z < ${z}`;
const far = (i, z) => `${MOVER(i)}.max.z > ${z}`;
export const ROUTES = {
  green: [
    [0, 20], [0, 60], [0, 100], [0, 112], [0, 125], [3, 150], [0, 172], [0, 182], [0, 205], [0, 236],
    [0, 242, { j: 1, r: 1.2 }], [0, 250], [0, 312], [0, 318], [-2, 340], [0, 356], [0, 363.5], [0, 369.5], [0, 377], [0, 386],
    [0, 430], [0, 486],
  ],
  mushroom: [
    [0, 10], [0, 45], [-1, 52], [0, 58], [1, 66], [0, 73, { m: 0.3, until: near(0, 76.2) }],
    [0, 78.5, { noauto: 1, m: 0.5, r: 1.2, until: far(0, 97.8) }],
    [0, 104], [0, 150], [0, 157, { m: 0.4, wait: 0.6 }], [0, 164, { hold: 9, m: 0.5, mz: 0.28 }], [0, 170.5, { hold: 9, m: 0.5, mz: 0.28 }], [0, 177, { hold: 9, m: 0.5, mz: 0.28 }], [0, 183.5, { hold: 9, m: 0.5, mz: 0.28 }],
    [0, 190], [0, 222], [0, 246],
  ],
  jungle: [
    [0, 14], [0, 42], [0, 47.5, { m: 0.4, wait: 0.6 }], [0, 54, { hold: 9, m: 0.5, mz: 0.28 }], [0, 60.5, { hold: 9, m: 0.5, mz: 0.28 }], [0, 67, { hold: 9, m: 0.5, mz: 0.28 }], [0, 73.5, { hold: 9, m: 0.5, mz: 0.28 }],
    [0, 82], [-4, 95], [0, 126], [0, 127.5, { j: 1, r: 1.0 }], [0, 140],
    [0, 196], [0, 252], [0, 257, { m: 0.3, until: near(0, 260.2) }],
    [0, 262.5, { noauto: 1, m: 0.5, r: 1.2, until: far(0, 279.8) }], [0, 284],
    [5, 292, { until: 'g.entities.filter(e=>e.size&&e.z===296)[0].state==="rise"||g.entities.filter(e=>e.size&&e.z===296)[0].state==="up"' }],
    [5, 300], [5, 310], [0, 334],
  ],
};
