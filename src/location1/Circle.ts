import { Vector2d } from "../vector2d";
import { Movable } from "../interfaces/movable";
import { Drawable } from "../interfaces/drawable";

export class Circle  implements  Movable, Drawable {
    constructor(public x: number, public y: number) { }

    update(heroMovement: Vector2d) {
        this.x = this.x - heroMovement.x
        this.y = this.y - heroMovement.y;
    }
    draw() {
        fill("red");
        circle(this.x, this.y, 100);
    }
}
