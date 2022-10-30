import { Vector2d } from "../vector2d";
import { hero } from "../sketch";
import { Ground } from "../ground";
import { Movable } from "../interfaces/movable";
import { Drawable } from "../interfaces/drawable";
import { House } from "./house";
import { Hole } from "./hole";
import { Log } from "./log";
import { Cloud } from "./cloud";
import { Landscape } from "./landscape";
import { Circle } from "./Circle";


export class Location1 {
  surfaces = [];
  objects: (Movable & Drawable)[]
  private intervalHandler: number = null;
  private IsInLocation :boolean ;

  constructor() {
    let width = Math.random() * 400 + 100;
    let x = 0;
    let holeWidth = 60;
    for (let i = 0; i < 20; ++i) {
      this.surfaces.push(new Ground(x, width));
      x += width + holeWidth;
    }
    this.objects = [
      new House(200, 160),
      new Hole(1000, 300),
      new Log(700, 200),
      new Cloud(20, 30),
      new Landscape(0, 300),
      new Circle(100, 100)
    ]


  }

  onEnter() {
    this.IsInLocation = true;
    this.intervalHandler = setInterval(() => {
    if(this.IsInLocation == true){
      hero.currentLocation = "location 1"

   
         }      
      }, 1000)
  }


  OnLeave(){
    this.IsInLocation = false;
   
  }
  
  draw() {
    background(0, 206, 209);
    this.objects.forEach(obj => obj.draw());
    this.surfaces.forEach((surface) => surface.draw());
    hero.draw();


  }

  update(dx: Vector2d): number {
    if (hero.traveledDistance < 1 && keyIsDown(LEFT_ARROW)) {
      return 0;

    }
    this.objects.forEach(obj => obj.update(dx));
    this.surfaces.forEach((surface) => surface.update(dx));

    let locationSwitch = 0; // -1 0 1

    if (hero.traveledDistance > 500) {
      locationSwitch = 1;
    }

    return locationSwitch;
  }



}
