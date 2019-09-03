
const player = (name) => {
  let moves = Array.from(Array(100).keys());
  const attack = (coordinates) => {
    if (moves.includes(coordinates)) {
      moves=moves.filter(function(e) {
        return e !== coordinates;
      });
      return coordinates;
    } else {
      return coordinates;
    }
  };
  const computerAttack = () => {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return attack(randomMove);
  };
  return {name, attack, computerAttack};
};

module.exports = player;
