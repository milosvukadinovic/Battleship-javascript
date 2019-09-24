/* eslint-disable */
const ship = (length) => {
  const body = new Array(length).fill(false, 0);
  const hit = (x) => {
    if (body[x] === false) {
      body[x] = true;
      return true;
    }
    return false;
  };
  const isSunk = () => body.every((part) => part === true);
  return {
    length, hit, isSunk, body,
  };
};
module.exports = ship;
