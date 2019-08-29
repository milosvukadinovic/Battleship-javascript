import './stylesheets/styles.css';
import gridNode from './grid-generator';
const dom = (() => {
  // Part 1 Getting the info from the user basically settting the position of
  // the boards
  // const mainContainer = document.getElementById('container');
  const gameStartContainer = document.getElementById('game-start');
  const grid = gridNode();

  // console.log(typeof grid);
  gameStartContainer.appendChild(grid);

  const renderBoards = (players) => {
    container.appendChild(grid);
  };

  // listeners area
  document.getElementsByClassName('btn-start-game')[0]
      .addEventListener('click', (e)=>{
        const val = e.target.innerText;
        console.log(val);
      });
  return {renderBoards};
})();

export default dom;
