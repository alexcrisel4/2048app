import Tile from './tile';

class Board {
  constructor(ctx) {
    this.ctx = ctx
    this.grid = [[null, null, null, null],
                  [null, null, null, null],
                  [null, null, null, null],
                  [null, null, null, null]]


  this.addNumber(this.grid);
  this.addNumber(this.grid);
  this.draw();
  }

  
addNumber(grid) {
  let options = []
  for( let i = 0; i < 4; i ++ ) {
    for( let j = 0; j < 4; j ++ ) {
      if(grid[i][j] === null ) {
        options.push([i,j])
      }
    }
  };

  let newNum = options[Math.floor(Math.random() * options.length)];
  grid[newNum[0]][newNum[1]] = new Tile(this.ctx, 2, [newNum[0],newNum[1]] );
};

draw() {
  this.ctx.clearRect(0,0, 400, 400);
  this.ctx.strokeStyle="black";
  this.ctx.lineWidth=8;
  for (let i = 0; i <= 400; i=i+100 ) {
    this.ctx.moveTo(i,0);
    this.ctx.lineTo(i, 400);
    this.ctx.stroke();
  }
  for( let j = 0; j <= 400; j=j+100 ) {
    this.ctx.moveTo(0, j);
    this.ctx.lineTo(400, j);
    this.ctx.stroke();
  }
  
  this.grid.forEach(row => {
    row.forEach(pos => {
      if(pos)
      pos.draw()
    })
  })
  
}

slideRight(grid) {
  grid.forEach((row, i) => {
    let array = row.filter(num => num);
    let numEmpty = 4 - array.length;
    let empty = Array(numEmpty).fill(null);
    let newRow = empty.concat(array)
    newRow.forEach((tile, j) => { 
      if (tile) {
        tile.position = [i, j];
      }
    })
    grid[i] = newRow;
  })
  this.addNumber(grid)
  return grid;
}

  slideLeft(grid) {
      grid.forEach((row, i) => {
      let array = row.filter(num => num);
      let numEmpty = 4 - array.length;
      let empty = Array(numEmpty).fill(null);
      let newRow = array.concat(empty)
      newRow.forEach((tile, j) => {
        if (tile) {
          tile.position = [i, j];
        }
      })
     
      grid[i] = newRow;
    })
    this.addNumber(grid);
    return grid;
  }

  slideUp(grid) {
   let transposedGrid = [[null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null]];
    grid.forEach((row, i) => {
      row.forEach((tile, j) => {
        transposedGrid[j][i] = tile;
      })
    })
    let newGrid = this.slideLeft(transposedGrid);
    newGrid.forEach((row, i) => {
      row.forEach((tile, j) => {
        grid[j][i] = tile;
        if(tile) {
        tile.position = [j,i];
        }
      })
    })
    return grid;
  }
  slideDown(grid) {
    let transposedGrid = [[null, null, null, null],
                          [null, null, null, null],
                          [null, null, null, null],
                          [null, null, null, null]];
    grid.forEach((row, i) => {
      row.forEach((tile, j) => {
        transposedGrid[j][i] = tile;
      })
    })
    let newGrid = this.slideRight(transposedGrid);
    newGrid.forEach((row, i) => {
      row.forEach((tile, j) => {
        grid[j][i] = tile;
        if (tile) {
          tile.position = [j, i];
        }
      })
    })
    return grid;
  }

}

export default Board


 






