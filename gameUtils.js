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