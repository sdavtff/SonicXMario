// Collects renderer stats per stage and takes close-up screenshots (bosses, characters).
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
const [,, url, shots] = process.argv;
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
for (const q of ['medium', 'low']) {
  const page = await browser.newPage({ viewport: { width: 915, height: 412 } });
  await page.addInitScript((q) => localStorage.setItem('dashkingdom_save_v1', JSON.stringify({ unlocked: 5, character: 'zip', settings: { quality: q, music: 0, sfx: 0 } })), q);
  await page.goto(url); await page.waitForFunction(() => window.__app);
  for (let i = 0; i < 5; i++) {
    await page.evaluate((i) => window.__app.startLevel(i), i);
    await page.waitForFunction(() => window.__app.state === 'playing', null, { timeout: 30000 });
    await page.waitForTimeout(800);
    const s = await page.evaluate(() => {
      const a = window.__app, r = a.renderer, g = a.game;
      r.info.autoReset = false; r.info.reset(); g.render(r);
      const info = { calls: r.info.render.calls, tris: r.info.render.triangles, geometries: r.info.memory.geometries, textures: r.info.memory.textures, loadMs: Math.round(a.loadMs) };
      r.info.autoReset = true;
      let objs = 0; g.scene.traverse(() => objs++);
      return { level: g.def.id, ...info, objects: objs, entities: g.entities.length, rings: g.totalRings, coins: g.totalCoins, enemies: g.enemies.length, heap: performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1e6) + 'MB' : '?' };
    });
    console.log(q, JSON.stringify(s));
  }
  await page.close();
}
// close-ups: bosses
const page = await browser.newPage({ viewport: { width: 915, height: 412 } });
await page.addInitScript(() => localStorage.setItem('dashkingdom_save_v1', JSON.stringify({ unlocked: 5, character: 'rocco', settings: { quality: 'medium', music: 0, sfx: 0 } })));
await page.goto(url); await page.waitForFunction(() => window.__app);
for (const [lvl, z, name] of [[3, 262, 'boss_magmor'], [4, 345, 'boss_vortex']]) {
  await page.evaluate((i) => window.__app.startLevel(i), lvl);
  await page.waitForFunction(() => window.__app.state === 'playing', null, { timeout: 30000 });
  await page.evaluate((z) => { const g = window.__app.game; g.player.body.pos.set(0, g.bosses[0].c.y + 0.2, z); g.cam.snapBehind(0, g.player); }, z);
  await page.waitForTimeout(3500);
  await page.screenshot({ path: `${shots}/${name}.png` });
}
// enemies + blocks in Mushroom Kingdom
await page.evaluate(() => window.__app.startLevel(1));
await page.waitForFunction(() => window.__app.state === 'playing', null, { timeout: 30000 });
await page.evaluate(() => { const g = window.__app.game; g.player.body.pos.set(0, 0.1, 9); });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${shots}/mushroom_blocks.png` });
await page.evaluate(() => window.__app.startLevel(2));
await page.waitForFunction(() => window.__app.state === 'playing', null, { timeout: 30000 });
await page.evaluate(() => { const g = window.__app.game; g.player.body.pos.set(0, 0.1, 286); });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${shots}/jungle_ruins.png` });
await browser.close();
