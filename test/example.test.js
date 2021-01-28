import {
    computerThrow,
    doesUserWin
} from '../gameUtils.js';

const test = QUnit.test;

// testing computerThrow

test('It should return "rock" when given 1, "paper" when given 2, and "scissors" when given anything else.', (expect) => {
    const expected1 = 'rock';
    const actual1 = computerThrow(1);
    expect.equal(actual1, expected1);

    const expected2 = 'paper';
    const actual2 = computerThrow(2);
    expect.equal(actual2, expected2);

    const expected3 = 'scissors';
    const actual3 = computerThrow(3);
    expect.equal(actual3, expected3);
});

// testing doesUserWin

test('It should return "win" when given "rock, scissors", "paper, rock", or "scissors, paper"', (expect) => {
    const expected1 = 'win';
    const actual1 = doesUserWin('rock', 'scissors');
    expect.equal(actual1, expected1);

    const expected2 = 'win';
    const actual2 = doesUserWin('paper', 'rock');
    expect.equal(actual2, expected2);

    const expected3 = 'win';
    const actual3 = doesUserWin('scissors', 'paper');
    expect.equal(actual3, expected3);
});

test('It should return "loss" when given "rock, paper", "paper, scissors", or "scissors, rock"', (expect) => {
    const expected1 = 'loss';
    const actual1 = doesUserWin('rock', 'paper');
    expect.equal(actual1, expected1);

    const expected2 = 'loss';
    const actual2 = doesUserWin('paper', 'scissors');
    expect.equal(actual2, expected2);

    const expected3 = 'loss';
    const actual3 = doesUserWin('scissors', 'rock');
    expect.equal(actual3, expected3);
});

test('It should return "draw" when given "rock, rock", "paper, paper", or "scissors, scissors"', (expect) => {
    const expected1 = 'draw';
    const actual1 = doesUserWin('rock', 'rock');
    expect.equal(actual1, expected1);

    const expected2 = 'draw';
    const actual2 = doesUserWin('paper', 'paper');
    expect.equal(actual2, expected2);

    const expected3 = 'draw';
    const actual3 = doesUserWin('scissors', 'scissors');
    expect.equal(actual3, expected3);
});
