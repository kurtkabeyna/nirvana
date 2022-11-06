import { Drawable } from "interfaces/drawable";
import { Vector2d } from "../vector2d";


export class Coins implements Drawable {
   
    update(heroMovement: Vector2d) {
        this.x = this.x - heroMovement.x;
        this.y = this.y - heroMovement.y;


    }
    constructor(public x, public y, public radius) {
     
    }
    draw() {
        fill(224, 208, 25);
        circle(this.x, this.y, this.radius );
    }

} 
/*
export class Coins {
    restart() {
        this.x = this.initialX;
        this.y = this.initialY;
    }
    initialX: number;
    initialY: number;
    constructor(public x, public y) {
        this.initialX = this.x;
        this.initialY = this.y;
    }

    update(heroSpeed: Vector2d) {
        this.x = this.x - heroSpeed.x;
        this.y = this.y - heroSpeed.y;
    }

    draw() {
        fill(224, 208, 25);
        new Coins(this.x + 630, this.y + 50, 50);
        new Coins(this.x + 930, this.y - 30, 50);
        new Coins(this.x + 1230, this.y + 5, 50);
        new Coins(this.x + 1630, this.y - 30, 50);
        new Coins(this.x + 1330, this.y + 150, 50);
        new Coins(this.x + 1650, this.y + 150, 50);
        new Coins(this.x + 515, this.y + 160, 50);
        new Coins(this.x + 730, this.y + 160, 50);
        new Coins(this.x + 816, this.y + 100, 50);
        new Coins(this.x + 1030, this.y + 75, 50);
        console.log("working")
    }


}
*/