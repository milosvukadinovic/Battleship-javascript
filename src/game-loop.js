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
  // adding listeners to coordinates
  const setButtons = document.getElementsByClassName(`setButton`);
  for (let i = 0; i < setButtons.length; i++) {
    setButtons[i].onclick = (event) => {
      const coordinates = document.getElementsByClassName(`ship-input`);
      const position = document.getElementsByClassName(`position-input`);
      const index=event.target.getAttribute('index');
      const array=coordinates[index].value.split('');
      const shipCoordinates= createCoordinates(array);
      
      const ships=ship(6-index);
      const success = gameBoards[0].place(shipCoordinates, ships,
          position[index]);
      if (!success) {
        console.log('sfdsd');
        return false;
      }
      console.log(ships);
    };
    // adding listeners to deleting ships coordinates
    const removeButtons = document.getElementsByClassName(`removeButton`);
    for (let i = 0; i < removeButtons.length; i++) {
      removeButtons[i].onclick = (event) => {
        const coordinates = document.getElementsByClassName(`ship-input`);
        const index=event.target.getAttribute('index');
        console.log(coordinates[index].value);
      };
    }
  }

  const createCoordinates = (array) => {
    const number=parseInt(array[1], 10)
    switch (array[0]) {
      case 'A':
        return number;
      case 'B':
        return (10+number);
      case 'C':
        return (20+number);
      case 'D':
        return (30+number);
      case 'E':
        return (40+number);
      case 'F':
        return (50+number);
      case 'G':
        return (60+number);
      case 'H':
        return (70+number);
      case 'I':
        return (80+number);
      case 'J':
        return (90+number);

      default:
      // code block
    }
  };

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
  //       const validAttack = players[0].attack(event.id); // change event id to match argument
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
