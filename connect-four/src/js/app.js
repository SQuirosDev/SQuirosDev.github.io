/**
 * app.js — Orquestador de game.html.
 * Lee los nombres desde la URL, conecta Game y UI, maneja navegación del pop-up.
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Leer nombres desde URL params ────────────── */
  const params = new URLSearchParams(window.location.search);
  const names  = [
    params.get('p1') || 'PLAYER 1',
    params.get('p2') || 'PLAYER 2',
  ];

  /* ── Iniciar juego ────────────────────────────── */
  Game.init();
  UI.setNames(names[0], names[1]);
  UI.buildBoard(_onColClick);
  UI.setActiveTurn(Game.getCurrentPlayer(), names);

  /* ── Botones del pop-up ───────────────────────── */
  document.getElementById('btn-replay').addEventListener('click', () => {
    // Reiniciar en la misma página con los mismos jugadores
    UI.hideWinner();
    Game.init();
    UI.buildBoard(_onColClick);
    UI.setActiveTurn(Game.getCurrentPlayer(), names);
  });

  document.getElementById('btn-menu').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  /* ── Botones del juego ────────────────────────── */
  document.getElementById('btn-skip').addEventListener('click', () => {
    if (Game.isOver()) return;
    Game.nextTurn();
    UI.setActiveTurn(Game.getCurrentPlayer(), names);
  });

  document.getElementById('btn-quit').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  /* ── Lógica de turno ──────────────────────────── */
  function _onColClick(col) {
    if (Game.isOver()) return;

    const placed = Game.drop(col);
    if (!placed) return;

    const { row, col: c } = placed;
    UI.placeDisc(row, c, Game.getCurrentPlayer());

    const winCells = Game.checkWin(row, c);
    if (winCells) {
      UI.markWinners(winCells);
      const winner = names[Game.getCurrentPlayer() - 1];
      setTimeout(() => UI.showWinner(winner, false), 450);
      return;
    }

    if (Game.checkDraw()) {
      setTimeout(() => UI.showWinner('', true), 450);
      return;
    }

    Game.nextTurn();
    UI.setActiveTurn(Game.getCurrentPlayer(), names);
  }

});