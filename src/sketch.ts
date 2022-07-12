/* eslint-disable @typescript-eslint/no-use-before-define */
import "p5";
import { Cloud } from "./cloud";
import { canvasWidth, canvasHeight } from "./consts";
import { House } from "./house";
import { Hero } from "./hero";
import { Circle, Log, Hole } from "items";
import { Ground, isBelowSurface, Surface } from "ground";

let log = new Log(700, 200);
let house = new House(200, 160);
let cloud = new Cloud(20, 30);
let hero = new Hero(50, 280);
let circle = new Circle(900, 75);
let hole = new Hole(1000, 300);
let surfaces: Ground[] = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  let width = random(100, 500);
  let x = 0;
  let holeWidth = 60;
  for (let i = 0; i < 20; ++i) {
    surfaces.push(new Ground(x, width));
    x += width + holeWidth;
  }

  // x,y,width
}
/**
 * Hero Should not be able to go through
 * If hero collides first obstacle he can't go thtough
 */

/**
 * 1. collect all surfaces
 * 2. pass all surfaces to hero
 * 3. Check if hero stands or not stands on the ground:
 *  * hero.y - surface.y == hero.height
 * 4. Add y speed if hero is not standing
 * */

function draw() {
  background(0, 206, 209);
  hero.draw();
  const dx = hero.calculateSpeed(surfaces);
  house.update(dx);
  house.draw();
  cloud.move();
  cloud.draw();
  cloud.dropRaindrops();
  cloud.update(dx);
  log.draw();
  log.update(dx);
  circle.update(dx);
  circle.drawCircle();
  hole.drawHole();
  hole.update(dx);

  surfaces.forEach((surface) => surface.draw());
  surfaces.forEach((surface) => surface.update(dx));
  let isUnderAllSurfaces = true;

  surfaces.forEach((surface) => {
    if (!isBelowSurface(surface, hero)) {
      isUnderAllSurfaces = false;
    }
  });
  if (isUnderAllSurfaces) {
    hero.restart(surfaces);
    house.restart(House);
    cloud.restart();
  }
  /* TODO
  - hero should not go through surface
  - restart the game if hero falls
  */
  // check this function for all surfaces
  // if below: restart game
  // hero.isFalling();
}

// It will be explained later.
export { setup, draw };
