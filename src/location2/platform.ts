import { Surface } from "../surface";
import { Vector2d } from "../vector2d";


export class Platform implements Surface {
    
    update(heroMovement: Vector2d) {
        this.x = this.x - heroMovement.x;
        this.y = this.y - heroMovement.y;
        if(this.name){
           
        }


    }
    constructor(public x, public y, public width, public height, public name ="") {

    }
    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
}
