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
    if (p.hearts < lastHearts) {
      hurts++;
      const B = g.bosses[0];
      const near = g.spawned.filter((e) => e.alive && e.mesh && e.vel && e.mesh.position.distanceTo(p.center()) < 2.5).length;
      events.push(`hurt@${p.pos.toArray().map((v) => v.toFixed(1)).join(',')}` + (B && B.active ? ` boss=${B.state} d=${Math.hypot(B.pos.x - p.pos.x, B.pos.z - p.pos.z).toFixed(1)} vuln=${B.vulnerable} proj=${near} pst=${p.state}` : ''));
    }
    lastHearts = p.hearts;

    let mx = 0, my = 0;
    // passed a plain waypoint already (e.g. while grinding/looping)? skip it
    while (wi < route.length - 1 && !route[wi][2] && p.pos.z > route[wi][1] + 2) { wi++; arrived = false; }
    const wp = route[Math.min(wi, route.length - 1)];
    const o = wp[2] || {};
    if (o.boss && g.bosses.length && !g.bosses[0].active) { /* walk in first */ }
    if (alive && o.boss && g.bosses.length) {
      const B = g.bosses[0];
      const yaw = g.cam.yaw, fx = Math.sin(yaw), fz = Math.cos(yaw), rx = -Math.cos(yaw), rz = Math.sin(yaw);
      let tx, tz, mm = 1;
      const bx = B.pos.x - p.pos.x, bz = B.pos.z - p.pos.z, bd = Math.hypot(bx, bz) || 1;
      const cx = p.pos.x - B.c.x, cz = p.pos.z - B.c.z, cd = Math.hypot(cx, cz) || 1;
      if (!B.alive || B.defeated) { tx = B.c.x; tz = B.c.z; }
      else if (B.vulnerable && B.inv <= 0 && !g.spawned.some((e) => e.alive && e.maxR !== undefined && e.r < Math.hypot(p.pos.x - e.x, p.pos.z - e.z) + 1)) {
        tx = B.pos.x; tz = B.pos.z;
        if (p.body.grounded && jumpHold <= 0) {
          if (p.id === 'zip' && bd < 5.5) press(20);
          if (p.id === 'rocco' && bd < 3.6) input.attackPressed = true;
          else if (p.id === 'rocco' && bd < 5) press(20);
        }
      } else {
        // orbit the arena centre, keeping away from the boss
        const want = Math.min(B.R - 4, 10);
        const ang = Math.atan2(cz, cx) + 0.9;
        tx = B.c.x + Math.cos(ang) * want; tz = B.c.z + Math.sin(ang) * want;
        if (bd < 7) { tx = p.pos.x - bx / bd * 6; tz = p.pos.z - bz / bd * 6; }
      }
      // dodge: telegraph circles
      for (const e of g.spawned) {
        if (!e.alive) continue;
        if (e.onImpact && Math.hypot(p.pos.x - e.x, p.pos.z - e.z) < e.r + 1.5) {
          const ex = p.pos.x - e.x, ez = p.pos.z - e.z, ed = Math.hypot(ex, ez) || 1;
          tx = p.pos.x + ex / ed * 5 - cx / cd * 2; tz = p.pos.z + ez / ed * 5 - cz / cd * 2;
        }
        // shockwave about to reach us -> jump
        if (e.maxR !== undefined && e.speed) {
          const sd = Math.hypot(p.pos.x - e.x, p.pos.z - e.z);
          if (sd > e.r && sd - e.r < 1.6 + e.speed * 0.06 && p.body.grounded && jumpHold <= 0) press(20);
        }
        // hostile projectile close -> jump
        if (e.vel && e.r && !e.friendly && e.mesh && p.body.grounded && jumpHold <= 0 && e.mesh.position.distanceTo(p.center()) < 3) press(20);
      }
      if (B.laser && B.laser.visible && p.body.grounded && jumpHold <= 0) {
        const a = B.laser.rotation.y, dx2 = p.pos.x - B.pos.x, dz2 = p.pos.z - B.pos.z;
        const along = dx2 * Math.sin(a) + dz2 * Math.cos(a), perp = dx2 * Math.cos(a) - dz2 * Math.sin(a);
        if (along > 0 && Math.abs(perp) < 2.4) press(20);
      }
      const dx = tx - p.pos.x, dz = tz - p.pos.z, d = Math.hypot(dx, dz);
      if (d > 0.6) { const ux = dx / d, uz = dz / d; my = (ux * fx + uz * fz) * mm; mx = (ux * rx + uz * rz) * mm; }
    } else if (alive && p.state !== 'loop' && p.state !== 'rail' && p.state !== 'warp') {
      const dx = wp[0] - p.pos.x, dz = wp[1] - p.pos.z;
      const d = Math.hypot(dx, dz);
      const r = o.r || 1.6;
      if (d < r) arrived = true;
      if (arrived) {
        const holdPos = () => {
          // stand still on moving platforms; otherwise walk back to the spot if we drifted
          const sp = p.speed;
          if (sp > 2.5) {
            // brake: release the stick
            mx = 0; my = 0;
          } else if (d > r && !(p.body.ground && p.body.ground.dynamic)) {
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
    if (o.boss) stuckT = 0;
    if (stuckT > (opts.stuck || 25)) return { ok: false, reason: 'stuck', at: p.pos.toArray().map((v) => +v.toFixed(1)), wi, state: p.state, events };
    if (wi >= route.length) { /* all waypoints passed; keep running toward last */ wi = route.length - 1; }
  }
  return { ok: false, reason: 'timeout', at: p.pos.toArray().map((v) => +v.toFixed(1)), wi, events };
};
