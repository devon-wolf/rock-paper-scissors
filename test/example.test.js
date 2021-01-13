import {
    computerThrow
} from '../gameUtils.js';

const test = QUnit.test;

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
