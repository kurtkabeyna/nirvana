import { Vector2d } from "./vector2d";

export class Circle {
    constructor(public x: number, public y: number) { }

    update(heroMovement) {
        this.x = this.x - heroMovement;
    }
    drawCircle() {
        fill("red");
        circle(this.x, this.y, 100);
    }
}
