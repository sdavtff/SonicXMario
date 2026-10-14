// DOM user interface: menus, HUD and overlays (landscape, responsive).
import { CHARACTERS } from './player.js';
import { LEVELS } from './levels.js';
import { audio } from './audio.js';
import { formatTime } from './util.js';
import { DEFAULT_SETTINGS } from './save.js';

const $ = (s, r = document) => r.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const VERSION = '1.0.0';

export class UI {
  constructor(app) {
    this.app = app;
    this.screens = $('#screens');
    this.hud = $('#hud');
    this.flashEl = $('#flash');
    this.current = null;
    this.hudAcc = 0;
    this.buildHud();
  }

  // ---------------------------------------------------------------- generic
  show(name, html, onMount) {
    this.screens.innerHTML = `<div class="screen screen-${name}">${html}</div>`;
    this.current = name;
    this.screens.classList.remove('hidden');
    this.screens.querySelectorAll('[data-act]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.unlock();
        const act = el.getAttribute('data-act');
        audio.sfx(act === 'back' ? 'back' : 'select');
        this.app.action(act, el.getAttribute('data-arg'), el);
      });
    });
    if (onMount) onMount(this.screens.firstElementChild);
  }
  hideScreens() { this.screens.innerHTML = ''; this.screens.classList.add('hidden'); this.current = null; }

  loading(on, title = '', tip = '') {
    const el = $('#loading');
    if (on) {
      el.innerHTML = `<div class="load-box"><div class="spinner"></div><h2>${esc(title)}</h2><p>${esc(tip)}</p></div>`;
      el.classList.remove('hidden');
    } else el.classList.add('hidden');
  }

  fade(t = 0.4) {
    const f = $('#fade');
    f.style.transition = 'none'; f.style.opacity = '1';
    requestAnimationFrame(() => { f.style.transition = `opacity ${t}s`; f.style.opacity = '0'; });
  }

  error(msg) {
    const el = $('#error');
    el.innerHTML = `<div class="panel"><h2>Ops! Ocorreu um erro</h2><p>${esc(msg)}</p><button class="btn" id="err-menu">Voltar ao menu</button><button class="btn ghost" id="err-reload">Reiniciar jogo</button></div>`;
    el.classList.remove('hidden');
    $('#err-menu').onclick = () => { el.classList.add('hidden'); this.app.quitToMenu(); };
    $('#err-reload').onclick = () => location.reload();
  }

  // ---------------------------------------------------------------- menus
  mainMenu() {
    const save = this.app.save.data;
    const ch = CHARACTERS[save.character];
    const done = LEVELS.filter((l) => save.levels[l.id] && save.levels[l.id].completed).length;
    const medals = LEVELS.reduce((a, l) => a + (save.levels[l.id] ? save.levels[l.id].medals.filter(Boolean).length : 0), 0);
    this.show('main', `
      <div class="title-wrap">
        <div class="logo"><span class="l1">DASH</span><span class="l2">KINGDOM</span><span class="l3">3D</span></div>
        <div class="subtitle">Anéis • Moedas • Velocidade • Aventura</div>
      </div>
      <div class="menu-col">
        <button class="btn big primary" data-act="play">▶ JOGAR</button>
        <button class="btn" data-act="chars">🎮 Selecionar Personagem <small>(${esc(ch.name)})</small></button>
        <button class="btn" data-act="levels">🗺 Selecionar Fase</button>
        <button class="btn" data-act="settings">⚙ Configurações</button>
        <button class="btn" data-act="credits">★ Créditos</button>
      </div>
      <div class="corner-info">Fases: ${done}/5 • Medalhas: ${medals}/15 • v${VERSION}</div>`);
  }

  charMenu() {
    const sel = this.app.save.data.character;
    const card = (c) => `
      <div class="char-card ${c.id === sel ? 'sel' : ''}" data-act="pickchar" data-arg="${c.id}">
        <h3>${esc(c.name)}</h3><div class="ctitle">${esc(c.title)}</div>
        <p>${esc(c.desc)}</p>
        ${['speed', 'jump', 'control', 'power'].map((k) => `<div class="stat"><span>${{ speed: 'Velocidade', jump: 'Pulo', control: 'Controle', power: 'Força' }[k]}</span><div class="bar"><i style="width:${c.stats[k] * 20}%"></i></div></div>`).join('')}
        <ul>${c.abilities.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>
      </div>`;
    this.show('chars', `
      <h1 class="scr-title">Selecionar Personagem</h1>
      <div class="char-row">${card(CHARACTERS.zip)}<div class="char-spacer"></div>${card(CHARACTERS.rocco)}</div>
      <div class="bottom-row"><button class="btn" data-act="back">◀ Voltar</button><button class="btn primary" data-act="play">▶ Jogar</button></div>`);
  }

  levelMenu() {
    const save = this.app.save.data;
    const cards = LEVELS.map((l, i) => {
      const rec = save.levels[l.id];
      const locked = i + 1 > save.unlocked;
      const medals = rec ? rec.medals : [false, false, false];
      return `<div class="lvl-card ${locked ? 'locked' : ''}" ${locked ? '' : `data-act="startlevel" data-arg="${i}"`} style="--c:${l.color}">
        <div class="lvl-num">${i + 1}</div><div class="lvl-icon">${locked ? '🔒' : l.icon}</div>
        <h3>${esc(l.name)}</h3>
        <div class="lvl-obj">${esc(l.objective)}</div>
        <div class="medals">${medals.map((m) => `<span class="${m ? 'on' : ''}">★</span>`).join('')}</div>
        <div class="lvl-best">${rec && rec.completed ? `Recorde: ${rec.bestScore}<br>Tempo: ${formatTime(rec.bestTime)}` : locked ? 'Bloqueada' : 'Não concluída'}</div>
      </div>`;
    }).join('');
    this.show('levels', `
      <h1 class="scr-title">Selecionar Fase</h1>
      <div class="lvl-row">${cards}</div>
      <div class="bottom-row"><button class="btn" data-act="back">◀ Voltar</button></div>`);
  }

  settingsMenu(from = 'main') {
    const s = this.app.save.settings;
    const slider = (k, label, min, max, step) => `<label class="set-row"><span>${label}</span><input type="range" min="${min}" max="${max}" step="${step}" value="${s[k]}" data-k="${k}"><b data-v="${k}">${Math.round(s[k] * 100)}%</b></label>`;
    const toggle = (k, label) => `<label class="set-row"><span>${label}</span><input type="checkbox" data-k="${k}" ${s[k] ? 'checked' : ''}></label>`;
    const select = (k, label, opts) => `<label class="set-row"><span>${label}</span><select data-k="${k}">${opts.map(([v, t]) => `<option value="${v}" ${String(s[k]) === String(v) ? 'selected' : ''}>${t}</option>`).join('')}</select></label>`;
    this.show('settings', `
      <h1 class="scr-title">Configurações</h1>
      <div class="settings-grid">
        <div class="set-col">
          <h4>Áudio</h4>
          ${slider('music', 'Música', 0, 1, 0.05)}
          ${slider('sfx', 'Efeitos', 0, 1, 0.05)}
          <h4>Controles</h4>
          ${slider('sensitivity', 'Sensibilidade da câmera', 0.3, 2.5, 0.05)}
          ${slider('controlSize', 'Tamanho dos botões', 0.7, 1.4, 0.05)}
          ${select('joystick', 'Joystick', [['dynamic', 'Dinâmico (onde tocar)'], ['fixed', 'Fixo']])}
          ${toggle('invertY', 'Inverter eixo Y da câmera')}
          ${toggle('autoCamera', 'Câmera automática')}
          ${toggle('vibration', 'Vibração')}
        </div>
        <div class="set-col">
          <h4>Gráficos e desempenho</h4>
          ${select('quality', 'Qualidade', [['auto', 'Automática'], ['low', 'Baixa (mais FPS)'], ['medium', 'Média'], ['high', 'Alta']])}
          ${select('fpsCap', 'Limite de FPS', [[30, '30 FPS (economia de bateria)'], [60, '60 FPS']])}
          ${toggle('showFps', 'Mostrar FPS')}
          <h4>Progresso</h4>
          <button class="btn danger small" id="reset-progress">Apagar progresso</button>
          <button class="btn small" id="reset-settings">Restaurar padrões</button>
          <p class="note">O progresso é salvo automaticamente neste aparelho.</p>
        </div>
      </div>
      <div class="bottom-row"><button class="btn" data-act="${from === 'pause' ? 'settingsback' : 'back'}">◀ Voltar</button></div>`, (root) => {
      root.querySelectorAll('[data-k]').forEach((el) => {
        const k = el.getAttribute('data-k');
        const apply = () => {
          let v;
          if (el.type === 'checkbox') v = el.checked;
          else if (el.type === 'range') { v = parseFloat(el.value); const b = root.querySelector(`[data-v="${k}"]`); if (b) b.textContent = Math.round(v * 100) + '%'; }
          else v = k === 'fpsCap' ? parseInt(el.value, 10) : el.value;
          this.app.setSetting(k, v);
        };
        el.addEventListener('input', apply);
        el.addEventListener('change', () => { apply(); audio.sfx('menu'); });
      });
      root.querySelector('#reset-progress').onclick = () => this.confirm('Apagar todo o progresso? Esta ação não pode ser desfeita.', () => { this.app.save.reset(); this.app.toast('Progresso apagado'); this.settingsMenu(from); });
      root.querySelector('#reset-settings').onclick = () => { Object.keys(DEFAULT_SETTINGS).forEach((k) => this.app.setSetting(k, DEFAULT_SETTINGS[k])); this.settingsMenu(from); };
    });
  }

  confirm(text, yes) {
    const el = document.createElement('div');
    el.className = 'modal';
    el.innerHTML = `<div class="panel"><p>${esc(text)}</p><button class="btn danger">Sim</button><button class="btn">Cancelar</button></div>`;
    document.body.appendChild(el);
    const [a, b] = el.querySelectorAll('button');
    a.onclick = () => { el.remove(); yes(); };
    b.onclick = () => el.remove();
  }

  creditsMenu() {
    this.show('credits', `
      <h1 class="scr-title">Créditos</h1>
      <div class="panel credits">
        <p><b>Dash Kingdom 3D</b> — um jogo de plataforma 3D que combina velocidade, loops, molas e anéis com blocos, moedas, canos e power-ups.</p>
        <p><b>Design, programação, modelos 3D, animações, músicas e efeitos sonoros:</b> criados de forma procedural para este projeto (Three.js + WebAudio).</p>
        <p><b>Personagens:</b> Zip e Rocco são personagens <i>originais</i>, inspirados nos estilos clássicos de jogos de plataforma de velocidade e de exploração. Nenhum personagem, música ou arte de terceiros protegidos por direitos autorais foi utilizado.</p>
        <p><b>Tecnologia:</b> Three.js (licença MIT), WebGL, WebAudio, Android WebView.</p>
        <p><b>Controles:</b> joystick à esquerda; PULO, ATAQUE e ESPECIAL à direita; arraste o lado direito da tela para girar a câmera.</p>
        <p>Versão ${VERSION}</p>
      </div>
      <div class="bottom-row"><button class="btn" data-act="back">◀ Voltar</button></div>`);
  }

  pauseMenu(game) {
    const medals = game.medals.map((m, i) => `<span class="${m || game.savedMedals[i] ? 'on' : ''}">★</span>`).join('');
    this.show('pause', `
      <div class="panel pause">
        <h1>PAUSA</h1>
        <div class="pause-info">${esc(game.def.name)} • ${formatTime(game.time)}<div class="medals">${medals}</div></div>
        <button class="btn big primary" data-act="resume">▶ Continuar</button>
        <button class="btn" data-act="restart">↻ Reiniciar fase</button>
        <button class="btn" data-act="pausesettings">⚙ Configurações</button>
        <button class="btn" data-act="quit">⌂ Sair para o menu</button>
      </div>`);
  }

  resultsMenu(game, r) {
    const isLast = game.levelIndex === LEVELS.length - 1;
    this.show('results', `
      <div class="panel results">
        <h1>FASE CONCLUÍDA!</h1>
        <h3>${esc(game.def.name)}</h3>
        <table>
          <tr><td>Pontuação</td><td>${r.base}</td></tr>
          <tr><td>Bônus de tempo (${formatTime(game.time)})</td><td>+${r.timeBonus}</td></tr>
          <tr><td>Bônus de anéis/moedas (${game.rings + game.coins})</td><td>+${r.ringBonus}</td></tr>
          <tr><td>Bônus sem morrer</td><td>+${r.perfect}</td></tr>
          <tr class="total"><td>TOTAL</td><td>${r.total}</td></tr>
        </table>
        <div class="medals big">${game.medals.map((m, i) => `<span class="${m ? 'on' : game.savedMedals[i] ? 'old' : ''}">★</span>`).join('')}</div>
        ${r.newBest ? '<div class="badge">NOVO RECORDE!</div>' : ''}
        <div class="row">
          ${isLast ? '<button class="btn big primary" data-act="ending">★ Final</button>' : '<button class="btn big primary" data-act="next">Próxima fase ▶</button>'}
          <button class="btn" data-act="restart">↻ Repetir</button>
          <button class="btn" data-act="quit">⌂ Menu</button>
        </div>
      </div>`);
  }

  gameOverMenu(game) {
    this.show('gameover', `
      <div class="panel gameover">
        <h1>FIM DE JOGO</h1>
        <p>${esc(game.def.name)} • Pontuação: ${game.score}</p>
        <button class="btn big primary" data-act="restart">↻ Tentar novamente</button>
        <button class="btn" data-act="quit">⌂ Menu principal</button>
      </div>`);
  }

  endingScreen() {
    const s = this.app.save.data;
    const medals = LEVELS.reduce((a, l) => a + (s.levels[l.id] ? s.levels[l.id].medals.filter(Boolean).length : 0), 0);
    const score = LEVELS.reduce((a, l) => a + (s.levels[l.id] ? s.levels[l.id].bestScore : 0), 0);
    this.show('ending', `
      <div class="ending-scroll">
        <h1>PARABÉNS!</h1>
        <p>O Imperador Vórtex foi derrotado e a Dimensão Final voltou à paz.</p>
        <p>Zip e Rocco reuniram os anéis e as moedas dos cinco reinos — Green Hills, Mushroom Kingdom, Lost Jungle, Lava Castle e Final Dimension.</p>
        <p class="big-stat">Pontuação total: ${score}<br>Medalhas Estrela: ${medals}/15</p>
        <p>${medals < 15 ? 'Ainda há medalhas escondidas... volte e encontre todas!' : 'Você encontrou TODAS as medalhas. Lendário!'}</p>
        <h3>Dash Kingdom 3D</h3>
        <p>Obrigado por jogar!</p>
      </div>
      <div class="bottom-row"><button class="btn primary" data-act="quit">⌂ Menu principal</button></div>`);
  }

  toastMsg(text) {
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = text;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  // ---------------------------------------------------------------- HUD
  buildHud() {
    this.hud.innerHTML = `
      <div class="hud-tl">
        <div class="hud-score"><span class="lbl">PONTOS</span><b id="h-score">0</b></div>
        <div class="hud-time"><span class="lbl">TEMPO</span><b id="h-time">0:00.00</b></div>
        <div class="hud-items"><span class="ico ring"></span><b id="h-rings">0</b><span class="ico coin"></span><b id="h-coins">0</b></div>
        <div class="hud-hearts" id="h-hearts"></div>
        <div class="hud-energy" id="h-energy-wrap"><span class="lbl">TURBO</span><div class="ebar"><i id="h-energy"></i></div></div>
        <div class="hud-power" id="h-power"></div>
      </div>
      <div class="hud-tc"><div id="boss" class="hidden"><div class="boss-name" id="boss-name"></div><div class="boss-bar"><i id="boss-hp"></i></div></div></div>
      <div class="hud-tr">
        <div class="hud-medals" id="h-medals"></div>
        <div class="hud-lives"><span class="life-ico" id="h-life-ico"></span>× <b id="h-lives">5</b></div>
        <button id="btn-pause" aria-label="Pausa">❚❚</button>
      </div>
      <div id="h-hint" class="hud-hint"></div>
      <div id="h-fps" class="hud-fps"></div>`;
    $('#btn-pause').addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.app.pause(); });
    this.el = {
      score: $('#h-score'), time: $('#h-time'), rings: $('#h-rings'), coins: $('#h-coins'), hearts: $('#h-hearts'),
      energy: $('#h-energy'), energyWrap: $('#h-energy-wrap'), power: $('#h-power'), medals: $('#h-medals'), lives: $('#h-lives'),
      hint: $('#h-hint'), fps: $('#h-fps'), lifeIco: $('#h-life-ico'),
    };
  }
  showHud(v) { this.hud.classList.toggle('hidden', !v); }
  hudReset(game) {
    this.cache = {};
    this.el.lifeIco.className = 'life-ico ' + game.charId;
    this.el.energyWrap.style.display = game.charId === 'zip' ? '' : 'none';
    this.bossBar(null);
    this.hudUpdate(game, 1);
  }
  set(key, val) {
    if (this.cache[key] === val) return;
    this.cache[key] = val;
    this.el[key].innerHTML = val;
  }
  hudUpdate(game, dt) {
    this.hudAcc += dt;
    if (this.hudAcc < 0.066) return; // ~15 Hz DOM updates
    this.hudAcc = 0;
    const p = game.player;
    this.set('score', String(game.score));
    this.set('time', formatTime(game.time));
    this.set('rings', String(game.rings));
    this.set('coins', String(game.coins));
    this.set('lives', String(game.lives));
    let h = '';
    for (let i = 0; i < p.maxHearts; i++) h += `<span class="heart ${i < p.hearts ? 'on' : ''}">♥</span>`;
    this.set('hearts', h);
    this.set('medals', game.medals.map((m, i) => `<span class="${m ? 'on' : game.savedMedals[i] ? 'old' : ''}">★</span>`).join(''));
    if (p.id === 'zip') this.el.energy.style.width = Math.round(p.energy) + '%';
    const pw = [];
    if (p.shield) pw.push('<span class="pw sh">ESCUDO</span>');
    if (p.big) pw.push('<span class="pw big">SUPER</span>');
    if (p.fire) pw.push('<span class="pw fire">FOGO</span>');
    if (p.starTime > 0) pw.push(`<span class="pw star">★ ${Math.ceil(p.starTime)}</span>`);
    if (p.speedTime > 0) pw.push(`<span class="pw spd">» ${Math.ceil(p.speedTime)}</span>`);
    this.set('power', pw.join(''));
    this.set('hint', game.hintT > 0 ? game.hintText : '');
    this.el.hint.classList.toggle('on', game.hintT > 0);
    this.set('fps', this.app.save.settings.showFps ? `${Math.round(this.app.fps)} FPS` : '');
  }
  bossBar(name, hp, max) {
    const b = $('#boss');
    if (!name) { b.classList.add('hidden'); return; }
    b.classList.remove('hidden');
    $('#boss-name').textContent = name;
    $('#boss-hp').style.width = Math.max(0, (hp / max) * 100) + '%';
  }
  flash(text, color = '#fff', dur = 1.5, sub = '') {
    const el = this.flashEl;
    el.innerHTML = `<div class="flash-t" style="color:${color}">${esc(text)}</div>${sub ? `<div class="flash-s">${esc(sub)}</div>` : ''}`;
    el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
    clearTimeout(this.flashTimer);
    this.flashTimer = setTimeout(() => el.classList.remove('show'), dur * 1000);
  }
}
