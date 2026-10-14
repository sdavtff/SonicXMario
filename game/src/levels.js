// The five stages. Progress runs along +Z. Units: metres (player ~1.6 tall).
// Reference jump capability (flat ground): Zip ~2.3 high / ~14 long at top speed;
// Rocco ~2.7 high, ~4.7 with double jump. Main-path steps never exceed 2.0.

function sideWalls(b, z0, z1, halfW, top, style, thick = 10) {
  const zc = (z0 + z1) / 2, d = z1 - z0;
  b.box(-(halfW + thick / 2), zc, thick, d, top, 30, style);
  b.box(halfW + thick / 2, zc, thick, d, top, 30, style);
}

// ------------------------------------------------------------------ 1. GREEN HILLS
function greenHills(b) {
  b.start(0, 0.1, 0, 0);
  // S0 meadow
  b.box(0, 25, 18, 72, 0);
  sideWalls(b, -11, 61, 9, 3, 'grass');
  b.hint(0, 3, 7, 'Joystick: mover • PULO: pular • ATAQUE: atacar • ESPECIAL: habilidade');
  b.rings(0, 1, 10, 0, 1, 38, 8);
  b.monitor(5, 0, 26, 'rings10');
  b.qblock(-1.5, 3.75, 20, 'coin'); b.qblock(1.5, 3.75, 20, 'speed');
  b.enemy('beetle', -2, 0, 46, { patrol: 4 });
  b.arc('ring', 3, 1, 50, 3, 60, 3, 6);
  // S1 hill + upper route (spring)
  b.ramp(0, 67.5, 18, 13, 0, 4, 'z');
  b.box(0, 85, 18, 22, 4);
  b.ramp(0, 102.5, 18, 13, 4, 0, 'z');
  sideWalls(b, 61, 109, 9, 7.5, 'grass');
  b.arc('ring', 0, 5, 76, 0, 94, 3, 8);
  b.enemy('beetle', 3, 4, 88, { patrol: 3 });
  b.hint(-6, 76, 3, 'Molas lançam você para caminhos secretos!');
  b.spring(-6, 4, 78, 28, [0, 1, 0.35]);
  b.plat(-6, 95, 5, 24, 12, 1, 'grass');
  b.plat(-6, 115, 5, 10, 12.5, 1, 'grass');
  b.plat(-6, 133, 5, 18, 13, 1, 'grass');
  b.rings(-6, 13, 86, -6, 13, 104, 7);
  b.rings(-6, 14, 126, -6, 14, 134, 4);
  b.medal(-6, 14.6, 139);
  // S2 boost + loop
  b.box(0, 145, 18, 72, 0);
  b.box(14, 145, 10, 72, 3, 30, 'grass');
  b.box(-14, 145, 10, 72, 3, 30, 'grass');
  b.hint(0, 114, 5, 'Painel de impulso + LOOP!');
  b.boost(0, 0, 116, 0);
  b.rings(0, 1, 112, 0, 1, 120, 4);
  b.loop(0, 0, 128, 0, 7, 3.2);
  b.rings(3, 1, 143, 3, 1, 163, 6);
  b.enemy('buzzer', 0, 3.5, 158, { patrol: 3 });
  b.monitor(-5, 0, 150, 'shield');
  b.checkpoint(-5, 0, 170);
  // S3 launch ramp over a chasm
  b.boost(0, 0, 176, 0);
  b.ramp(0, 186, 12, 10, 0, 2.5, 'z');
  b.plat(-4, 197, 4, 4, 1, 1, 'grass');
  b.arc('ring', 0, 4, 191, 0, 203, 6, 7);
  b.box(0, 230, 18, 54, 0);
  sideWalls(b, 203, 257, 9, 3, 'grass');
  b.monitor(5, 0, 210, 'heart');
  b.enemy('beetle', 0, 0, 220, { patrol: 4 });
  b.enemy('buzzer', -4, 3.2, 236, { patrol: 3, axis: 'z' });
  b.rings(-5, 1, 214, -5, 1, 232, 5);
  // rail over a gap; falling off leads to the lower route (not death)
  b.hint(0, 240, 5, 'Pule em cima do trilho para deslizar!');
  b.rail([[0, 0.9, 245], [0, 3.5, 258], [1.5, 3.2, 275], [0, 0.6, 292], [0, 0.9, 304]]);
  b.rings(0, 5, 258, 1.5, 4.6, 275, 6);
  b.box(0, 279, 22, 44, -6);
  b.box(-14, 280, 6, 10, -6);
  b.medal(-14, -4.5, 280);
  b.coins(4, -5, 266, 4, -5, 290, 6);
  b.enemy('beetle', 3, -6, 272, { patrol: 4 });
  b.spring(0, -6, 296, 28, [0, 1, 0.4]);
  // S4 second loop + rising steps
  b.box(0, 341, 18, 80, 0);
  sideWalls(b, 301, 381, 9, 3, 'grass');
  b.checkpoint(-5, 0, 308);
  b.boost(0, 0, 315, 0);
  b.loop(0, 0, 326, 0, 8, -3.2);
  b.enemy('beetle', 2, 0, 346, { patrol: 3 });
  b.monitor(-4, 0, 352, 'star');
  b.box(0, 363.5, 8, 6, 1.5, 2, 'grass');
  b.box(0, 369.5, 8, 6, 3, 3, 'grass');
  b.box(0, 376.75, 8, 8.5, 4.5, 4.5, 'grass');
  b.rings(0, 3, 364, 0, 6, 379, 5);
  // S5 high ground + medal 3 on a spring platform
  b.box(0, 410, 18, 58, 6);
  sideWalls(b, 381, 439, 9, 9, 'grass');
  b.spring(8, 6, 392, 26, [0, 1, 0.35]);
  b.plat(8, 400, 4, 6, 13, 1, 'grass');
  b.medal(8, 14.6, 401);
  b.enemy('beetle', -2, 6, 400, { patrol: 4 });
  b.enemy('buzzer', 0, 9, 420, { patrol: 4 });
  b.rings(-4, 7, 405, -4, 7, 430, 6);
  b.ramp(0, 445.5, 18, 13, 6, 0, 'z');
  sideWalls(b, 439, 452, 9, 8, 'grass');
  b.box(0, 475, 18, 46, 0);
  sideWalls(b, 452, 498, 9, 3, 'grass');
  b.rings(0, 1, 455, 0, 1, 478, 8);
  b.goal(0, 0, 486, 'sign');
  // scenery
  b.box(-40, 245, 42, 540, 1.5); b.box(40, 245, 42, 540, 1.5);
  b.forest(-60, -20, -21, 500, 70, 'palm');
  b.forest(21, -20, 60, 500, 70, 'palm');
  b.forest(-18, -10, -10, 498, 30, 'round', 0.7, 1.1);
  b.forest(10, -10, 18, 498, 30, 'round', 0.7, 1.1);
  b.scatter(-18, -10, 18, 498, 160, (x, y, z, r) => { if (Math.abs(x) > 8) b.flower(x, y, z, [0xff5a8a, 0xffd23f, 0xb46bff, 0xffffff][Math.floor(r() * 4)]); });
  b.waterfall(-19.5, -10, 120, 6, 13, Math.PI / 2);
  b.waterfall(19.5, -10, 330, 6, 13, -Math.PI / 2);
  for (let i = 0; i < 24; i++) b.cloud(-140 + (i % 6) * 55, 45 + (i % 3) * 12, -40 + Math.floor(i / 6) * 150, 1.4);
  b.fluid('water', -14);
}

// ------------------------------------------------------------------ 2. MUSHROOM KINGDOM
function mushroomKingdom(b) {
  b.start(0, 0.1, 0, 0);
  // A
  b.box(0, 33, 18, 86, 0);
  sideWalls(b, -10, 76, 9, 2.5, 'mario');
  b.hint(0, 6, 6, 'Bata nos blocos ? por baixo! Pise nos inimigos!');
  b.brick(-3, 3.75, 18); b.qblock(-1.5, 3.75, 18, 'coin'); b.brick(0, 3.75, 18); b.qblock(1.5, 3.75, 18, 'mushroom'); b.brick(3, 3.75, 18);
  b.qblock(0, 8.25, 18, 'coins5');
  b.coins(-3, 1, 8, 3, 1, 8, 5);
  b.enemy('walker', -3, 0, 30, { patrol: 3 });
  b.enemy('walker', 3, 0, 38, { patrol: 3 });
  b.arc('coin', 0, 1, 42, 0, 50, 3, 5);
  b.pipe(-4, 0, 50, 1.6);
  b.pipe(4, 0, 56, 2.0);
  b.plantPipe(0, 0, 62, 2.0);
  b.hint(-6, 66, 2.5, 'Este cano parece especial...');
  b.pipe(-6, 0, 68, 2.0, [-60, -19.8, 74, 0]);
  b.qblock(4, 3.75, 68, 'fire');
  // secret coin room (underground)
  b.box(-60, 85, 12, 34, -20, 4, 'brick');
  b.box(-67, 85, 2, 38, -11, 13, 'brick'); b.box(-53, 85, 2, 38, -11, 13, 'brick');
  b.box(-60, 67, 12, 2, -11, 13, 'brick'); b.box(-60, 103, 12, 2, -11, 13, 'brick');
  b.plat(-60, 85, 16, 40, -10, 1, 'brick');
  for (let r = 0; r < 4; r++) b.coins(-64, -18.8 + (r % 2) * 1.5, 78 + r * 4, -56, -18.8 + (r % 2) * 1.5, 78 + r * 4, 6);
  b.medal(-60, -18.4, 96);
  b.pipe(-60, -20, 100, 1.5, [5, 2.1, 108, 0]);
  // pit 1 with moving platform
  b.mover(0, 0, 78, 4, 4, { type: 'line', to: [0, 0, 96], period: 6 }, 0x9a6a3a);
  b.coins(0, 2, 82, 0, 2, 94, 5);
  // B
  b.box(0, 129, 18, 62, 0);
  sideWalls(b, 98, 160, 9, 2.5, 'mario');
  b.checkpoint(-5, 0, 104);
  b.pipe(5, 0, 108, 2.0);
  b.coins(6, 1, 120, 6, 2.6, 120, 3);
  b.hidden(6, 3.75, 120, 'oneup');
  b.spring(5, 0, 111.5, 20); // hidden behind the exit pipe
  b.medal(5, 7.0, 111.5);
  b.enemy('walker', -2, 0, 126, { patrol: 3 });
  b.enemy('walker', 2, 0, 132, { patrol: 3 });
  b.enemy('spiny', 0, 0, 142, { patrol: 3 });
  b.hint(0, 138, 4, 'Ouriços não podem ser pisados — use ATAQUE!');
  b.qblock(-3, 3.75, 148, 'coin'); b.brick(-1.5, 3.75, 148); b.qblock(0, 3.75, 148, 'star'); b.brick(1.5, 3.75, 148); b.qblock(3, 3.75, 148, 'coin');
  // pit 2 with falling platforms
  b.hint(0, 158, 3, 'Plataformas que caem! Seja rápido.');
  b.falling(0, 0, 164, 5, 5); b.falling(0, 0.5, 170.5, 5, 5); b.falling(0, 1, 177, 5, 5); b.falling(0, 1, 183.5, 5, 5);
  b.coins(0, 2, 164, 0, 3, 183.5, 4);
  // C
  b.box(0, 223, 18, 74, 0);
  sideWalls(b, 186, 260, 9, 2.5, 'mario');
  b.checkpoint(-5, 0, 190);
  b.plantPipe(-4, 0, 200, 1.8);
  b.plantPipe(4, 0, 208, 2.2);
  b.enemy('walker', 0, 0, 212, { patrol: 3 });
  b.enemy('buzzer', 0, 4, 216, { patrol: 3 });
  b.qblock(0, 3.75, 204, 'coin');
  b.monitor(-5, 0, 218, 'heart');
  // staircase + flag
  for (let i = 0; i < 6; i++) b.box(0, 226 + i * 1.5 + 0.75, 4.5, 1.5, (i + 1) * 1.5, (i + 1) * 1.5, 'brick');
  b.plat(-6.5, 235, 3, 3, 10.5, 1, 'mario');
  b.medal(-6.5, 12, 235);
  b.goal(0, 0, 246, 'flag');
  b.coins(-3, 1, 250, 3, 1, 250, 4);
  // little castle
  b.box(0, 256, 8, 6, 5, 5, 'brick');
  b.box(0, 256, 3, 6.2, 2.6, 2.6, 'mario');
  // scenery
  b.box(-40, 125, 42, 300, 1); b.box(40, 125, 42, 300, 1);
  b.forest(-60, -20, -21, 270, 35, 'mushroom', 0.9, 1.6);
  b.forest(21, -20, 60, 270, 35, 'mushroom', 0.9, 1.6);
  b.forest(-60, -20, -21, 270, 25, 'round');
  b.forest(21, -20, 60, 270, 25, 'round');
  b.scatter(-18, -10, 18, 260, 60, (x, y, z) => { if (Math.abs(x) > 8) b.bush(x, y, z, 0.8, 0x3fbf4a); });
  for (let i = 0; i < 24; i++) b.cloud(-120 + (i % 6) * 50, 40 + (i % 3) * 10, -30 + Math.floor(i / 6) * 90, 1.2);
}

// ------------------------------------------------------------------ 3. LOST JUNGLE
function lostJungle(b) {
  b.start(0, 0.1, 0, 0);
  b.box(0, 20, 14, 60, 0, 30, 'jungle');
  sideWalls(b, -10, 50, 7, 3, 'ruin', 6);
  b.hint(0, 14, 5, 'Cuidado com os troncos balançando!');
  b.enemy('walker', -2, 0, 12, { patrol: 3 });
  b.pendulum(0, 7.5, 24, 6, 'x', 1.0, 2.6, 0);
  b.pendulum(0, 7.5, 34, 6, 'x', 1.0, 2.6, 1.3);
  b.rings(0, 1, 18, 0, 1, 40, 8);
  b.enemy('beetle', 2, 0, 44, { patrol: 3 });
  b.monitor(-4, 0, 6, 'shield');
  // river 1
  b.falling(0, 0, 54, 5, 5, 0x7a4a22); b.falling(0, 0, 60.5, 5, 5, 0x7a4a22);
  b.falling(0, 0, 67, 5, 5, 0x7a4a22); b.falling(0, 0, 73.5, 5, 5, 0x7a4a22);
  // island 2
  b.enemy('buzzer', 0, 4, 88, { patrol: 3 });
  b.box(0, 105, 14, 56, 0, 30, 'jungle');
  b.box(-10, 97.75, 6, 41.5, 3, 30, 'ruin');
  b.box(-10, 128, 6, 10, 3, 30, 'ruin');
  b.box(10, 105, 6, 56, 3, 30, 'ruin');
  b.checkpoint(-4, 0, 80);
  b.spikes(0, 0, 95, 6, 3);
  b.hint(0, 90, 4, 'Espinhos e dardos! Pule ou contorne.');
  b.dart(-6.4, 1.2, 105, [1, 0, 0], 2.2, 0);
  b.dart(6.4, 1.2, 112, [-1, 0, 0], 2.2, 1.1);
  b.rings(4, 1, 98, 4, 1, 112, 5);
  // secret wall of bricks -> alcove with medal 1
  for (const z of [119.25, 120.75, 122.25]) for (const y of [0.75, 2.25]) b.brick(-7.75, y, z);
  b.box(-14, 120.75, 13, 4.5, 0, 30, 'jungle');
  b.box(-14, 117.5, 13, 2, 3, 30, 'ruin'); b.box(-14, 124, 13, 2, 3, 30, 'ruin');
  b.box(-21.5, 120.75, 2, 8.5, 3, 30, 'ruin');
  b.rings(-5, 1, 120.75, -6, 1, 120.75, 2);
  b.medal(-17, 1.5, 120.75);
  b.rings(-12, 1, 119.5, -12, 1, 122, 3);
  b.enemy('walker', 2, 0, 126, { patrol: 3 });
  // vine across the river + alternative falling logs
  b.hint(0, 126, 4, 'Pule no cipó para atravessar o rio!');
  b.rail([[0, 0.9, 128], [0, 2.5, 140], [-2, 3, 155], [0, 2, 170], [0, 1.2, 186], [0, 0.9, 193]], { color: 0x4a8a2a, vine: true, noPosts: true });
  for (let z = 138; z <= 187; z += 7) b.falling(6, 0, z, 3, 3, 0x7a4a22);
  b.rings(0, 4, 145, 0, 4, 180, 7);
  // island 3 with canopy (medal 2)
  b.box(0, 225, 16, 70, 0, 30, 'jungle');
  b.checkpoint(-4, 0, 195);
  b.box(5, 205, 3, 3, 2, 30, 'wood'); b.box(5, 210, 3, 3, 4, 30, 'wood');
  b.box(5, 215, 3, 3, 6, 30, 'wood'); b.box(5, 220, 3, 3, 8, 30, 'wood');
  b.plat(3, 235, 6, 20, 8, 1, 'jungle');
  b.spring(-1.2, 0, 230, 26, [0.18, 1, 0]);
  b.rings(3, 9, 228, 3, 9, 240, 5);
  b.medal(3, 9.6, 243);
  b.enemy('spiny', -3, 0, 215, { patrol: 3 });
  b.plantPipe(-5, 0, 248, 1.5, 0x3a8a3a);
  b.enemy('buzzer', 0, 4, 255, { patrol: 3 });
  // river 2: moving log
  b.mover(0, 0, 262, 4, 4, { type: 'line', to: [0, 0, 278], period: 6 }, 0x7a4a22);
  // island 4 ruins
  b.box(0, 310, 14, 60, 0, 30, 'ruin');
  b.box(-10, 310, 6, 60, 4, 30, 'ruin');
  b.box(10, 298.5, 6, 37, 4, 30, 'ruin');
  b.box(10, 333.5, 6, 17, 4, 30, 'ruin');
  b.hint(0, 288, 4, 'Esmagadores de pedra! Passe quando subirem.');
  b.crusher(0, 296, 0, 7, 3.2, 0);
  b.crusher(0, 304, 0, 7, 3.2, 1.1);
  b.pendulum(0, 7.5, 314, 6, 'x', 1.1, 2.2, 0.4);
  // waterfall hides medal 3
  b.box(12.5, 321, 7, 8, 0, 30, 'ruin');
  b.box(16.5, 321, 1, 8, 4, 30, 'ruin');
  b.box(12.5, 322, 7, 6.4, 5.5, 1, 'ruin');
  b.waterfall(7.05, 0, 322, 6, 6, Math.PI / 2);
  b.medal(13, 1.5, 322);
  b.rings(4, 1, 318, 4, 1, 326, 3);
  b.goal(0, 0, 334, 'ring');
  // scenery
  b.box(-40, 170, 50, 400, -1, 30, 'jungle'); b.box(40, 170, 50, 400, -1, 30, 'jungle');
  b.forest(-60, -20, -16, 350, 90, 'jungle');
  b.forest(16, -20, 60, 350, 90, 'jungle');
  b.scatter(-60, -20, 60, 350, 120, (x, y, z, r) => { if (Math.abs(x) > 14) b.bush(x, y, z, 1 + r(), 0x2a7d33); });
  b.fluid('water', -2.5);
}

// ------------------------------------------------------------------ 4. LAVA CASTLE
function lavaCastle(b) {
  b.start(0, 0.1, 0, 0);
  b.box(0, 20, 16, 60, 0, 30, 'castle');
  sideWalls(b, -10, 50, 8, 6, 'castle', 6);
  b.hint(0, 6, 5, 'Não toque na lava! Chegue ao chefe no fim do castelo.');
  b.monitor(5, 0, 8, 'shield');
  b.spring(-6.6, 0, 4, 24);
  b.medal(-11, 7.6, 4);
  b.enemy('firewalker', -3, 0, 15, { patrol: 3 });
  b.enemy('spiny', 3, 0, 28, { patrol: 3 });
  b.firebar(0, 1.0, 38, 5, 1.6);
  b.rings(-5, 1, 20, -5, 1, 34, 5);
  // lava sea 1
  b.plat(0, 55, 4, 4, 0, 1, 'castle');
  b.mover(0, 0, 59, 4, 4, { type: 'line', to: [0, 0, 70], period: 5 }, 0x5a4a50);
  b.plat(0, 74, 4, 4, 0, 1, 'castle');
  b.plat(0, 81, 4, 4, 0, 1, 'castle');
  b.plat(0, 88, 4, 4, 0, 1, 'castle');
  b.bubble(2.8, -3, 64, 7, 2.6, 0); b.bubble(-2.8, -3, 78, 7, 3.0, 1); b.bubble(3, -3, 91, 7, 2.4, 0.5);
  b.rings(0, 1.5, 55, 0, 1.5, 88, 6);
  // hall of crushers
  b.box(0, 120, 10, 52, 0, 30, 'castle');
  sideWalls(b, 94, 146, 5, 8, 'castle', 6);
  b.checkpoint(-3.5, 0, 98);
  b.hint(0, 102, 4, 'Suba num esmagador quando ele descer... há algo no alto!');
  b.crusher(-3.3, 108, 0, 7.5, 2.4, 0); b.crusher(0, 108, 0, 7.5, 2.4, 0); b.crusher(3.3, 108, 0, 7.5, 2.4, 0);
  b.crusher(-3.3, 118, 0, 7.5, 2.4, 1.3); b.crusher(0, 118, 0, 7.5, 2.4, 1.3); b.crusher(3.3, 118, 0, 7.5, 2.4, 1.3);
  b.medal(0, 10.6, 118);
  b.firebar(0, 3.5, 136, 4, 1.8, 'x');
  b.enemy('firewalker', 2, 0, 126, { patrol: 2 });
  b.rings(0, 1, 124, 0, 1, 132, 4);
  // lava sea 2
  b.falling(0, 0, 149.5, 4, 4, 0x6a5a60); b.falling(0, 0, 155.5, 4, 4, 0x6a5a60); b.falling(0, 0, 161.5, 4, 4, 0x6a5a60);
  b.plat(0, 166, 4, 4, 0, 1, 'castle');
  b.mover(0, 0, 176, 4, 4, { type: 'circle', radius: 4, period: 6 }, 0x5a4a50);
  b.plat(9, 176, 3, 3, 1, 1, 'castle');
  b.medal(9, 2.6, 176);
  b.plat(0, 186, 4, 4, 0, 1, 'castle');
  b.falling(0, 0, 191, 4, 4, 0x6a5a60); b.falling(0, 0, 196, 4, 4, 0x6a5a60);
  b.enemy('buzzer', 2, 4, 232, { patrol: 2 });
  b.enemy('buzzer', 0, 4, 214, { patrol: 3 });
  b.bubble(-3, -3, 170, 7, 2.2, 0.3); b.bubble(3, -3, 182, 7, 2.6, 1.2);
  b.rings(0, 1.5, 149.5, 0, 1.5, 161.5, 3);
  // last corridor
  b.box(0, 222, 14, 46, 0, 30, 'castle');
  sideWalls(b, 199, 245, 7, 8, 'castle', 6);
  b.checkpoint(-4, 0, 203);
  b.monitor(4, 0, 210, 'heart'); b.monitor(-4, 0, 210, 'shield');
  b.spikes(0, 0, 222, 4, 3);
  b.enemy('firewalker', -3, 0, 230, { patrol: 2 });
  b.enemy('firewalker', 3, 0, 236, { patrol: 2 });
  b.rings(-5, 1, 218, -5, 1, 240, 6);
  // bridge + boss arena
  b.box(0, 250, 6, 10, 0, 30, 'castle');
  b.box(0, 270, 32, 32, 0, 30, 'castle');
  b.wall(-9.5, 253.5, 13, 1, 0, 12); b.wall(9.5, 253.5, 13, 1, 0, 12);
  b.wall(0, 286.5, 34, 1, 0, 12); b.wall(-16.5, 270, 1, 34, 0, 12); b.wall(16.5, 270, 1, 34, 0, 12);
  for (const [x, z] of [[-14, 256], [14, 256], [-14, 284], [14, 284]]) b.pillar(x, 0, z, 7, 0x4a3a40);
  for (const [x, z] of [[-15, 264], [15, 264], [-15, 276], [15, 276]]) b.torch(x, 0, z);
  b.boss('magmor', 0, 0, 270, 16, [0, 253.5, 6, 1]);
  // scenery
  for (let z = 0; z < 240; z += 12) { b.torch(-7.3, 0, z); b.torch(7.3, 0, z); }
  for (let i = 0; i < 30; i++) b.pillar(-30 + (i % 2) * 60 + (i % 3) * 4, -3, i * 10, 10 + (i % 4) * 4, 0x3a2a30);
  b.fluid('lava', -3);
}

// ------------------------------------------------------------------ 5. FINAL DIMENSION
function finalDimension(b) {
  b.start(0, 0.1, 0, 0);
  b.box(0, 15, 12, 50, 0, 6, 'crystal');
  b.hint(0, 6, 5, 'Dimensão Final: plataformas piscam! Observe o ritmo.');
  b.enemy('drone', 0, 3, 16, { patrol: 3 });
  b.rings(0, 1, 8, 0, 1, 26, 6);
  b.monitor(4, 0, 12, 'heart');
  // each platform appears while the previous one is still solid (phase lags by 1/4 period)
  b.blink(0, 0, 45, 4, 4, 3, 0); b.blink(0, 0, 51, 4, 4, 3, 2.25);
  b.blink(0, 0, 57, 4, 4, 3, 1.5); b.blink(0, 0, 63, 4, 4, 3, 0.75);
  b.rings(0, 1.5, 45, 0, 1.5, 63, 4);
  // F2 + low gravity
  b.box(0, 85, 14, 34, 0, 6, 'crystal');
  b.checkpoint(-4, 0, 72);
  b.enemy('spiny', 2, 0, 86, { patrol: 3 });
  b.hint(0, 96, 5, 'Gravidade baixa! Saltos muito mais altos.');
  b.gravity(0, 0, 113, 16, 30, 26);
  b.plat(0, 108, 4, 4, 3, 1, 'crystal');
  b.plat(-4, 116, 4, 4, 6, 1, 'crystal');
  b.plat(2, 124, 4, 4, 9, 1, 'crystal');
  b.spring(-5, 6, 116, 20);
  b.medal(-5, 17, 116);
  b.rings(0, 5, 108, 2, 11, 124, 6);
  // F3 boost, loop, rail
  b.box(0, 150, 14, 36, 6, 6, 'crystal');
  b.checkpoint(-4, 6, 136);
  b.boost(0, 6, 142, 0);
  b.loop(0, 6, 152, 0, 7, 3.2);
  b.hint(3, 162, 4, 'Pule no trilho!');
  b.rail([[3.2, 6.9, 165], [3, 9, 180], [0, 7.5, 200], [-2, 5.5, 214], [0, 6.9, 228]], { color: 0x38e8ff, noPosts: true });
  b.rings(3, 10, 178, 0, 9, 200, 6);
  // F4 hazards + portals
  b.box(0, 245, 16, 40, 6, 6, 'crystal');
  b.checkpoint(-4, 6, 231);
  b.firebar(0, 7, 240, 6, 1.5);
  b.enemy('spiny', 4, 6, 248, { patrol: 2 });
  b.enemy('drone', 0, 10, 252, { patrol: 3 });
  b.crusher(-4, 256, 6, 13, 3, 0); b.crusher(4, 256, 6, 13, 3, 1.0);
  b.hint(0, 260, 4, 'Portais! Um deles esconde um segredo...');
  b.portal(-4, 6, 263, [0, 6.6, 284, 0]);
  b.portal(4, 6, 263, [40, 20.6, 261, 0], 0x38e8ff);
  b.box(40, 263, 8, 10, 20, 4, 'crystal');
  b.medal(40, 21.6, 265);
  b.portal(40, 20, 267, [0, 6.6, 284, 0]);
  // F5
  b.box(0, 300, 14, 36, 6, 6, 'crystal');
  b.spikes(0, 6, 295, 6, 3);
  b.enemy('buzzer', 0, 10, 290, { patrol: 3 });
  b.monitor(-4, 6, 290, 'shield'); b.monitor(4, 6, 306, 'star');
  b.blink(9, 7, 305, 3, 3, 2.5, 0); b.blink(14, 8, 305, 3, 3, 2.5, 1.875); b.blink(19, 9, 305, 3, 3, 2.5, 1.25);
  b.plat(23, 305, 3, 3, 9, 1, 'crystal');
  b.medal(23, 10.6, 305);
  b.rings(0, 7, 286, 0, 7, 316, 6);
  b.mover(0, 6, 320, 4, 4, { type: 'line', to: [0, 6, 336], period: 6 }, 0x5a3a9a);
  // final arena
  b.box(0, 355, 34, 34, 6, 6, 'crystal');
  b.wall(-10, 337.5, 14, 1, 6, 18); b.wall(10, 337.5, 14, 1, 6, 18);
  b.wall(0, 372.5, 36, 1, 6, 18); b.wall(-17.5, 355, 1, 36, 6, 18); b.wall(17.5, 355, 1, 36, 6, 18);
  for (const [x, z] of [[-15, 340], [15, 340], [-15, 370], [15, 370]]) b.crystal(x, 6, z, 2.5, 0x38e8ff);
  b.boss('vortex', 0, 6, 355, 17, [0, 337.5, 6, 1]);
  // scenery: floating crystals & islands
  b.scatter(-15, -10, 15, 370, 50, (x, y, z, r) => { if (Math.abs(x) > 5) b.crystal(x, y, z, 0.5 + r() * 0.6, r() < 0.5 ? 0xb46bff : 0x38e8ff); });
  for (let i = 0; i < 40; i++) {
    const x = (i % 2 ? 1 : -1) * (35 + (i * 37) % 60), z = -20 + i * 10, y = -10 + (i * 13) % 30;
    b.box(x, z, 6 + (i % 3) * 3, 6 + (i % 4) * 2, y, 4, 'crystal');
    b.crystal(x, y, z, 1.5, i % 2 ? 0xb46bff : 0x38e8ff);
  }
  for (let i = 0; i < 18; i++) b.cloud(-150 + (i % 6) * 60, -25 + (i % 3) * 8, -40 + Math.floor(i / 6) * 150, 2);
}

export const LEVELS = [
  { id: 'green', name: 'Green Hills', theme: 'green', build: greenHills, killY: -20, par: 150, objective: 'Corra até a placa de chegada!', color: '#3fb548', icon: '🌴' },
  { id: 'mushroom', name: 'Mushroom Kingdom', theme: 'mushroom', build: mushroomKingdom, killY: -30, par: 180, objective: 'Alcance o mastro da bandeira!', color: '#e53935', icon: '🍄' },
  { id: 'jungle', name: 'Lost Jungle', theme: 'jungle', build: lostJungle, killY: -12, par: 200, objective: 'Encontre o Anel Gigante!', color: '#2a7d33', icon: '🌿' },
  { id: 'lava', name: 'Lava Castle', theme: 'lava', build: lavaCastle, killY: -12, par: 260, objective: 'Derrote o Rei Magmor!', color: '#d43b0b', icon: '🌋' },
  { id: 'final', name: 'Final Dimension', theme: 'final', build: finalDimension, killY: -25, par: 300, objective: 'Derrote o Imperador Vórtex!', color: '#7a3cff', icon: '🌌' },
];
