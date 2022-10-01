import { canvasHeight, canvasWidth } from "./consts";

export class Raindrop {
  constructor(public x, public y) { }

  move() {
    let dr = 1;

    if (this.x >= canvasWidth || this.x <= 0) {
      dr = dr * -1;
    } else {
      dr = dr - 1;
    }
    this.x = this.x + dr;
    this.y = this.y + 4.6;
  }
  draw() {
    fill(32, 178, 170);
    ellipse(this.x, this.y, 3);
  }

  animate() { }
}