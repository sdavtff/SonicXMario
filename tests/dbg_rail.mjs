import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 640, height: 300 } });
await page.addInitScript(() => { localStorage.setItem('dashkingdom_save_v1', JSON.stringify({ unlocked: 5, character: 'zip', settings: { quality: 'low', music: 0, sfx: 0 } })); });
await page.goto('http://127.0.0.1:8123/index.html');
await page.waitForFunction(() => window.__test);
await page.evaluate(() => window.__app.startLevel(0));
await page.waitForFunction(() => window.__app.state === 'playing');
const log = await page.evaluate(() => {
  const app = window.__app; app.state = 'test';
  const g = app.game, p = g.player, input = window.__test.input;
  p.body.pos.set(0, 0, 236); g.cam.snapBehind(0, p);
  const out = [];
  for (let i = 0; i < 300; i++) {
    input.joy.x = 0; input.joy.y = 1;
    if (i === 20) { input.jumpPressed = true; input.keys.add('Space'); }
    if (i === 40) input.keys.delete('Space');
    g.update(1 / 60);
    if (i % 6 === 0) out.push([i, p.state, p.pos.toArray().map((v) => +v.toFixed(2)).join(','), p.vel.toArray().map((v) => +v.toFixed(1)).join(','), +g.cam.yaw.toFixed(2), p.railDir, p.railDist && +p.railDist.toFixed(1)].join(' | '));
  }
  return out;
});
console.log(log.join('\n'));
await browser.close();
