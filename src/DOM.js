const dom = (() => {
  const createGrid = (context) => {
    const grid = document.createElement('div');
    grid.classList.add(context);
    grid.id = `${context}Board`;
    
    for (let i = 0; i < 100; i += 1) {
      const square = document.createElement('button');
      square.classList.add('square');
      square.id = `${context}-${i}`;
      square.innerHTML=i;

      if (c==9) {
        grid.appendChild(br);
      }
      grid.appendChild(square);
      c=c+1;
    }
    return grid;
  };

  const renderBoards = (players) => {
    const container = document.getElementById('container');
    players.forEach((player) => {
      const domBoard = createGrid(player.name);
      container.appendChild(domBoard);
    });
    return true;
  };

  return {createGrid, renderBoards};
})();
module.exports = dom;
