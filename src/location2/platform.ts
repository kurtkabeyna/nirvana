import { updatePosition } from "../utils/update";
import { OBSTACLE_SYMBOL } from "../consts";
import { GameObject } from "../gameObject";
import { Vector2d } from "../vector2d";


export class Platform implements GameObject {

    update(heroMovement: Vector2d) {
        updatePosition(this, heroMovement);
        if (this.name) {

        }


    }
    constructor(public x, public y, public width, public height, public name = "") {

    }

    minimapSymbol: string = OBSTACLE_SYMBOL;
    minimapPosition: [number, number];

    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
}
