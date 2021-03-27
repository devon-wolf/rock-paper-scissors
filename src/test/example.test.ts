import {
    computerThrow,
    doesUserWin
} from '../gameUtils';

import { Throw, Outcome } from '../app';

const test = QUnit.test;

// testing computerThrow

test('It should return "rock" when given 1, "paper" when given 2, and "scissors" when given anything else.', (expect) => {
    const expected1 : Throw = 'rock';
    const actual1 : Throw = computerThrow(1);
    expect.equal(actual1, expected1);

    const expected2 : Throw = 'paper';
    const actual2 : Throw = computerThrow(2);
    expect.equal(actual2, expected2);

    const expected3 : Throw = 'scissors';
    const actual3 : Throw = computerThrow(3);
    expect.equal(actual3, expected3);
});

// testing doesUserWin

test('It should return "win" when given "rock, scissors", "paper, rock", or "scissors, paper"', (expect) => {
    const expected1 : Outcome = 'win';
    const actual1 = doesUserWin('rock', 'scissors');
    expect.equal(actual1, expected1);

    const expected2 : Outcome = 'win';
    const actual2 = doesUserWin('paper', 'rock');
    expect.equal(actual2, expected2);

    const expected3 : Outcome = 'win';
    const actual3 = doesUserWin('scissors', 'paper');
    expect.equal(actual3, expected3);
});

test('It should return "loss" when given "rock, paper", "paper, scissors", or "scissors, rock"', (expect) => {
    const expected1 : Outcome = 'loss';
    const actual1 = doesUserWin('rock', 'paper');
    expect.equal(actual1, expected1);

    const expected2 : Outcome = 'loss';
    const actual2 = doesUserWin('paper', 'scissors');
    expect.equal(actual2, expected2);

    const expected3 : Outcome = 'loss';
    const actual3 = doesUserWin('scissors', 'rock');
    expect.equal(actual3, expected3);
});

test('It should return "draw" when given "rock, rock", "paper, paper", or "scissors, scissors"', (expect) => {
    const expected1 : Outcome = 'draw';
    const actual1 = doesUserWin('rock', 'rock');
    expect.equal(actual1, expected1);

    const expected2 : Outcome = 'draw';
    const actual2 = doesUserWin('paper', 'paper');
    expect.equal(actual2, expected2);

    const expected3 : Outcome = 'draw';
    const actual3 = doesUserWin('scissors', 'scissors');
    expect.equal(actual3, expected3);
});
