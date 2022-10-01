import { Surface } from "./ground";
import { Vector2d } from "./vector2d";
export class Landscape  implements Surface {
  initialX: number;
  initialY: number;
  width = 400;
  height = 150;
  constructor(public x,public y) {
    this.initialX = this.x;
    this.initialY = this.y;
  }
  draw() {
    fill("#5EE1B1");
    rect(this.x, this.y, this.width, this.height);
  }
  update(heroMovement: Vector2d) {
    this.x = this.x - heroMovement.x;
    this.y = this.y - heroMovement.y;
  }
}
