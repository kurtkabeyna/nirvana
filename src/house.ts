import { Vector2d } from "./vector2d";

export class House {
  initialX: number;
  initialY: number;
  restart(tHouse) {
    this.x = this.initialX;
    this.y = this.initialY;
  }

  constructor(public x, public y) {
    this.initialX = this.x;
    this.initialY = this.y;
  }
  update(heroMovement: Vector2d) {
    this.x = this.x - heroMovement.x;
    this.y = this.y - heroMovement.y;
  }

  draw() {
    fill(234, 123, 1);
    rect(this.x, this.y, 140, 140); // + 140
    fill(255, 182, 193);
    rect(this.x + 35, this.y + 40, 70, 70); // + 140
    fill(0, 0, 0);
    rect(this.x + 65, this.y + 40, 10, 70); // + 140
    rect(this.x + 35, this.y + 70, 70, 10); // + 140
    fill(165, 42, 42);
    triangle(
      this.x + 180,
      this.y, // + 140
      this.x - 40,
      this.y, // + 140
      this.x + 70,
      this.y - 100 // + 140
    );
  }
}
