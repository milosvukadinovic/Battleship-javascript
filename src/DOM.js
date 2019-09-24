/* eslint-disable */

const dom = (() => {
  const gridNode = (string) => {
    const grid = document.createElement('div');
    grid.setAttribute('id', string);
    grid.classList.add('grid-container', 'hidden');

    for (let i = 0; i < 100; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      if (string === 'computerBoard') {
        gridItem.classList.add('computerBoardItem');
      } else {
        gridItem.classList.add('playerBoardItem');
      }
      gridItem.setAttribute('data', i);

      grid.appendChild(gridItem);
    }

    return grid;
  };

  const createGrid = (string) => {
    const footercontainer = document.getElementById('footerID');
    const gameStartContainer = document.getElementById('game-start');
    if (string === 'computerBoard') {
      const header = document.getElementById('headerID');
      const button = document.createElement('button');
      button.classList.add('btn-start-game');
      button.setAttribute('onClick', 'window.location.reload()');
      button.innerHTML = 'Reset game';
      footercontainer.appendChild(button);
      header.style.display = 'block';
    }
    const grids = gridNode(string);
    gameStartContainer.appendChild(grids);
  };

  const hideForm = () => {
    document.getElementById('form-containerz').outerHTML = '';
  };
  return { createGrid, gridNode, hideForm };
})();

module.exports = dom;
