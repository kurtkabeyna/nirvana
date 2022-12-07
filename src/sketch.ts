/* eslint-disable @typescript-eslint/no-use-before-define */
import "p5";
import { canvasWidth, canvasHeight } from "./consts";
import { Hero } from "./hero";
import { Location1 } from "./location1/location1";
import { Location2 } from "./location2/location2";
import { Coins } from "./location2/coins";
import { Box } from "./location2/box";
export let hero = new Hero(50, 280);

export let box  = new Box(50,70);

const locations = [new Location1(), new Location2(-500, 300)];
let currentLocation = 0;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
}



locations[currentLocation].onEnter()



function draw() {
  let location = locations[currentLocation];
  const dx = hero.calculateSpeed(location.surfaces);

  const locationChange = location.update(dx);
  currentLocation += locationChange;
  
  if (locationChange != 0) {
    location.OnLeave();
    location = locations[currentLocation]
    location.onEnter();
    
    
  }
  

  location.draw();
  //console.log("Current hero location is: ", hero.currentLocation);
}



// It will be explained later.
export { setup, draw };

