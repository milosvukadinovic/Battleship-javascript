/* eslint-disable no-undef */
const gameBoard = require('../gameBoard');
const ship = require('../ship');

test('Has emty fleet', () => {
  const newBoard = gameBoard();
  expect(newBoard.fleet).toBeTruthy();
});

test('Placing new ship on 0 coordinates', () => {
  const newBoard = gameBoard();
  const testShip = ship(3);
  expect(newBoard.place(0, testShip, 'Horizon')).toBeTruthy();
});

test('Placing on board edge', () => {
  const newBoard = gameBoard();
  const testShip = ship(3);
  const testShip2 = ship(5);
  expect(newBoard.place(95, testShip, 'Horizon')).toBeTruthy();
  expect(newBoard.place(49, testShip2, 'Vertical')).toBeTruthy();
});

test('Outside the board', () => {
  const newBoard = gameBoard();
  const testShip = ship(3);
  expect(newBoard.place(-1, testShip, 'Horizon')).toBeFalsy();
});

test('Outside the board horizontally(ship getting halved)', () => {
  const newBoard = gameBoard();
  const testShip = ship(3);
  expect(newBoard.place(49, testShip, 'Horizon')).toBeFalsy();
});

test('Outside the board vertically(ship getting halved)', () => {
  const newBoard = gameBoard();
  const testShip = ship(3);
  expect(newBoard.place(80, testShip, 'Vertical')).toBeFalsy();
});

test('Ships cant touch', () => {
  const newBoard = gameBoard();
  const testShip1 = ship(3);
  const testShip2 = ship(5);
  expect(newBoard.place(0, testShip1, 'Vertical')).toBeTruthy();
  expect(newBoard.place(0, testShip2, 'Horizon')).toBeFalsy();
});

test('Can take damage', () => {
  const newBoard = gameBoard();
  const testShip = ship(3);
  newBoard.place(0, testShip, 'Horizon');
  newBoard.receiveAttack(0);
  expect(newBoard.hits).toEqual([0]);
});

test('Can miss attacks', () => {
  const newBoard = gameBoard();
  const testShip = ship(3);
  newBoard.place(0, testShip);
  newBoard.receiveAttack(90);
  expect(newBoard.misses).toEqual([90]);
});

test('can determine if a fleet has sunk', () => {
  const newBoard = gameBoard();
  const testShip1 = ship(2);
  newBoard.place(0, testShip1, 'Horizon');
  const testShip2 = ship(2);
  newBoard.place(6, testShip2, 'Horizon');
  newBoard.receiveAttack(0);
  newBoard.receiveAttack(1);
  newBoard.receiveAttack(6);
  newBoard.receiveAttack(7);
  expect(newBoard.sunkFleet()).toBeTruthy();
});
