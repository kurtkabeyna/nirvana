import { updatePosition } from "utils/update";
import { Drawable } from "../interfaces/drawable";
import { Movable } from "../interfaces/movable";
import { Surface } from "../surface";
import { Vector2d } from "../vector2d";

export class Landscape implements Surface, Movable, Drawable {
  initialX: number;
  initialY: number;
  width = 400;
  height = 150;
  constructor(public x: number, public y: number) {
    this.initialX = this.x;
    this.initialY = this.y;
  }
  draw() {
    fill("#5EE1B1");
    rect(this.x, this.y, this.width, this.height);
  }
  update(heroMovement: Vector2d) {
    updatePosition(this, heroMovement);
  }
}
