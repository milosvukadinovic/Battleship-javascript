import './stylesheets/styles.css';
import gridNode from './grid-generator';
const dom = (() => {
  const gameStartContainer = document.getElementById('game-start');
  const grid = gridNode();
  gameStartContainer.appendChild(grid);

  const renderBoards = (players) => {
    container.appendChild(grid);
  };


  return {renderBoards};
})();

export default dom;
