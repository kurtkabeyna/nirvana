/* eslint-disable @typescript-eslint/no-use-before-define */
import "p5";
import { Cloud } from "./cloud";
import { canvasWidth, canvasHeight } from "./consts";
import { House } from "./house";
import { Hero } from "./hero";
import { Circle, Log, Hole } from "./items";
import { Ground, isBelowSurface, Surface } from "./ground";
import { Loc2, Coins} from "./locations2";


let log = new Log(700, 200);
let house = new House(200, 160);
let cloud = new Cloud(20, 30);
let hero = new Hero(50, 280);
let circle = new Circle(900, 75);
let hole = new Hole(1000, 300);
let surfaces: Ground[] = [];
let loc2 = new Loc2(0, 0);
let coins = new Coins(30, 90);
let built: Loc2[] = [];
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
    loc2.restart();
    coins.restart();
  }
  }

  
}
class Location1 {
  
  draw() {
    background(0, 206, 209);
    hero.draw();
    house.draw();
    hole.drawHole();
    log.draw();
    cloud.draw();
    surfaces.forEach((surface) => surface.draw());
  }
  update() {
    const dx = hero.calculateSpeed(surfaces);
    house.update(dx);
    cloud.update(dx);
    log.update(dx);
    circle.update(dx);
    hole.update(dx);
    surfaces.forEach((surface) => surface.update(dx));
  }
}
  class Location2 {
    draw() {
      background(0, 206, 209);
      loc2.drawLoc2();
      coins.drawCoins();

    }
    update() {
      const dx = hero.calculateSpeed(surfaces);
      loc2.update(dx);
      coins.update(dx);

    }
  }
  
  const locations = [new Location1(), new Location2()]
  let currentLocation = 0;

function draw(){
  const move = locations[currentLocation].update()
  locations[currentLocation].draw();
}
  
 


// It will be explained later.
export { setup, draw };
