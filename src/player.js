/* eslint-disable */
const player = (name) => {
  let moves = Array.from(Array(100).keys());
  const attack = (coordinates) => {
    if (moves.includes(coordinates)) {
      moves = moves.filter((e) => e !== coordinates);
      return coordinates;
    }
    return false;
  };
  const computerAttack = () => {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return attack(randomMove);
  };
  return { name, attack, computerAttack };
};

module.exports = player;
