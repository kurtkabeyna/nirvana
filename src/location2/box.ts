import { Drawable  } from "interfaces/drawable";
import { Movable } from "interfaces/movable";
export class Box{
    box : (Drawable &  Movable)[];
    constructor(public x : number, public y : number){ }
    draw() {
    fill(193,103,15);
    rect(this.x,this.y,70,70);

     }

    

}