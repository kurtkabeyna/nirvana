import { Drawable } from "interfaces/drawable";
import { Movable } from "interfaces/movable";
import { updatePosition } from "utils/update";
import { Vector2d } from "vector2d";



export class Bullet implements Movable , Drawable{
    constructor(public x, public y) { }



    
    
    draw(){
        fill('black');
        circle(this.x,this.y,10)       
    }
    update(heroMovement:Vector2d){
            updatePosition(this, heroMovement);
    }
}