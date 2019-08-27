/*
So basically we have a board array which translates to dom,
range from 0-99 we split it so it looks 10x10
i wanned it this way because of moves(moves is not 0, but is 100 and declines
     from that, so its basically AVAILABLE MOVES) and random.
It isolates moves already made and randomises between empty ones.

You make a move by sending a coordinate from 0-99 depending on
which button you press, it sends it to attack and checks
everything on board, but registers it on player
 */

const player = (name) => {
  let moves = Array.from(Array(100).keys());
  const attack = (coordinates) => {
    if (moves.includes(coordinates)) {
      moves=moves.filter(function(e) {
        return e !== coordinates;
      });
      return coordinates;
    } else {
      return false;
    }
  };
  const computerAttack = () => {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    // remove the random move
    return attack(moves[randomMove]);
  };
  return {name, attack, computerAttack};
};

module.exports = player;
