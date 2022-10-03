/* eslint-disable @typescript-eslint/no-use-before-define */
import "p5";
import { canvasWidth, canvasHeight } from "./consts";
import { Hero } from "./hero";
import { Circle } from "./location1/Circle";
import { Location1 } from "./location1/location1";
import { Location2 } from "./location2/location2";
import { Coins } from "./location2/coins";

export let hero = new Hero(50, 280);
/** TODO: move circle to location1 */

export let coins = new Coins(30, 90);


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

