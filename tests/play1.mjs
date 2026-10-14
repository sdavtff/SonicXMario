import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
const [,, url, out, lvl = '0', char = 'zip'] = process.argv;
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 960, height: 432 }, hasTouch: true });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message + '\n' + e.stack));
await page.addInitScript((c) => { localStorage.setItem('dashkingdom_save_v1', JSON.stringify({ unlocked: 5, character: c, settings: { quality: 'medium', showFps: true } })); }, char);
await page.goto(url);
await page.waitForTimeout(1000);
await page.evaluate((i) => window.__app.startLevel(i), parseInt(lvl));
await page.waitForTimeout(1500);
await page.screenshot({ path: `${out}/l${lvl}_start.png` });
await page.keyboard.down('KeyW');
for (let i = 0; i < 4; i++) {
  await page.waitForTimeout(1500);
  const st = await page.evaluate(() => { const g = window.__app.game; const p = g.player; return { pos: p.pos.toArray().map((v) => +v.toFixed(1)), state: p.state, rings: g.rings, lives: g.lives, fps: window.__app.fps.toFixed(0) }; });
  console.log(JSON.stringify(st));
  await page.screenshot({ path: `${out}/l${lvl}_run${i}.png` });
}
await page.keyboard.up('KeyW');
console.log('ERRORS', JSON.stringify(errors));
await browser.close();
