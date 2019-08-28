import './stylesheets/styles.css';
import shipsModal from './game-start';
const dom = (() => {
  // const mainContainer = document.getElementById('container');
  const gameStartContainer = document.getElementById('game-start');
  const grid = shipsModal();
  // console.log(typeof grid);
  gameStartContainer.appendChild(grid);


  const renderBoards = (players) => {
    container.appendChild(shipsModal.gridBoard());
  };
  console.log('Webpack is working from this side');
  return {renderBoards};
})();

export default dom;
