/* eslint-disable no-undef */
const player = require('../player');

test('Player name', () => {
  const player1 = player('Biggus');
  expect(player1.name).toEqual('Biggus');
});

test('Player attack', () => {
  const player1 = player('Biggus');
  expect(player1.attack(50)).toBeTruthy();
});

test('Invalid move test', () => {
  const player1 = player('Biggus');
  expect(player1.attack(-50)).toBeFalsy();
});

test('Cant attack same place', () => {
  const player1 = player('Biggus');
  expect(player1.attack(50)).toBeTruthy();
  expect(player1.attack(50)).toBeFalsy();
});

test('Random computer attack', () => {
  const player2 = player('Computer');
  expect(player2.computerAttack()).toBeTruthy();
});
