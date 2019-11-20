import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d")
  let game = new Game(canvas, ctx);
})