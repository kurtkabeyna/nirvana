import { Vector2d } from "../vector2d";
import { Movable } from "../interfaces/movable";
import { Drawable } from "../interfaces/drawable";
import { updatePosition } from "../utils/update";

export class Circle implements Movable, Drawable {
    constructor(public x: number, public y: number) { }

    update(heroMovement: Vector2d) {
        updatePosition(this, heroMovement);
    }
    draw() {
        fill("red");
        circle(this.x, this.y, 100);
    }
}
