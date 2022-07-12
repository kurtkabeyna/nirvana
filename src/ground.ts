import { Vector2d } from "vector2d";

export class Ground {
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
    this.x = this.x - heroMovement.x;
    this.y = this.y - heroMovement.y;
  }
}

export interface Surface {
  x: number;
  y: number;
  height: number;
}

interface Hero {
  x: number;
  y: number;
}

export function isBelowSurface(surface: Surface, item: Hero) {
  if (surface.y + surface.height < item.y) {
    return true;
  }
  return false;
}
