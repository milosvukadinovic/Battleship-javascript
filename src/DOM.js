
const dom = (() => {
  
  const gridNode = (string) => {
    const grid = document.createElement('div');
    grid.setAttribute("id", string);
    grid.classList.add('grid-container', 'hidden');
    for (let i =0; i < 100; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.setAttribute('data', i);
      grid.appendChild(gridItem);
    }
    return grid;
  };

  const createGrid = (string) => {

    const gameStartContainer = document.getElementById('game-start');
    const grids = gridNode(string);
    gameStartContainer.appendChild(grids);
  };

  const hideForm = () => {
    document.getElementById("form-containerz").outerHTML = "";

  };
return {createGrid,gridNode, hideForm};
})();

module.exports = dom;
