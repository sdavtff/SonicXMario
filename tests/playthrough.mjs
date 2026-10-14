// Runs the autopilot through stages for both characters. Usage: node playthrough.mjs URL [levelIds] [chars]
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import { readFileSync } from 'fs';
import { ROUTES } from './routes.mjs';
const [,, url, lv = 'green,mushroom,jungle', ch = 'zip,rocco'] = process.argv;
const botSrc = readFileSync(new URL('./bot.js', import.meta.url), 'utf8');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const results = [];
for (const char of ch.split(',')) {
  for (const id of lv.split(',')) {
    const page = await browser.newPage({ viewport: { width: 640, height: 300 } });
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.addInitScript((c) => { localStorage.setItem('dashkingdom_save_v1', JSON.stringify({ unlocked: 5, character: c, settings: { quality: 'low', music: 0, sfx: 0 } })); }, char);
    await page.goto(url);
    await page.waitForFunction(() => window.__test);
    const idx = await page.evaluate((id) => window.__test.LEVELS.findIndex((l) => l.id === id), id);
    await page.evaluate((i) => window.__app.startLevel(i), idx);
    await page.waitForFunction(() => window.__app.state === 'playing', null, { timeout: 30000 });
    await page.evaluate(() => { window.__app.state = 'test'; }); // stop the rAF loop from also updating
    await page.addScriptTag({ content: botSrc });
    const r = await page.evaluate(([route, opts]) => window.__bot(route, opts), [ROUTES[id], { maxTime: 500, trace: process.env.TRACE ? process.env.TRACE.split(',').map(Number) : null }]);
    r.level = id; r.char = char; r.errors = errors;
    results.push(r);
    console.log(JSON.stringify(r));
    await page.close();
  }
}
await browser.close();
const fails = results.filter((r) => !r.ok || r.errors.length);
console.log(`\n${results.length - fails.length}/${results.length} playthroughs completed`);
process.exit(fails.length ? 1 : 0);
