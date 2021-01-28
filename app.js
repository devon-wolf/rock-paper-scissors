import {
    getComputerThrow,
    doesUserWin,
} from './gameUtils.js';

import {
    updateStats
} from './displayUtils.js';

// buttons
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
	
// display areas
const resultsSection = document.querySelector('.results');
const computerThrowDisplay = document.getElementById('computer-throw');
const outcomeDisplay = document.getElementById('outcome');

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
	
    if (outcome === 'win') {
        winCount++;
        outcomeDisplay.textContent = 'You win!';
    }
    if (outcome === 'loss') {
        loseCount++;
        outcomeDisplay.textContent = 'You lost.';
    }
    if (outcome === 'draw') {
        drawCount++;
        outcomeDisplay.textContent = 'It\'s a draw.';
    }
  
    updateStats(winCount, loseCount, drawCount);
});

// reset button
const resetCounter = document.getElementById('reset-counter');
const resetDisplay = document.getElementById('reset-display');
let resetCount = 0;

resetButton.addEventListener('click', () => {
    winCount = 0;
    loseCount = 0;
    drawCount = 0;
    updateStats(winCount, loseCount, drawCount);
	
    resetDisplay.classList.remove('none');
    resetCount++;
    resetCounter.textContent = resetCount;
});