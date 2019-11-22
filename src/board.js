import Tile from './tile';

class Board {
  constructor(ctx) {
    this.ctx = ctx
    this.grid = [[null, null, null, null],
                  [null, null, null, null],
                  [null, null, null, null],
                  [null, null, null, null]]

  this.slid = false;
  this.slidVert = false 
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
  if(options.length > 0) {
    let possibleValues = [2, 4]
    let num = possibleValues[Math.floor(Math.random() * possibleValues.length)];
  let newNum = options[Math.floor(Math.random() * options.length)];
  grid[newNum[0]][newNum[1]] = new Tile(this.ctx, num, [newNum[0],newNum[1]] );
  console.log(grid)
  } else {
    
  }
};

draw() {
  this.ctx.clearRect(0,0, 400, 400);
  this.ctx.strokeStyle="black";
  this.ctx.lineWidth=10;
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
  this.slid = false
  grid.forEach((row, i) => {
    let array = row.filter(num => num);
    let numEmpty = 4 - array.length;
    let empty = Array(numEmpty).fill(null);
    let newRow = empty.concat(array)
    newRow.forEach((tile, j) => { 
      if (tile) {  
        if(tile.position[1] != j) this.slid = true;
        tile.position = [i, j];
      }
    })
    grid[i] = newRow;
  })
  return grid;
}

  slideLeft(grid) {
    this.slid = false
      grid.forEach((row, i) => {
      let array = row.filter(num => num);
      let numEmpty = 4 - array.length;
      let empty = Array(numEmpty).fill(null);
      let newRow = array.concat(empty)
      newRow.forEach((tile, j) => {
        if (tile) {
          if (tile.position[1] != j) this.slid = true
          tile.position = [i, j];
          
        }
      })
     
      grid[i] = newRow;
    })
    return grid;
  }

  slideUp(grid) {
    
   let transposedGrid = [[null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null],
                        [null, null, null, null]];
    grid.forEach((row, i) => {
      row.forEach((tile, j) => {
        // if (tile.position[0] != j) this.slid = true;
        transposedGrid[j][i] = tile;
      })
    })
    let newGrid = this.slideLeft(transposedGrid);
    this.slid = false;
    newGrid.forEach((row, i) => {
      row.forEach((tile, j) => {
        if (newGrid[j][i] != grid[i][j]) this.slid = true;
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
    this.slid = false 
    newGrid.forEach((row, i) => {
      row.forEach((tile, j) => {
        if(newGrid[j][i] != grid[i][j]) this.slid = true;
        grid[j][i] = tile;
        if (tile) {
          // if (tile.position[1] != j) this.slid = true;
          tile.position = [j, i];
        }
      })
    })
    return grid;
  }

  combineRight(grid) {
    let combined = false 
    for( let i = 3; i >= 0; i--) {
      for( let j = 3; j >= 0; j--) {
        if (grid[i][j] && grid[i][j - 1] && grid[i][j].value === grid[i][j - 1].value) {
          grid[i][j].value = grid[i][j].value * 2;
          grid[i][j - 1] = null;
          combined = true;
        }
      }
    } 
    if(combined || this.slid) {
      this.slideRight(grid)
      this.addNumber(this.grid)
    }
    return grid;
  }

  combineLeft(grid) {
    let combined = false; 
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (grid[i][j] && grid[i][j +1] && grid[i][j].value === grid[i][j + 1].value) {
          combined = true;
          grid[i][j].value = grid[i][j].value * 2;
          grid[i][j + 1] = null;
        }
      }
    }
    if(combined || this.slid) {
      this.slideLeft(grid)
      this.addNumber(this.grid)
    }
    return grid;
  }

  combineUp(grid) {
    let combined = false
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j <= 3; j++) {
        if (grid[i][j] && grid[i + 1][j] && grid[i][j].value === grid[i + 1 ][j].value) {
          grid[i + 1][j].value = grid[i][j].value * 2;
          grid[i][j] = null;
          combined = true; 
        }
      }
    }
    if(combined || this.slid) {
      this.slideUp(grid)
      this.addNumber(this.grid);
    }
    return grid
  }

  combineDown(grid) {
    let combined = false 
    for (let j = 3; j >= 0; j--) {
      for (let i = 3; i > 0; i--) {
        if (grid[i][j] && grid[i - 1][j] && grid[i][j].value === grid[i - 1][j].value) {
          grid[i - 1][j].value = grid[i][j].value * 2;
          grid[i][j] = null;
          combined = true;
        }
      }
    }
    if(combined || this.slid) {
      console.log(combined);
      console.log(this.slid);
      this.slideDown(grid)
      this.addNumber(this.grid)
    }
   return grid;
  }


}

export default Board


 






