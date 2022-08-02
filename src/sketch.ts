/* eslint-disable @typescript-eslint/no-use-before-define */
import "p5";
import { Cloud } from "./cloud";
import { canvasWidth, canvasHeight } from "./consts";
import { House } from "./house";
import { Hero } from "./hero";
import { Circle, Log, Hole } from "./items";
import { Ground, isBelowSurface, Surface } from "./ground";
import { Location1 } from "./Location1";
import { Coins, Location2 } from "./Location2";

export let log = new Log(700, 200);
export let house = new House(200, 160);
export let cloud = new Cloud(20, 30);
export let hero = new Hero(50, 280);
export let circle = new Circle(900, 75);
export let hole = new Hole(1000, 300);
export let surfaces: Ground[] = [];
export let location2 = new Location2(0,0);
let coins = new Coins(30, 90);


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  let width = random(100, 500);
  let x = 0;
  let holeWidth = 60;
  for (let i = 0; i < 20; ++i) {
    surfaces.push(new Ground(x, width));
    x += width + holeWidth;
    cloud.move();
    cloud.dropRaindrops();
    circle.drawCircle();

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
      location2.restart();
    }
  }

}
const locations = [new Location1(), new Location2(-500,0)]
let currentLocation = 0;


function draw() {
  const locationChange = locations[currentLocation].update()
  currentLocation += locationChange;
  locations[currentLocation].draw();
  const dx = hero.calculateSpeed(surfaces);
  location2.update(dx);
}




// It will be explained later.
export { setup, draw };