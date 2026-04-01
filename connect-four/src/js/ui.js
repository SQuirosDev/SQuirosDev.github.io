/**
 * ui.js — Presentación: DOM, animaciones y confeti.
 * Solo para game.html. Sin lógica de juego.
 */
const UI = (() => {
  const hudP1        = document.getElementById('hud-p1');
  const hudP2        = document.getElementById('hud-p2');
  const hudNameP1    = document.getElementById('hud-name-p1');
  const hudNameP2    = document.getElementById('hud-name-p2');
  const turnNameEl   = document.getElementById('turn-name');
  const boardEl      = document.getElementById('board');
  const colHintsEl   = document.getElementById('col-hints');
  const overlay      = document.getElementById('winner-overlay');
  const winnerLabelEl= document.getElementById('winner-label');
  const winnerNameEl = document.getElementById('winner-name-text');
  const canvas       = document.getElementById('confetti-canvas');
  const ctx          = canvas.getContext('2d');

  let particles = [], rafId = null;

  /* ── Nombres en HUD ──────────────────────────── */
  function setNames(p1, p2) {
    hudNameP1.textContent = p1.toUpperCase();
    hudNameP2.textContent = p2.toUpperCase();
  }

  function setActiveTurn(player, names) {
    hudP1.classList.toggle('active', player === 1);
    hudP2.classList.toggle('active', player === 2);
    turnNameEl.textContent = (player === 1 ? names[0] : names[1]).toUpperCase();
  }

  /* ── Tablero ─────────────────────────────────── */
  function buildBoard(onColClick) {
    boardEl.innerHTML = '';
    colHintsEl.innerHTML = '';

    for (let c = 0; c < Game.COLS; c++) {
      const hint = document.createElement('div');
      hint.classList.add('col-hint');
      hint.textContent = '▼';
      colHintsEl.appendChild(hint);
    }

    for (let r = 0; r < Game.ROWS; r++) {
      for (let c = 0; c < Game.COLS; c++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', () => colHintsEl.children[c].classList.add('show'));
        cell.addEventListener('mouseleave', () => colHintsEl.children[c].classList.remove('show'));
        cell.addEventListener('click', () => onColClick(c));
        boardEl.appendChild(cell);
      }
    }
  }

  function _cell(row, col) { return boardEl.children[row * Game.COLS + col]; }

  function placeDisc(row, col, player) {
    const cell = _cell(row, col);
    cell.classList.add(player === 1 ? 'red' : 'yellow', 'dropping');
    cell.addEventListener('animationend', () => cell.classList.remove('dropping'), { once: true });
  }

  function markWinners(cells) {
    cells.forEach(({ row, col }) => _cell(row, col).classList.add('winner'));
  }

  /* ── Pop-up ──────────────────────────────────── */
  function showWinner(name, isDraw) {
    if (isDraw) {
      winnerLabelEl.textContent = 'GAME OVER';
      winnerNameEl.textContent  = '¡EMPATE!';
    } else {
      winnerLabelEl.textContent = 'WINNER';
      winnerNameEl.textContent  = name.toUpperCase();
      _startConfetti();
    }
    overlay.classList.remove('hidden');
  }

  function hideWinner() {
    overlay.classList.add('hidden');
    _stopConfetti();
  }

  /* ── Confeti ─────────────────────────────────── */
  function _startConfetti() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ['#e8334a','#f5c842','#4af0a8','#4ab8f0','#f04a9d','#eaeef5'];
    particles = Array.from({ length: 130 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * -canvas.height * .6,
      w:     5 + Math.random() * 7,
      h:     9 + Math.random() * 7,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot:   Math.random() * Math.PI * 2,
      vy:    2 + Math.random() * 3,
      vx:    (Math.random() - .5) * 1.5,
      spin:  (Math.random() - .5) * .12,
    }));
    _tick();
  }

  function _tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y += p.vy; p.x += p.vx; p.rot += p.spin;
      if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    rafId = requestAnimationFrame(_tick);
  }

  function _stopConfetti() {
    cancelAnimationFrame(rafId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = [];
  }

  return { setNames, setActiveTurn, buildBoard, placeDisc, markWinners, showWinner, hideWinner };
})();