import { Vector2d } from "../vector2d";
import { Drawable } from "../interfaces/drawable";
import { Movable } from "../interfaces/movable";
import { updatePosition } from "../utils/update";
import { VISITED_SYMBOL } from "consts";
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
      updatePosition(this, heroMovement);
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

    FindPath(x,y,dx,dy,lmap : string[][]){
       const queue = [[x,y]];
       lmap = lmap.map(mapRow => [...mapRow])
       lmap[x][y] = VISITED_SYMBOL;
       while(queue.length == 0){
          let FirstElement = queue.shift();
          lmap[FirstElement[0]][FirstElement[1]] = VISITED_SYMBOL;
          const shifts = [[1,0], [0,1], [-1,0], [0,-1]]
          shifts.forEach(([sx,sy]) => {
              let newX = FirstElement[0] + sx;
              let  newY = FirstElement[1] + sy;
              if(lmap[newX][newY] !== VISITED_SYMBOL){
                queue.push([newX,newY]);
              }
             

})
          
       }
    }
}