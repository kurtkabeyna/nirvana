import { Drawable } from "../interfaces/drawable";
import { Movable } from "../interfaces/movable";
import { Vector2d } from "../vector2d";

export class Log implements Movable, Drawable {
  constructor(public x: number, public y: number) { }

  update(heroMovement: Vector2d) {
    this.x = this.x - heroMovement.x;
  }

  draw() {
    fill("purple");
    rect(this.x, this.y, 10, 100);
  }
}
