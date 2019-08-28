const shipsModal = () => {
  const grid = document.createElement('div');
  grid.classList.add('grid-container', 'hidden');

  for (let i =0; i < 100; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    grid.appendChild(gridItem);
  }
  return grid;
};

export default shipsModal;
