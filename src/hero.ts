import { Coins } from "location2/coins";
import { hero } from "sketch";
import { Ground } from "./ground";
import { Surface } from "./surface";
import { Vector2d } from "./vector2d";



export class Hero {
  public currentLocation: string = "";

  restart(surfaces: Ground[]) {
    surfaces.forEach((surface) => {
      surface.x = surface.initialX;
      surface.y = surface.initialY;
    });
  }

  public traveledDistance = 0;

  direction;
  public radius = 50;
  constructor(public x, public y) {
    this.direction = 1;
  }


  isStanding(surfaces: Surface[]) {

    for (let i = 0; i < surfaces.length; i++) {
      const surface = surfaces[i];
      if (
        this.x > surface.x &&
        this.x < surface.x + surface.width &&
        this.y == surface.y - 20
      ) {
        return true;
      }
    }

    return false;
  }

  calculateSpeed(surfaces: Ground[]) {
    //console.log("hero.x.ts",this.x);
    let speed = new Vector2d(0, 0);
    const fx = 2;
    if (!this.isStanding(surfaces)) {
      speed.y = 2;
    }
    if (this.isInSurface(surfaces)) {
      speed.x = 0;
      speed.y = 2;
      return speed;
    }
    if (keyIsDown(UP_ARROW)) {
      speed.y = -2;
    }
    if (keyIsDown(DOWN_ARROW)) {
      speed.y = 2;

      return speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      speed.x = fx * this.direction;
    }
    if (keyIsDown(LEFT_ARROW)) {
      speed.x = fx * -this.direction;
    }

    this.traveledDistance += speed.x;
    return speed;
  }


  isInSurface(surfaces: Ground[]): boolean {
    for (let i = 0; i < surfaces.length; i++) {
      const surface = surfaces[i];
      //console.log("surface.width.hero.ts",surface.width);
      if (
        this.x > surface.x &&
        this.x < surface.x + surface.width &&
        this.y > surface.y && this.y < surface.y + surface.height
      ) {
        return true;
      }
    }
    return false;
  }

  draw() {
    fill(34, 40, 54);
    circle(this.x, this.y, this.radius);
    fill("white");
    circle(this.x - 10, this.y - 10, 5);
    circle(this.x + 10, this.y - 10, 5);
    fill("red");
    fill("white");
    rect(this.x + 20, this.y - 4, 7, 30, 30)
    // translate(this.x+20,this.y-47);
    // rotate(PI/4);
    // fill("green");
    // rect(40,15, 7 , 50,15);
    // rotate(-PI/4);
    // translate(-this.x-20,-this.y+47);
    Rotate_and_draw(this.x + 20, this.y - 47, PI / 4);

  }

}
function Rotate_and_draw(x, y, angle) {
  translate(x, y);
  rotate(angle);
  fill("green");
  rect(40, 15, 7, 50, 15);
  rotate(-angle);
  translate(-x, -y);
}
