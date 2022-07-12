import { draw } from "sketch";
import { Vector2d } from "vector2d";

export class Log {
  constructor(public x, public y) {}

  update(heroMovement: Vector2d) {
    this.x = this.x - heroMovement.x;
  }

  draw() {
    fill("brown");
    rect(this.x, this.y, 100, 200);
  }
}
export class Circle {
  constructor(public x, public y) {}

  update(heroMovement) {
    this.x = this.x - heroMovement;
  }
  drawCircle() {
    fill("red");
    circle(this.x, this.y, 70);
  }
}

export class Hole {
  constructor(public x, public y) {}
  update(heroMovement) {
    this.x = this.x - heroMovement;
  }
  drawHole() {
    fill("grey");
    rect(this.x, this.y, 70, 100);
  }
}
