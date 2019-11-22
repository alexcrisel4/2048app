import Board from "./board";

class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.board = new Board(this.ctx); 
    this.canvas.focus();
    document.addEventListener("keydown", this.pressArrow.bind(this))
  }

  createButton () {
    let button = document.getElementById("button");
    button.classList.add("game-over")
  }
  pressArrow(e) {
    
  e = e || window.event;

  if (e.keyCode == '38') {
    this.board.grid = this.board.slideUp(this.board.grid);
    this.board.grid = this.board.combineUp(this.board.grid);
    this.board.draw();
    if(this.board.boardFull(this.board.grid)) {
      
      this.board.addNumber(this.board.grid)
      this.createButton();
    }
  }
  else if (e.keyCode == '40') {
    this.board.grid = this.board.slideDown(this.board.grid);
    this.board.grid =this.board.combineDown(this.board.grid);
    this.board.draw();
    if (this.board.boardFull(this.board.grid)) {
      this.board.addNumber(this.board.grid)
      this.createButton();
    }
  }
  else if (e.keyCode == '37') {
    this.board.grid = this.board.slideLeft(this.board.grid);
    this.board.grid = this.board.combineLeft(this.board.grid);
    this.board.draw();
    if (this.board.boardFull(this.board.grid)) {
      this.board.addNumber(this.board.grid)
      this.createButton();
    }
  }
  else if (e.keyCode == '39') {
   this.board.grid = this.board.slideRight(this.board.grid);
   this.board.grid = this.board.combineRight(this.board.grid);
   this.board.draw()
    if (this.board.boardFull(this.board.grid)) {
      this.board.addNumber(this.board.grid)
      this.createButton();
    }
  }

}
  
}



export default Game;