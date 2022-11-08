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
  height = 50;
  constructor(public x, public y) {
    this.direction = 1;
  }

  /*ObjFilter(object: Coins[]) {
    for (let i = 0; i < Coins.length; i++) {
      const  object =  Coins[i];
      if (
        hero.x < object.radius + object.x
        && hero.x > object.x - object.radius
        && hero.y < object.y + object.radius && hero.y > object.y - object.radius)
       {
        return true;
      }
    }
    return false;
  }
  */
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
      // console.log(this.y - surface.y);
      if (
        this.x > surface.x &&
        this.x < surface.x + surface.width &&
        this.y > surface.y
      ) {
        return true;
      }
    }
    return false;
  }

  draw() {
    fill(34, 40, 54);
    circle(this.x, this.y, this.height);
    fill("white");
    circle(this.x - 10, this.y - 10, 5);
    circle(this.x + 10, this.y - 10, 5);
    fill("red");
  }
}
