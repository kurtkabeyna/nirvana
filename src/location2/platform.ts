import { Surface } from "../surface";
import { Vector2d } from "../vector2d";


export class Platform implements Surface {
    initialX: number;
    initialY: number;
    update(heroMovement: Vector2d) {
        this.x = this.x - heroMovement.x;
        this.y = this.y - heroMovement.y;


    }
    constructor(public x, public y, public width, public height) {
        this.initialX = this.x;
        this.initialY = this.y;
    }
    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
}
