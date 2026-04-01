/**
 * game.js — Lógica pura del juego (sin DOM).
 * Tablero 6×7, detección de victoria en 4 direcciones.
 */
const Game = (() => {
  const ROWS = 6, COLS = 7, EMPTY = null;
  let board = [], currentPlayer = 1, over = false;

  function init() {
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY));
    currentPlayer = 1;
    over = false;
  }

  function getBoard()         { return board; }
  function getCurrentPlayer() { return currentPlayer; }
  function isOver()           { return over; }

  function drop(col) {
    if (over) return null;
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][col] === EMPTY) {
        board[row][col] = currentPlayer;
        return { row, col };
      }
    }
    return null;
  }

  function checkWin(lastRow, lastCol) {
    const p = board[lastRow][lastCol];
    for (const [dr, dc] of [[0,1],[1,0],[1,1],[1,-1]]) {
      const line = _line(lastRow, lastCol, dr, dc, p);
      if (line.length >= 4) { over = true; return line.slice(0, 4); }
    }
    return null;
  }

  function _line(r, c, dr, dc, p) {
    const cells = [{ row: r, col: c }];
    let nr = r + dr, nc = c + dc;
    while (_ok(nr, nc) && board[nr][nc] === p) { cells.push({ row: nr, col: nc }); nr += dr; nc += dc; }
    nr = r - dr; nc = c - dc;
    while (_ok(nr, nc) && board[nr][nc] === p) { cells.unshift({ row: nr, col: nc }); nr -= dr; nc -= dc; }
    return cells;
  }

  function _ok(r, c) { return r >= 0 && r < ROWS && c >= 0 && c < COLS; }

  function checkDraw() {
    const draw = board[0].every(c => c !== EMPTY);
    if (draw) over = true;
    return draw;
  }

  function nextTurn() { currentPlayer = currentPlayer === 1 ? 2 : 1; }

  return { ROWS, COLS, init, getBoard, getCurrentPlayer, isOver, drop, checkWin, checkDraw, nextTurn };
})();