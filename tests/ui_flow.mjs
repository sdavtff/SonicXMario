// End-to-end UI/flow test with real pointer/touch input in Chromium (WebGL via SwiftShader).
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8123/index.html';
const shots = process.argv[3] || '/tmp';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await browser.newContext({ viewport: { width: 915, height: 412 }, hasTouch: true, isMobile: true, deviceScaleFactor: 1 });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
let pass = 0, fail = 0;
const check = (name, ok, extra = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name} ${extra}`); ok ? pass++ : fail++; };
const ev = (f, a) => page.evaluate(f, a);
const wait = (ms) => page.waitForTimeout(ms);
const clickText = async (t) => { await page.locator('#screens').getByText(t, { exact: false }).first().click(); await wait(250); };

await page.goto(url);
await page.waitForFunction(() => window.__app);
await wait(800);
check('main menu shown', await ev(() => window.__app.ui.current === 'main'));
check('5 main buttons', (await page.locator('.menu-col .btn').count()) === 5);
await page.screenshot({ path: `${shots}/ui_main.png` });

await clickText('Selecionar Personagem');
check('character screen', await ev(() => window.__app.ui.current === 'chars'));
await page.locator('.char-card').nth(1).click(); await wait(300);
check('Rocco selected & saved', await ev(() => window.__app.save.data.character === 'rocco' && JSON.parse(localStorage.getItem('dashkingdom_save_v1')).character === 'rocco'));
await page.screenshot({ path: `${shots}/ui_chars.png` });
await clickText('Voltar');

await clickText('Selecionar Fase');
check('level select: only stage 1 unlocked', (await page.locator('.lvl-card.locked').count()) === 4);
await page.screenshot({ path: `${shots}/ui_levels.png` });
await clickText('Voltar');

await clickText('Configurações');
await page.locator('input[data-k="music"]').fill('0.3');
await page.locator('input[data-k="showFps"]').check();
await page.locator('select[data-k="fpsCap"]').selectOption('30');
await page.screenshot({ path: `${shots}/ui_settings.png` });
await clickText('Voltar');
await clickText('Créditos');
check('credits screen', await ev(() => window.__app.ui.current === 'credits'));
await clickText('Voltar');

await page.reload();
await page.waitForFunction(() => window.__app); await wait(500);
check('settings persisted after reload', await ev(() => { const s = window.__app.save.settings; return s.music === 0.3 && s.showFps === true && s.fpsCap === 30; }));
check('character persisted after reload', await ev(() => window.__app.save.data.character === 'rocco'));
await ev(() => window.__app.setSetting('fpsCap', 60));

await clickText('JOGAR');
await page.waitForFunction(() => window.__app.state === 'playing', null, { timeout: 30000 });
check('JOGAR starts stage 1', await ev(() => window.__app.game.levelIndex === 0));
check('touch controls visible', await page.locator('#btn-jump').isVisible());
await wait(1500);
// touch joystick: drag up on the left side
const z0 = await ev(() => window.__app.game.player.pos.z);
const box = await page.locator('#joy-zone').boundingBox();
const cdp = await ctx.newCDPSession(page);
const tp = (x, y, id = 1) => ({ x, y, id, radiusX: 5, radiusY: 5, force: 1 });
const sx = box.x + 120, sy = box.y + box.height - 90;
await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [tp(sx, sy)] });
for (let i = 1; i <= 5; i++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [tp(sx, sy - i * 14)] });
await wait(2500);
const z1 = await ev(() => window.__app.game.player.pos.z);
check('joystick moves player forward', z1 > z0 + 3, `(z ${z0.toFixed(1)} -> ${z1.toFixed(1)})`);
// jump button while holding joystick (multi-touch)
const jb = await page.locator('#btn-jump').boundingBox();
await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [tp(sx, sy - 70), tp(jb.x + jb.width / 2, jb.y + jb.height / 2, 2)] });
let maxVy = 0;
for (let i = 0; i < 10; i++) { maxVy = Math.max(maxVy, await ev(() => window.__app.game.player.pos.y)); await wait(60); }
await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
check('jump button (multi-touch) makes player jump', maxVy > 0.5, `(max y ${maxVy.toFixed(2)})`);
await page.screenshot({ path: `${shots}/ui_ingame.png` });

// pause button
await page.locator('#btn-pause').tap(); await wait(300);
check('pause button pauses', await ev(() => window.__app.state === 'paused' && window.__app.ui.current === 'pause'));
const t0 = await ev(() => window.__app.game.time); await wait(800);
check('time frozen while paused', (await ev(() => window.__app.game.time)) === t0);
await page.screenshot({ path: `${shots}/ui_pause.png` });
await clickText('Continuar');
check('resume', await ev(() => window.__app.state === 'playing'));
// android back button behaviour
await ev(() => window.onAndroidBack()); await wait(200);
check('Android back -> pause', await ev(() => window.__app.state === 'paused'));
await ev(() => window.onAndroidBack()); await wait(200);
check('Android back again -> resume', await ev(() => window.__app.state === 'playing'));
await ev(() => window.onAndroidPause()); await wait(200);
check('app backgrounded -> auto pause', await ev(() => window.__app.state === 'paused'));
await clickText('Continuar');

// collect a ring, checkpoint, death & respawn
const r0 = await ev(() => window.__app.game.rings);
await ev(() => { const g = window.__app.game; const it = g.pickups.rings.find((r) => !r.taken); g.player.body.pos.set(it.x, it.y - 0.8, it.z); });
await wait(400);
check('ring pickup counts', (await ev(() => window.__app.game.rings)) > r0);
await ev(() => { const g = window.__app.game; g.player.body.pos.set(0, 0.2, 169); g.player.body.vel.set(0, 0, 3); });
await wait(600);
check('checkpoint activates', await ev(() => window.__app.game.checkpoint.p.z > 160));
const lives0 = await ev(() => window.__app.game.lives);
await ev(() => { const g = window.__app.game; g.player.body.pos.set(0, -30, 200); });
await page.waitForFunction((l) => window.__app.game.lives === l - 1 && window.__app.game.player.alive, lives0, { timeout: 20000 });
check('fall -> lose life -> respawn at checkpoint', await ev(() => Math.abs(window.__app.game.player.pos.z - 170) < 3));

// finish the stage
await ev(() => { const g = window.__app.game; g.player.body.pos.set(0, 0.2, 484); g.player.body.vel.set(0, 0, 10); });
await page.waitForFunction(() => window.__app.state === 'results', null, { timeout: 20000 });
check('goal -> results screen', await ev(() => window.__app.ui.current === 'results'));
check('progress saved: stage 2 unlocked', await ev(() => JSON.parse(localStorage.getItem('dashkingdom_save_v1')).unlocked === 2));
await page.screenshot({ path: `${shots}/ui_results.png` });
await clickText('Próxima fase');
await page.waitForFunction(() => window.__app.state === 'playing', null, { timeout: 30000 });
check('next stage loads (Mushroom Kingdom)', await ev(() => window.__app.game.def.id === 'mushroom'));

// game over
await ev(() => { const g = window.__app.game; g.lives = 1; g.player.die(); });
await page.waitForFunction(() => window.__app.ui.current === 'gameover', null, { timeout: 20000 });
check('last life lost -> game over screen', true);
await page.screenshot({ path: `${shots}/ui_gameover.png` });
await clickText('Tentar novamente');
await page.waitForFunction(() => window.__app.state === 'playing', null, { timeout: 30000 });
check('retry restarts stage with 5 lives', await ev(() => window.__app.game.lives === 5 && window.__app.game.def.id === 'mushroom'));
await page.locator('#btn-pause').tap(); await wait(200);
await clickText('Sair para o menu');
check('quit to menu', await ev(() => window.__app.state === 'menu' && window.__app.ui.current === 'main'));

// ending flow on the last stage
await ev(() => { window.__app.save.data.unlocked = 5; window.__app.startLevel(4); });
await page.waitForFunction(() => window.__app.state === 'playing', null, { timeout: 30000 });
await ev(() => window.__app.game.win(0));
await page.waitForFunction(() => window.__app.state === 'results', null, { timeout: 20000 });
await page.locator('[data-act=ending]').click(); await wait(300);
check('ending screen after final stage', await ev(() => window.__app.ui.current === 'ending' && window.__app.save.data.stats.gameCompleted));
await page.screenshot({ path: `${shots}/ui_ending.png` });
await clickText('Menu principal');
check('back to main menu', await ev(() => window.__app.ui.current === 'main'));
await ev(() => window.onAndroidBack());
check('Android back on main menu asks to exit (no crash)', await ev(() => window.__app.state === 'menu'));

check('no JS errors during the whole run', errors.length === 0, errors.slice(0, 3).join(' | '));
console.log(`\n${pass} passed, ${fail} failed`);
await browser.close();
process.exit(fail ? 1 : 0);
