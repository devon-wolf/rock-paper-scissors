import { Throw } from './app';

function computerThrowCriteria() {
    return Math.ceil(Math.random() * 3);
}

export function computerThrow(value : number) {
    if (value === 1) return 'rock';
    else if (value === 2) return 'paper';
    else return 'scissors';
}

export function getComputerThrow() {
    return computerThrow(computerThrowCriteria());
}

export function doesUserWin(userThrow : Throw, computerThrow : Throw) {
    const drawCheck : string = checkForDraw(userThrow, computerThrow);
    const lossCheck : string = checkForLose(userThrow, computerThrow);
    if (drawCheck) return drawCheck;
    else if (lossCheck) return lossCheck;
    else return 'win';
}

function checkForDraw(userThrow : Throw, computerThrow : Throw) {
    if (userThrow === computerThrow) {
        return 'draw';
    }
}

function checkForLose(userThrow : Throw, computerThrow : Throw) {
    switch (userThrow) {
        case 'rock':
            if (computerThrow === 'paper') return 'loss';
            break;
        case 'paper':
            if (computerThrow === 'scissors') return 'loss';
            break;
        case 'scissors':
            if (computerThrow === 'rock') return 'loss';
            break;
        default:
            return 'something went wrong';
    }
}