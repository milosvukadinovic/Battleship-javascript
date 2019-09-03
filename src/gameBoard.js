const gameBoard = () => {
  const board = Array.from(Array(100).fill('o'));
  const fleet = [];
  const hits = [];
  const misses = [];
  const findShip = (coor) => {
    if (board[coor]=='o') {
      return false;
    } else {
      return [board[coor], coor];
    }
  };


  const place = (coor, ship, position) => {
    secret=(coor).toString(10).split('').map(function(t) {
      return parseInt(t);
    } );
    
    if (coor > 99 || coor < 0) {
      return false;
    }
    
    if (position== 'Horizon') {
      if (secret[1]>9-ship.length) {
        return false;
      }
    } else {
      if (secret[0]>9-ship.length) {
        return false;
      }
    }
    for (let i = 0; i < ship.length; i += 1) {
      if (position=='Vertical') {
        if (board[coor+i*10]!='o') {
          return false;
        }
      } else {
        if (board[coor+i]!='o') {
          return false;
        }
      }
    }
    const newFleetMem = {};
    let mult=1;
    if (position=='Vertical') {
      mult=10;
    } else {
      mult=1;
    }
    newFleetMem.pos=[];
    for (let i = 0; i < ship.length; i += 1) {
      newFleetMem.pos.push(coor+(mult*i));
    }
    newFleetMem.ship = ship;
    fleet.push(newFleetMem);
    for (let i = 0; i < ship.length; i += 1) {
      board[coor+(mult*i)]=fleet.length-1;
    }
    return true;
  };

  const receiveAttack = (coor) => {
    const shoot = findShip(coor);
    if (shoot === false) {
      misses.push(coor);
    } else {
      const shipId = shoot[0];
      const hitBox = parseInt(shoot[1], 10);
      const x=fleet[shipId].pos.indexOf(hitBox);
      fleet[shipId].ship.hit(x);
      
      hits.push(coor);
    }
    return true;
  };
  const randomPlacement = (length) => {
    const sideWays = Math.floor(Math.random() * 2);
    if (sideWays === 0) {
      const x = Math.floor(Math.random() * (10-length));
      const y = Math.floor(Math.random() * 10);
      return {coor: (10*y+x), position: 'Horizon'};
    }
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * (10-length));
    return {coor: (10*y+x), position: 'Vertical'};
  };


  const sunkFleet = () => fleet.every((
      member)=> member.ship.isSunk() === true);

  return {
    fleet, hits, misses, place, receiveAttack, sunkFleet, 
    randomPlacement, board,
  };
};

module.exports = gameBoard;
