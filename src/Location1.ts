import { Vector2d } from "./vector2d";
import {
  hero,
  house,
  hole,
  log,
  cloud,
  circle,
  platform,
  landscape
} from "./sketch";
import { Ground } from "./ground";


export class Location1 {
  surfaces = [];

  constructor() {
    let width = Math.random() * 400 + 100;
    let x = 0;
    let holeWidth = 60;  
    for (let i = 0; i < 20; ++i) {
      this.surfaces.push(new Ground(x, width));
      x += width + holeWidth;
    }
  }
  
  draw() {
    background(0, 206, 209);
    hero.draw();
    house.draw();
    hole.drawHole();
    log.draw();
    cloud.draw();
    this.surfaces.forEach((surface) => surface.draw());
  }

  update(dx: Vector2d): number {
    this.surfaces.forEach((surface) => surface.update(dx));
    house.update(dx);
    cloud.update(dx);
    log.update(dx);
    circle.update(dx);
    hole.update(dx);
    let locationSwitch = 0; // -1 0 1
    console.log("Travelled distance: ", hero.traveledDistance);
    if (hero.traveledDistance > 500) {
      locationSwitch = 1;
    }
    if (hero.traveledDistance < 0) {
      locationSwitch = -1;
    }
    return locationSwitch;
  }



}
