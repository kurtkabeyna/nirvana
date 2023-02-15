import { Surface } from "./surface";
import { Movable } from "./interfaces/movable";
import { Drawable } from "./interfaces/drawable";
import { Vector2d } from "./vector2d";
import { updatePosition } from "utils/update";

export class Ground implements Surface, Movable, Drawable {
  initialX: number;
  initialY: number;
  y = 300;
  height = 150;

  constructor(public x, public width) {
    this.initialX = this.x;
    this.initialY = this.y;
  }

  draw() {
    fill(128, 128, 0);
    rect(this.x, this.y, this.width, this.height);
  }
  update(heroMovement: Vector2d) {
    updatePosition(this, heroMovement);
  }
}


