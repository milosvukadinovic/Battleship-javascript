/* eslint-disable no-undef */
const ship = require('../ship');

test('Creating ship', () => {
  const shippy = ship(7);
  expect(shippy.length).toEqual(7);
});

test('Ship got hit', () => {
  const shippy = ship(7);
  expect(shippy.hit(2)).toBeTruthy();
});

test('Cant attack same spot twice', () => {
  const shippy = ship(7);
  shippy.hit(1);
  expect(shippy.hit(1)).toBeFalsy();
});

test('Cant hit a spot outside of ship body', () => {
  const shippy = ship(7);
  expect(shippy.hit(8)).toBeFalsy();
});

test('Ship is sunk', () => {
  const shippy = ship(2);
  shippy.hit(0);
  shippy.hit(1);
  expect(shippy.isSunk()).toBeTruthy();
});

test('Return false if ship is not yet destroyed', () => {
  const shippy = ship(6);
  shippy.hit(0);
  shippy.hit(1);
  expect(shippy.isSunk()).toBeFalsy();
});
