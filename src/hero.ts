import { Ground, Surface } from "./ground";
import { Vector2d } from "./vector2d";
import { Location2, Platform } from "./Location2";
import { platform } from "sketch";

export class Hero {
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

  isStanding(surfaces: Ground[]) {
    for (let i = 0; i < surfaces.length; i++) {
      const surface = surfaces[i];
      // console.log(this.y - surface.y);
      if (
        this.x > surface.x &&
        this.x < surface.x + surface.width &&
        this.y === surface.y - 20
      ) {
        return true;
      }
    }
    return false;
  }
  isStanding2(platform:Platform[]) {
    for (let i = 0; i < platform.length; i++) {
      const platforma=platform[i];
         if (this.x > platforma.x && this.x < platforma.x + platforma.w
          && this.y === platforma.y - 20) {
        return true;
      }
    }
    return false;
  }
  calculateSpeed2(platform:Platform[]) {
    let speed = new Vector2d(0, 0);
    const fx = 2;
    if (!this.isStanding2(platform)) {
      speed.y = 2;
    }
    if (this.isInSurface2(platform)) {
      speed.x = 0;
      speed.y = 2;
      return speed;
    }
  }
  isInSurface2(platform: Platform[]): boolean {
    for (let i = 0; i < platform.length; i++) {
      const platforma = platform[i];
      if (
        this.x > platforma.x &&
        this.x < platforma.x + platforma.w &&
        this.y > platforma.y
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
