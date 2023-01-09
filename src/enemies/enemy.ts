import { Vector2d } from "vector2d";
import { Drawable } from "../interfaces/drawable";
import { Movable } from "../interfaces/movable";
export class Enemy implements Drawable, Movable{
    constructor(public x : number , public y : number , public patrolArea : number){}
    draw(): void {
        fill("#89F58C");
        triangle(
            this.x + 40,
            this.y, // + 140
            this.x - 20,
            this.y, // + 140
            this.x + 30,
            this.y - 70 // + 140
          );
          fill('#753224');
          triangle(
            this.x + 30,
            this.y - 20, // + 140
            this.x - 10,
            this.y - 30, // + 140
            this.x + 20,
            this.y - 60 // + 140
          );
          fill('#753224');
          triangle(
            this.x + 20,
            this.y - 30, // + 140
            this.x - 20,
            this.y - 40, // + 140
            this.x + 10,
            this.y - 70 // + 140
          );
        
          triangle(
            this.x + 30,
            this.y - 20, // + 140
            this.x ,
            this.y - 30, // + 140
            this.x + 50,
            this.y - 20 // + 140
          );
          
          triangle(
            this.x + 35,
            this.y - 30, // + 140
            this.x -6,
            this.y - 40, // + 140
            this.x + 32,
            this.y - 70 // + 140
          );
          fill('white');
          circle(this.x +17 ,this.y-36,19);
          fill('black');
          circle(this.x +17 ,this.y-36,7);
          fill('red');
          circle(this.x +17 ,this.y-36,2);
   

     
    }
    update(heroMovement:Vector2d){
        this.x = this.x - heroMovement.x;
        this.y = this.y - heroMovement.y;
        this.x = this.x + this.direction;
        this.StepsCount  = this.StepsCount + this.direction;
        if(this.StepsCount == this.patrolArea){
           this.direction = -1;
        }
        if(this.StepsCount == -this.patrolArea){
            this.direction = 1;
         }
    }
    private StepsCount : number = 0;
    private direction : number = 1;
}