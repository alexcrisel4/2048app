
class Tile {
  constructor(ctx, value, position) {
    this.ctx = ctx; 
    this.value = value; 
    this. position = position; 
    this.draw();
  }

  draw() {
    if( this.value < 32) {
      this.ctx.font = "60px Arial";
    } else {
      this.ctx.font = "50px Arial"
    }
   
    this.ctx.fillText(this.value, (30 + 100 * this.position[1]), (65 + 100 * this.position[0]))
  }

}

export default Tile