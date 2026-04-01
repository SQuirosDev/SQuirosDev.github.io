/**
 * menu.js — Lógica exclusiva del menú principal (index.html).
 * Al presionar START redirige a game.html pasando los nombres por URL params.
 */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-start').addEventListener('click', () => {
    const p1 = document.getElementById('p1-input').value.trim() || 'PLAYER 1';
    const p2 = document.getElementById('p2-input').value.trim() || 'PLAYER 2';

    const params = new URLSearchParams({ p1, p2 });
    window.location.href = `game.html?${params.toString()}`;
  });
});