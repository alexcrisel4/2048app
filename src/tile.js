
class Tile {
  constructor(ctx, value, position) {
    this.ctx = ctx; 
    this.value = value; 
    this. position = position; 
    this.draw();
  }

  draw() {
    
    if (this.value === 2) {
      this.ctx.fillStyle = "#dbead5"
    } else if (this.value === 4) {
      this.ctx.fillStyle = "#b7d5ac"
    } else if( this.value === 8) {
      this.ctx.fillStyle = "#93bf85";
    } else if( this.value === 16 ) {
      this.ctx.fillStyle = "#6eaa5e";
    } else if( this.value === 32) {
      this.ctx.fillStyle = "#469536"
    } else if (this.value === 64) {
      this.ctx.fillStyle = "#008000"
    } else if (this.value === 64) {
      this.ctx.fillStyle = "#2d7121"
    } else if (this.value === 128) {
      this.ctx.fillStyle = "#3c6232" 
    } else if (this.value === 256) {
      this.ctx.fillStyle = "#44533f" 
    } else if (this.value === 256) {
      this.ctx.fillStyle = "#49444b" 
    } else if (this.value === 512) {
      this.ctx.fillStyle = "#4a3356" 
    } else if (this.value === 1024) {
      this.ctx.fillStyle = "#482060"
    } 
     if (this.value < 16) {
       this.ctx.font = "60px Arial";
     } else if( this.value >= 16 && this.value <= 64) {
       this.ctx.font = "50px Arial";
     } else if (this.value > 64 && this.value <= 999) {
       this.ctx.font = "40px Arial"
     } else if (this.value > 999) {
       this.ctx.font = "30px Arial"
     }
    this.ctx.textAlign = "center";
    this.ctx.fillRect((100 * this.position[1]) + 5, (100 * this.position[0]) + 5, 90, 90)
    this.ctx.fillStyle = "white"
    
    this.ctx.fillText(this.value, (50 + 100 * this.position[1]), (65 + 100 * this.position[0]))
   
  }

}

export default Tile