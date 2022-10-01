/* eslint-disable @typescript-eslint/no-use-before-define */
import "p5";
import { Cloud } from "./cloud";
import { canvasWidth, canvasHeight } from "./consts";
import { House } from "./house";
import { Hero } from "./hero";
import { Circle, Log, Hole } from "./items";
import { Ground, isBelowSurface, Surface } from "./ground";
import { Location1 } from "./Location1";
import { Coins, Location2, Platform } from "./Location2";
import { Landscape } from "./landscape";

export let log = new Log(700, 200);
export let house = new House(200, 160);
export let cloud = new Cloud(20, 30);
export let hero = new Hero(50, 280);
export let circle = new Circle(900, 75);
export let hole = new Hole(1000, 300);
export let location2 = new Location2(0, 0);
export let platform: Platform[] = [];
export let coins = new Coins(30, 90);
export let landscape = new Landscape(0, 300);


const locations = [new Location1(), new Location2(-500, 300)];
let currentLocation = 0;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
}




function draw() {

  // //
  const location = locations[currentLocation];
  const dx = hero.calculateSpeed(location.surfaces);
  coins.drawCoins();
  const locationChange = location.update(dx);
  currentLocation += locationChange;
  location.draw();
}



// It will be explained later.
export { setup, draw };

