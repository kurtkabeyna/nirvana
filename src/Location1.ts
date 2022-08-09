import { Vector2d } from "./vector2d";
import {
  hero,
  house,
  hole,
  log,
  cloud,
  surfaces,
  circle,
  platform,
  landscape
} from "./sketch";

export class Location1 {
  draw() {
    background(0, 206, 209);
    hero.draw();
    house.draw();
    hole.drawHole();
    log.draw();
    cloud.draw();
    surfaces.forEach((surface) => surface.draw());
  }

  update(dx: Vector2d): number {
    surfaces.forEach((surface) => surface.update(dx));
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
