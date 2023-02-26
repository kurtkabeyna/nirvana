import { Drawable } from "interfaces/drawable";
import { Movable } from "interfaces/movable";
import { updatePosition } from "../utils/update";
import { Vector2d } from "../vector2d";
export class Block {

    constructor(public x: number, public y: number) { }
    draw() {
        fill(193, 103, 15);//brown
        rect(this.x, this.y, 53, 53);//box
        fill(84, 50, 42);//dark brown
        rect(this.x, this.y, 4, 53);//left line
        rect(this.x + 49, this.y, 4, 53);//right line
        rect(this.x, this.y, 53, 4);//up line
        rect(this.x, this.y + 49, 53, 4);//down line
        rect(this.x, this.y + 17, 53, 4);//middle
        rect(this.x, this.y + 34, 53, 4);//middle

    }

    update(heroMovement: Vector2d) {
        updatePosition(this, heroMovement);

    }
}