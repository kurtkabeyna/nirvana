import { Vector2d } from "../vector2d";
import { canvasHeight, canvasWidth } from "../consts";
import { Raindrop } from "../raindrop";
import { Movable } from "../interfaces/movable";
import { Drawable } from "../interfaces/drawable";

export class Cloud implements Movable, Drawable {
  initialX: number;
  initialY: number;
  drops: Raindrop[] = [];
  direction: number;

  constructor(public x: number, public y: number) {
    this.initialX = this.x;
    this.initialY = this.y;
    this.direction = 1;
  }
  dropRaindrops() {
    const N = Math.random() * 5 + 2;
    for (let i = 0; i < N; i++) {
      if (this.drops.length >= 1000) {
        const dropOutsideCanvas = this.drops.filter(
          (d) => d.y > canvasHeight || d.x > canvasWidth
        )[0];
        if (dropOutsideCanvas === undefined) {
          continue;
        }
        dropOutsideCanvas.x = this.x + i * 5;
        dropOutsideCanvas.y = this.y;
      } else {
        this.drops.push(new Raindrop(this.x + i * 5, this.y));
      }
    }
  }

  restart() {
    this.x = this.initialX;
    this.y = this.initialY;
  }


  moveRaindrops() {
    this.drops.forEach((drop) => drop.move());
  }

  move() {
    const dx = 1.2;
    this.x = this.x + dx * this.direction;
    this.moveRaindrops();
    if (this.x >= canvasHeight || this.x <= 0) {
      this.direction = this.direction * -1;
    }
  }

  draw() {
    this.drops.forEach((drop) => drop.draw());
    fill("grey");
    noStroke();
    circle(this.x + 5, this.y + 20, 32);
    circle(this.x + 25, this.y + 20, 32);
    circle(this.x + 15, this.y + 15, 32);
    circle(this.x + 15, this.y + 25, 29);
  }

  update(heroMovement: Vector2d) {
    this.x = this.x - heroMovement.x;
    this.y = this.y - heroMovement.y;
    return this;
  }
}
