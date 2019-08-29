const ship = require('./ship');
const gameBoard = require('./gameBoard');
const player = require('./player');
const dom = require('./DOM');


const gameLoop = () => {
  const container = document.getElementById('container');
  const gameBoards = [gameBoard(), gameBoard()];

  // Add ship button, adds to board, fleet and calls for grid colors
  const setButtons = document.getElementsByClassName(`setButton`);
  for (let i = 0; i < setButtons.length; i++) {
    setButtons[i].onclick = (event) => {
      const coordinates = document.getElementsByClassName(`ship-input`);
      const position = document.getElementsByClassName(`position-input`);
      const index=event.target.getAttribute('data');
      const array=coordinates[index].value.split('');
      const shipCoordinates= createCoordinates(array);
      const ships=ship(6-index);
      const success = gameBoards[0].place(shipCoordinates, ships,
          position[index].value);
      if (!success) {
        console.log('sfdsd');
        return false;
      }
      addShipOnGrid(shipCoordinates, ships,
          position[index].value);
    };
  }
  // Remove ship button, removes from board, fleet and calls for grid cleanup
  const removeButtons = document.getElementsByClassName(`removeButton`);
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].onclick = (event) => {
      const coordinates = document.getElementsByClassName(`ship-input`);
      const position = document.getElementsByClassName(`position-input`);
      const index=event.target.getAttribute('data');
      const array=coordinates[index].value.split('');
      const shipCoordinates= createCoordinates(array);
      const ships=ship(6-index);
      for (let i=0; i<gameBoards[0].fleet.length; i++) {
        if (gameBoards[0].fleet[i].ship.length==6-index) {
          gameBoards[0].fleet.splice(i, 1);
          removeShipOnGrid(shipCoordinates, ships,
              position[index].value);
          console.log('it works damnit');
          let mult=1;
          if (position[index]=='Vertical') {
            mult=10;
          } else {
            mult=1;
          }
          console.log(gameBoards[0]);
          for (let i = 0; i < ships.length; i += 1) {
            gameBoards[0].board[shipCoordinates+(mult*i)]= 'o';
          }
          return true;
        }
      }
    };
  }

  // Adds ship on grid
  const addShipOnGrid = (coordinates, shipModel, position) => {
    const boardBoxes= document.getElementsByClassName('grid-item');
    let coordinationVariable= coordinates;

    for (let i=0; i<shipModel.length; i++) {
      boardBoxes[coordinationVariable].style.background = 'red';
      if (position=='Horizon') {
        coordinationVariable=coordinationVariable+1;
      } else {
        coordinationVariable=coordinationVariable+10;
      }
    }
  };

  // Removes ship from grid
  const removeShipOnGrid = (coordinates, shipModel, position) => {
    const boardBoxes= document.getElementsByClassName('grid-item');
    let coordinationVariable= coordinates;

    for (let i=0; i<shipModel.length; i++) {
      boardBoxes[coordinationVariable].style.background = null;
      if (position=='Horizon') {
        coordinationVariable=coordinationVariable+1;
      } else {
        coordinationVariable=coordinationVariable+10;
      }
    }
  };

  // Start game button, checks if fleet is full
  // should hide form, call for computer to generate his ships
  // and pop up his board, start the game.

  document.getElementsByClassName('btn-start-game')[0]
      .addEventListener('click', (e)=>{
        if (gameBoards[0].fleet.length==5) {
          console.log('frig yes');
        } else {
          console.log('frig no');
        }
      });

  // Function that takes E2 for example and returns 42
  // takes input coordinates and gives back actual number.
  const createCoordinates = (array) => {
    const number=parseInt(array[1], 10);
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

  // should be called on start game button, still needs work
  const startGame = () => {
    const player = player(document.getElementById('player-name').value);

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

  // winning conditions
  const winner = () => {
    if (gameBoards[0].sunkFleet()) {
      return players[1].name;
    }
    if (gameBoards[1].sunkFleet()) {
      return players[0].name;
    }
    return false;
  };

  return {
    gameLoop, gameBoards, winner,
  };
};

module.exports = gameLoop;
