import './stylesheets/styles.css';
import shipsModal from './game-start';
const dom = (() => {
  const renderBoards = (players) => {
    const container = document.getElementById('container');
    container.appendChild(shipsModal.gridBoard());
    shipsModal.show();
  };
  console.log('Webpack is working from this side');
  return {renderBoards};
})();

export default dom;
