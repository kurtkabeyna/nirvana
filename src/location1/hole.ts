import { Drawable } from "../interfaces/drawable";
import { Movable } from "../interfaces/movable";

export class Hole implements Movable, Drawable {
    constructor(public x: number, public y: number) { }
    update(heroMovement) {
        this.x = this.x - heroMovement;
    }

    draw() {
        fill("grey");
        rect(this.x, this.y, 70, 100);
    }
}
