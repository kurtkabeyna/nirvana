import { updatePosition } from "../utils/update";
import { Drawable } from "../interfaces/drawable";
import { Movable } from "../interfaces/movable";
import { GameObject } from "../gameObject";
import { Vector2d } from "../vector2d";
import { OBSTACLE_SYMBOL } from "../consts";

export class Landscape implements GameObject, Movable, Drawable {
  initialX: number;
  initialY: number;
  width = 400;
  height = 150;
  constructor(public x: number, public y: number) {
    this.initialX = this.x;
    this.initialY = this.y;
  }
  minimapSymbol: string = OBSTACLE_SYMBOL;
  minimapPosition: [number, number];
  draw() {
    fill("#5EE1B1");
    rect(this.x, this.y, this.width, this.height);
  }
  update(heroMovement: Vector2d) {
    updatePosition(this, heroMovement);
  }
}
