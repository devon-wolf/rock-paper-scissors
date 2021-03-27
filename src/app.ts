import {
    getComputerThrow,
    doesUserWin,
} from './gameUtils';

import {
    updateStats
} from './displayUtils';

export type Throw = 'rock' | 'paper' | 'scissors';
type Outcome = 'win' | 'loss' | 'draw';

// buttons
const submitButton : HTMLElement = document.getElementById('submit-button');
const resetButton : HTMLElement = document.getElementById('reset-button');
	
// display areas
const resultsSection : HTMLElement = document.querySelector('.results');
const computerThrowDisplay : HTMLElement = document.getElementById('computer-throw');
const outcomeDisplay : HTMLElement = document.getElementById('outcome');

// initialize state
let winCount : number = 0;
let loseCount : number = 0;
let drawCount : number = 0;

// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    const playerChoice : HTMLInputElement = document.querySelector('input[type="radio"]:checked');
	
    const playerThrow : Throw = <Throw> playerChoice.value;
    const computerThrow : Throw = getComputerThrow();
	
    resultsSection.classList.remove('none');
    computerThrowDisplay.textContent = computerThrow;
	
    const outcome : Outcome = <Outcome> doesUserWin(playerThrow, computerThrow);
	
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
const resetCounter : HTMLElement = document.getElementById('reset-counter');
const resetDisplay : HTMLElement = document.getElementById('reset-display');
let resetCount : number = 0;

resetButton.addEventListener('click', () => {
    winCount = 0;
    loseCount = 0;
    drawCount = 0;
    updateStats(winCount, loseCount, drawCount);
	
    resetDisplay.classList.remove('none');
    resetCount++;
    resetCounter.textContent = resetCount.toString();
});