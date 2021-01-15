const winCountDisplay = document.getElementById('win-count');
const loseCountDisplay = document.getElementById('lose-count');
const drawCountDisplay = document.getElementById('draw-count');
const outcomeDisplay = document.getElementById('outcome');
const computerThrowDisplay = document.getElementById('computer-throw');
const computerStatement = document.getElementById('computer-statement');

export function updateStats(win, lose, draw){
    winCountDisplay.textContent = win;
    loseCountDisplay.textContent = lose;
    drawCountDisplay.textContent = draw;
}

export function displayOutcome(resultString, computerThrow){
    computerThrowDisplay.textContent = computerThrow;
    showResults();
    console.log(computerThrowDisplay);
    switch (resultString){
        case 'win':
            outcomeDisplay.textContent = 'You win!';
            break;
        case 'loss':
            outcomeDisplay.textContent = 'You lost.';
            break;
        case 'draw':
            outcomeDisplay.textContent = 'It\'s a draw.';
            break;
        default: 
            console.log('Something went wrong...');
    }
}
function showResults() {
    outcomeDisplay.classList.remove('none');
    computerStatement.classList.remove('none');
}
export function resetResultsBox() {
    outcomeDisplay.classList.add('none');
    computerStatement.classList.add('none');
}