import {
    getComputerThrow,
    doesUserWin
} from './gameUtils.js';

// buttons
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
	
// display areas
const resultsSection = document.querySelector('.results');
const computerThrowDisplay = document.getElementById('computer-throw');
const outcomeDisplay = document.getElementById('outcome');
const statsDisplay = document.getElementById('stats');
const winCountDisplay = document.getElementById('win-count');
const loseCountDisplay = document.getElementById('lose-count');
const drawCountDisplay = document.getElementById('draw-count');

// initialize state
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    const playerChoice = document.querySelector('input[type="radio"]:checked');
	
    const playerThrow = playerChoice.value;
    const computerThrow = getComputerThrow();
	
    resultsSection.classList.remove('none');
    computerThrowDisplay.textContent = computerThrow;
	
    const outcome = doesUserWin(playerThrow, computerThrow);
    outcomeDisplay.textContent = outcome;
	
    if (outcome === 'win') winCount++;
    if (outcome === 'loss') loseCount++;
    if (outcome === 'draw') drawCount++;

    winCountDisplay.textContent = winCount;
    loseCountDisplay.textContent = loseCount;
    drawCountDisplay.textContent = drawCount;
	
    console.log(playerThrow, computerThrow);
    console.log(doesUserWin(playerThrow, computerThrow));
});