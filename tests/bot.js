// Autopilot used by the automated playthrough tests. Injected into the page and run
// synchronously with a fixed 1/60 s timestep (no rendering), so a whole stage can be
// simulated in a few seconds. It steers through waypoints using the same virtual
// joystick/buttons a player uses, with simple heuristics to jump gaps/steps.
window.__bot = function run(route, opts = {}) {
  const T = window.__test, app = T.app, input = T.input;
  const g = app.game;
  const p = g.player;
  const dt = 1 / 60;
  const maxT = opts.maxTime || 600;
  let wi = 0, t = 0, waitT = 0, jumpHold = 0, deaths = 0, hurts = 0;
  let lastZ = -1e9, stuckT = 0;
  const events = [];
  let lastHearts = p.hearts;
  input.keys.clear();
  input.joy.x = 0; input.joy.y = 0;
  const press = (frames = 18) => { input.jumpPressed = true; input.keys.add('Space'); jumpHold = frames; };
  const world = g.world;
  let wasAlive = true;
  let arrived = false;
  while (t < maxT) {
    if (g.finished) return { ok: true, time: +g.time.toFixed(1), deaths, hurts, rings: g.rings, coins: g.coins, score: g.score, events };
    if (g.over) return { ok: false, reason: 'gameover', at: p.pos.toArray().map((v) => +v.toFixed(1)), wi, events };
    const alive = p.alive;
    if (!alive && wasAlive) { deaths++; events.push(`death@${p.pos.toArray().map((v) => v.toFixed(1)).join(',')} wp${wi}`); }
    if (alive && !wasAlive) {
      lastZ = p.pos.z; stuckT = 0;
      // respawned at checkpoint: resume from the first waypoint ahead of it
      wi = route.findIndex((w) => w[1] > p.pos.z + 1);
      if (wi < 0) wi = route.length - 1;
      waitT = 0; arrived = false;
    }
    wasAlive = alive;
    if (p.hearts < lastHearts) { hurts++; events.push(`hurt@${p.pos.toArray().map((v) => v.toFixed(1)).join(',')}`); }
    lastHearts = p.hearts;

    let mx = 0, my = 0;
    // passed a plain waypoint already (e.g. while grinding/looping)? skip it
    while (wi < route.length - 1 && !route[wi][2] && p.pos.z > route[wi][1] + 2) { wi++; arrived = false; }
    const wp = route[Math.min(wi, route.length - 1)];
    const o = wp[2] || {};
    if (alive && p.state !== 'loop' && p.state !== 'rail' && p.state !== 'warp') {
      const dx = wp[0] - p.pos.x, dz = wp[1] - p.pos.z;
      const d = Math.hypot(dx, dz);
      const r = o.r || 1.6;
      if (d < r) arrived = true;
      if (arrived) {
        const holdPos = () => {
          // stand still on moving platforms; otherwise walk back to the spot if we drifted
          if (d > r && !(p.body.ground && p.body.ground.dynamic)) {
            const yaw = g.cam.yaw, ux = dx / d, uz = dz / d;
            my = (ux * Math.sin(yaw) + uz * Math.cos(yaw)) * 0.5; mx = (ux * -Math.cos(yaw) + uz * Math.sin(yaw)) * 0.5;
          }
        };
        if (o.wait && waitT < o.wait) { waitT += dt; holdPos(); }
        else if (o.until && !Function('g', 'p', 'return ' + o.until)(g, p)) { holdPos(); }
        else {
          if (o.j && p.body.grounded) press(o.hold || 18);
          if (o.a) input.attackPressed = true;
          if (o.dj) { /* allow double jump later */ }
          wi = Math.min(wi + 1, route.length); waitT = 0; arrived = false;
        }
      } else {
        const ux = dx / (d || 1), uz = dz / (d || 1);
        const yaw = g.cam.yaw;
        const fx = Math.sin(yaw), fz = Math.cos(yaw), rx = -Math.cos(yaw), rz = Math.sin(yaw);
        const m = (p.id === 'zip' && o.mz) ? o.mz : (o.m || 1);
        my = (ux * fx + uz * fz) * m; mx = (ux * rx + uz * rz) * m;
        // auto jump on gaps / steps
        if (p.body.grounded && !o.noauto && jumpHold <= 0 && p.state === 'normal') {
          const L = Math.max(1.0, p.speed * 0.1);
          const qx = p.pos.x + ux * L, qz = p.pos.z + uz * L;
          const gAhead = world.ground(qx, qz, 0.2, p.pos.y + 0.6);
          const step = world.ground(qx, qz, 0.2, p.pos.y + 3.5);
          const gap = !gAhead || gAhead.y < p.pos.y - 2.2;
          const wall = step && step.y > p.pos.y + 0.6;
          let enemy = false;
          for (const e of g.enemies) {
            if (!e.alive || e.dying) continue;
            const ex = e.pos.x - p.pos.x, ez = e.pos.z - p.pos.z, ed = Math.hypot(ex, ez);
            const ey = e.targetPos().y - p.pos.y;
            if (ed < 2.2 + p.speed * 0.12 && ed > 0.5 && (ex * ux + ez * uz) / ed > 0.4 && ey > -1 && ey < 2.5) enemy = true;
          }
          if (gap || wall || enemy) press(o.hold || 20);
        }
        if (!p.body.grounded && p.vel.y < 0.5 && jumpHold <= 0 && !o.noair) {
          const below = world.ground(p.pos.x, p.pos.z, 0.3, p.pos.y + 0.1);
          const target = world.ground(p.pos.x + ux * 3, p.pos.z + uz * 3, 0.3, p.pos.y + 0.5);
          const falling = (!below || below.y < p.pos.y - 4) && (!target || target.y < p.pos.y - 4);
          if (falling) {
            if (p.id === 'rocco' && !p.usedDouble) press(16);

          }
        }
      }
      if (o.special) input.keys.add('KeyL'); else input.keys.delete('KeyL');
    }
    input.joy.x = mx; input.joy.y = my;
    if (jumpHold > 0) { jumpHold--; if (jumpHold === 0) input.keys.delete('Space'); }
    g.update(dt);
    t += dt;
    if (opts.trace && p.pos.z > opts.trace[0] && p.pos.z < opts.trace[1] && Math.round(t * 60) % 5 === 0) events.push(['T', wi, p.state, p.mode, p.pos.toArray().map((v) => v.toFixed(1)).join(','), p.vel.toArray().map((v) => v.toFixed(1)).join(','), mx.toFixed(2), my.toFixed(2), g.cam.yaw.toFixed(2)].join(' '));
    // stuck detection (no forward progress for a long time)
    if (p.pos.z > lastZ + 0.5) { lastZ = p.pos.z; stuckT = 0; } else stuckT += dt;
    if (stuckT > (opts.stuck || 25)) return { ok: false, reason: 'stuck', at: p.pos.toArray().map((v) => +v.toFixed(1)), wi, state: p.state, events };
    if (wi >= route.length) { /* all waypoints passed; keep running toward last */ wi = route.length - 1; }
  }
  return { ok: false, reason: 'timeout', at: p.pos.toArray().map((v) => +v.toFixed(1)), wi, events };
};
