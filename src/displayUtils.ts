const winCountDisplay : HTMLElement = document.getElementById('win-count');
const loseCountDisplay : HTMLElement = document.getElementById('lose-count');
const drawCountDisplay : HTMLElement = document.getElementById('draw-count');

export function updateStats(win : number, lose : number, draw : number){
    winCountDisplay.textContent = win.toString();
    loseCountDisplay.textContent = lose.toString();
    drawCountDisplay.textContent = draw.toString();
}