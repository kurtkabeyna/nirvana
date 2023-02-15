import { updatePosition } from "utils/update";
import { Drawable } from "../interfaces/drawable";
import { Vector2d } from "../vector2d";


export class Coins implements Drawable {
   
    update(heroMovement: Vector2d) {
        updatePosition(this, heroMovement);


    }
    constructor(public x, public y, public radius) {
     
    }
    draw() {
        fill(224, 208, 25);
        circle(this.x, this.y, this.radius );
    }

} 
