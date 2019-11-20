import Board from "./board";



class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.board = new Board(this.ctx); 
    this.canvas.focus();
    document.addEventListener("keydown", this.pressArrow.bind(this))
  }

  pressArrow(e) {
    console.log("pressed")
  e = e || window.event;

  if (e.keyCode == '38') {
    // slide up
  }
  else if (e.keyCode == '40') {
    // slide down
  }
  else if (e.keyCode == '37') {
    this.board.slideLeft();
  }
  else if (e.keyCode == '39') {
    this.board.slideRight();
    console.log("slide")
  }

}
  
}



export default Game;