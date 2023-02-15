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
import { HERO_SYMBOL, MAP_CELL_HEIGHT_PX, MAP_CELL_WIDTH_PX, SURFACE_SYMBOL } from "../consts";
import { isObjectInCell, prettyPrintMap, createMapCanvas, createLocationMap } from "../utils/mapUtils";
import { Surface } from "../surface";
import { Platform } from "location2/platform";
import { updatePosition } from "utils/update";


export class Location1 {
  surfaces: Ground[] = [];
  map = [][];
  objects: (Movable & Drawable)[]
  private intervalHandler: number = null;
  private IsInLocation: boolean;
  private readonly locationWidth: number = 500;
  private readonly locationHeight: number = 500;

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
      new Log(570, 200),
      new Cloud(20, 30),
      new Landscape(0, 300),
      new Circle(100, 100)
    ]
  }


  onEnter() {
    this.IsInLocation = true;
    this.intervalHandler = setInterval(() => {
      if (this.IsInLocation == true) {
        hero.currentLocation = "location 1"
      }
    }, 1000)
  }


  OnLeave() {
    this.IsInLocation = false;
  }

  draw() {
    background(0, 206, 209);
    this.objects.forEach(obj => obj.draw());
    this.surfaces.forEach((surface) => surface.draw());
    hero.draw();
  }

  update(dx: Vector2d): number {
    const map = createMapCanvas(this.locationHeight,this.locationWidth);
    const locationMap = createLocationMap(this.surfaces, map, SURFACE_SYMBOL);
    prettyPrintMap(locationMap);
    if (hero.traveledDistance < 1 && keyIsDown(LEFT_ARROW)) {
      return 0;

    }
    this.objects.forEach(obj => obj.update(dx)); //callback
    this.surfaces.forEach((surface) => surface.update(dx)); //callback

    let locationSwitch = 0; // -1 0 1

    if (hero.traveledDistance > this.locationWidth) {
      locationSwitch = 1;
    }
updatePosition(this, dx);
    return locationSwitch;
  }






