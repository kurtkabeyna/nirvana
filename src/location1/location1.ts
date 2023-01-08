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
import { isObjectInCell, prettyPrintMap } from "../utils/mapUtils";
import { Surface } from "../surface";


export class Location1 {
  surfaces: Ground[] = [];
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
    const locationMap = this.createLocationMap();
    prettyPrintMap(locationMap);
    if (hero.traveledDistance < 1 && keyIsDown(LEFT_ARROW)) {
      return 0;

    }
    this.objects.forEach(obj => obj.update(dx));
    this.surfaces.forEach((surface) => surface.update(dx));

    let locationSwitch = 0; // -1 0 1

    if (hero.traveledDistance > this.locationWidth) {
      locationSwitch = 1;
    }

    return locationSwitch;
  }



  createLocationMap() {
    const map = this.createMapCanvas();
    map.forEach((row, r) => {
      row.forEach((cell, c) => {

        const cellX = c * MAP_CELL_WIDTH_PX;
        const cellY = r * MAP_CELL_HEIGHT_PX;
        this.surfaces.forEach(surface => {
          if (isObjectInCell(surface.x, surface.y, surface.width, surface.height, cellX, cellY)) {
            map[r][c] = SURFACE_SYMBOL
          }
        })

        if (isObjectInCell(hero.x, hero.y, hero.radius, hero.radius, cellX, cellY)) {
          map[r][c] = HERO_SYMBOL
        }
      })
    })
    return map
  }

  createMapCanvas(): string[][] {
    const rowCount = this.locationHeight / MAP_CELL_HEIGHT_PX;
    const cellCount = this.locationWidth / MAP_CELL_WIDTH_PX;
    const row = Array(cellCount).fill(' '); // https://stackoverflow.com/a/49732119/7516134
    return Array(rowCount).fill(row).map(mapRow => [...mapRow]);
    /* TODO Vlad:                      \____ to undestrand why do we do this
    paste the following code to the browser console and observe the difference between
    ---- 
    a = Array(6).fill(null)
    b = Array(2).fill(a)
    b[0][1] = 2 
    console.log(b);
    ----
    and 
    ----
    a = Array(6).fill(null)
    b = Array(2).fill(a).map(i => [...i]);
    b[0][1] = 2 
    console.log(b);
    */

  }

}
