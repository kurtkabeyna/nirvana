import { Vector2d } from "./vector2d";
import { canvasHeight, canvasWidth } from "./consts";

import { Raindrop } from "./raindrop";

export class Cloud {
  restart() {
    this.x = this.initialX;
    this.y = this.initialY;
  }
  initialX: number;
  initialY: number;
  drops: Raindrop[] = [];
  direction;

  constructor(public x, public y) {
    this.initialX = this.x;
    this.initialY = this.y;
    this.direction = 1;
  }
  dropRaindrops() {
    const N = random(5, 7);
    for (let i = 0; i < N; i++) {
      if (this.drops.length >= 1000) {
        const dropOutsideCanvas = this.drops.filter(
          (d) => d.y > canvasHeight || d.x > canvasWidth
        )[0];
        if (dropOutsideCanvas == undefined) {
          continue;
        }
        dropOutsideCanvas.x = this.x + i * 5;
        dropOutsideCanvas.y = this.y;
      } else {
        // x
        // x + 5
        // x + 5 + 5

        this.drops.push(new Raindrop(this.x + i * 5, this.y));
      }
    }
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
  //змінювати краплі через move()
  //та raindrop
  //зробити краплю на  2 місці
  draw() {
    this.drops.forEach((drop) => drop.draw());
    fill("grey");
    noStroke();
    circle(this.x + 5, this.y + 20, 32); //ліве
    circle(this.x + 25, this.y + 20, 32); //праве
    circle(this.x + 15, this.y + 15, 32); //середнє
    circle(this.x + 15, this.y + 25, 29); //нижнє
  }
  update(heroMovement: Vector2d) {
    this.x = this.x - heroMovement.x;
    this.y = this.y - heroMovement.y;
    return Cloud;
  }
}
