// I think we can add this to DOM file?

const gridNode = () => {
  const grid = document.createElement('div');
  grid.classList.add('grid-container', 'hidden');

  for (let i =0; i < 100; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.setAttribute('data', i);
    grid.appendChild(gridItem);
  }


  const renderBoards = () => {
    console.log('herooooo');
    const startGame = document.getElementById('game-play');
    const grid = gridNode();
    startGame.appendChild(grid);
  };

  return grid, renderBoards;
};

export default gridNode;
