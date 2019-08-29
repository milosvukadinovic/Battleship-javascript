const ship = require('./ship');
const gameBoard = require('./gameBoard');
const player = require('./player');
const dom = require('./DOM');
// so the gameplay loop goes like this and should be followed.
// Window opens with data ready to be entered(aka name and ships to be placed)
// 1.boards are initialized and waits for ships to be placed.


const gameLoop = () => {

  const container = document.getElementById('container');
  const gameBoards = [gameBoard(), gameBoard()];

  // const board= dom.createGrid('milos');
  // container.appendChild(board);
  // when start button gets pressed
  const startGame = () => {
    const player = player(document.getElementById('player-name').value);
    // loop and put all ships into fleet. players one.
    // creating ships does the player on button, you just fill.
    // player


    // computer
    for (let i = 2; i < 7; i += 1) {
      const ship=ship(i);
      const placement=gameBoards[1].randomPlacement(i);
      const success = gameBoards[1].place(placement.coor, ship,
          placement.position);
      if (!success) {
        return false;
      }
    }
  };


  const winner = () => {
    if (gameBoards[0].sunkFleet()) {
      return players[1].name;
    }
    if (gameBoards[1].sunkFleet()) {
      return players[0].name;
    }
    return false;
  };


  //   const attackListener = () => {
  //     const computerBoard = document.getElementById(`computerBoard`);
  //     enemyBoard.onclick = (event) => {
  //       const validAttack = players[0].attack(event.id);
  // change event id to match argument
  //       if (validAttack && !winner()) {
  //         gameBoards[1].receiveAttack(validAttack);
  //         compMove = players[1].randomMove();
  //       }

  //   };
  // }

  return {
    gameLoop, gameBoards, winner,
  };
};

module.exports = gameLoop;
