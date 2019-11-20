
class Tile {
  constructor(ctx, value, position) {
    this.ctx = ctx; 
    this.value = value; 
    this. position = position; 
    this.draw();
  }

  draw() {
    
    this.ctx.font = "60px Arial";
    this.ctx.fillText(this.value, (30 + 100 * this.position[1]), (65 + 100 * this.position[0]))
  }

}

export default Tile