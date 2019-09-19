/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
import './stylesheets/styles.css';

const ship = require('./ship');
const gameBoard = require('./gameBoard');
const player = require('./player');
const dom = require('./DOM');

const gameLoop = () => {
  const gameBoards = [gameBoard(), gameBoard()];
  dom.createGrid('playerBoard');
  const players = [player('Player'), player('Computer')];
  const setButtons = document.getElementsByClassName('setButton');
  window.alert(
    'Hello and welcome to Battleship game! Start'
       + 'the game by typing the coordinates from A-J plus 0-9.',
  );
  for (let i = 0; i < setButtons.length; i++) {
    setButtons[i].onclick = (event) => {
      const coordinates = document.getElementsByClassName('ship-input');
      const position = document.getElementsByClassName('position-input');
      const index = event.target.getAttribute('data');
      const array = coordinates[index].value.split('');
      const shipCoordinates = createCoordinates(array);
      if (shipCoordinates !== false) {
        const ships = ship(6 - index);
        removeShipFromFleet(ships.length);
        const success = gameBoards[0].place(
          shipCoordinates,
          ships,
          position[index].value,
        );
        if (!success) {
          window.alert('Wrong coordinates!');
        }
        refreshGrid();
      }
    };
  }

  const removeButtons = document.getElementsByClassName('removeButton');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].onclick = (event) => {
      const index = event.target.getAttribute('data');
      removeShipFromFleet(6 - index);
      refreshGrid();
    };
  }

  const removeShipFromFleet = (shipLength) => {
    for (let i = 0; i < gameBoards[0].fleet.length; i++) {
      if (gameBoards[0].fleet[i].ship.length === shipLength) {
        for (let j = 0; j <= gameBoards[0].fleet[i].pos.length; j += 1) {
          gameBoards[0].board[gameBoards[0].fleet[i].pos[j]] = 'o';
        }
        gameBoards[0].fleet.splice(i, 1);
        refreshGrid();
        return true;
      }
    }
    return false;
  };

  const refreshGrid = () => {
    const boardBoxes = document.getElementsByClassName('playerBoardItem');
    for (let i = 0; i < gameBoards[0].board.length; i++) {
      if (gameBoards[0].board[i] === 'o') {
        boardBoxes[i].style.background = null;
      } else {
        boardBoxes[i].style.background = 'red';
      }
    }
    for (let i = 0; i < gameBoards[0].misses.length; i++) {
      boardBoxes[gameBoards[0].misses[i]].style.background = 'yellow';
    }
    for (let i = 0; i < gameBoards[0].hits.length; i++) {
      boardBoxes[gameBoards[0].hits[i]].style.background = 'green';
    }
  };

  const refreshGrids = () => {
    const boardBoxes = document.getElementsByClassName('computerBoardItem');
    for (let i = 0; i < gameBoards[1].misses.length; i++) {
      boardBoxes[gameBoards[1].misses[i]].style.background = 'yellow';
    }
    for (let i = 0; i < gameBoards[1].hits.length; i++) {
      boardBoxes[gameBoards[1].hits[i]].style.background = 'green';
    }
  };

  const addListeners = () => {
    const index = event.target.getAttribute('data');
    const playerMove = players[0].attack(parseInt(index));
    const recieve = gameBoards[1].receiveAttack(playerMove);
    const loseComputer = gameBoards[1].sunkFleet();
    if (loseComputer === true) {
      window.alert('You win, congratulations!');
      const boxes = document.getElementsByClassName('computerBoardItem');
      for (const box of boxes) {
        box.removeEventListener('click', addListeners);
      }
    }
    if (recieve !== true) {
      let computerMove = players[1].computerAttack();
      let recieveComputer = gameBoards[0].receiveAttack(computerMove);
      while (recieveComputer === true) {
        computerMove = players[1].computerAttack();
        recieveComputer = gameBoards[0].receiveAttack(computerMove);
        const lose = gameBoards[0].sunkFleet();
        if (lose === true) {
          window.alert('You lose!');
          recieveComputer = false;
          const boxes = document.getElementsByClassName('computerBoardItem');
          for (const box of boxes) {
            box.removeEventListener('click', addListeners);
          }
        }
      }
      const lose = gameBoards[0].sunkFleet();
      if (lose === true) {
        window.alert('You lose!');
        const boxes = document.getElementsByClassName('computerBoardItem');
        for (const box of boxes) {
          box.removeEventListener('click', addListeners);
        }
      }
    }
    refreshGrids();
    refreshGrid();
    event.target.removeEventListener('click', addListeners);
  };

  document
    .getElementsByClassName('btn-start-game')[0]
    .addEventListener('click', () => {
      if (gameBoards[0].fleet.length === 5) {
        startGame();
      } else {
        window.alert('You didn\'t place all your ships.');
      }
    });

  const createCoordinates = (array) => {
    const number = parseInt(array[1], 10);
    if (array.length === 0) {
      window.alert('Wrong input');
      return false;
    }
    switch (array[0].toUpperCase()) {
      case 'A':
        return number;
      case 'B':
        return 10 + number;
      case 'C':
        return 20 + number;
      case 'D':
        return 30 + number;
      case 'E':
        return 40 + number;
      case 'F':
        return 50 + number;
      case 'G':
        return 60 + number;
      case 'H':
        return 70 + number;
      case 'I':
        return 80 + number;
      case 'J':
        return 90 + number;

      default:
        window.alert('Wrong input');
        return false;
    }
  };

  const startGame = () => {
    dom.createGrid('computerBoard');
    dom.hideForm();
    const boxes = document.getElementsByClassName('computerBoardItem');
    for (const box of boxes) {
      box.addEventListener('click', addListeners);
    }
    for (let i = 2; i < 7; i += 1) {
      const shipCreate = ship(i);
      const placement = gameBoards[1].randomPlacement(i);
      const success = gameBoards[1].place(
        placement.coor,
        shipCreate,
        placement.position,
      );
      if (!success) {
        i--;
      }
    }
    return true;
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

  return {
    gameLoop,
    gameBoards,
    winner,
  };
};

export { gameLoop };
