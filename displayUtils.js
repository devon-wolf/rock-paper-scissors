const winCountDisplay = document.getElementById('win-count');
const loseCountDisplay = document.getElementById('lose-count');
const drawCountDisplay = document.getElementById('draw-count');

export function updateStats(win, lose, draw){
    winCountDisplay.textContent = win;
    loseCountDisplay.textContent = lose;
    drawCountDisplay.textContent = draw;
}