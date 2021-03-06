export function getComputerThrow() {
    return computerThrow(computerThrowCriteria());
}

// only exports to the tests
export function computerThrow(value) {
    if (value === 1) return 'rock';
    else if (value === 2) return 'paper';
    else return 'scissors';
}

function computerThrowCriteria() {
    return Math.ceil(Math.random() * 3);
}

export function doesUserWin(userThrow, computerThrow) {
    const drawCheck = checkForDraw(userThrow, computerThrow);
    const lossCheck = checkForLose(userThrow, computerThrow);
    if (drawCheck) return drawCheck;
    else if (lossCheck) return lossCheck;
    else return 'win';
}

function checkForDraw(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        return 'draw';
    }
}

function checkForLose(userThrow, computerThrow) {
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