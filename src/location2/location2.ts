import { hero, coins } from "../sketch";
import { Vector2d } from "../vector2d";
import { Platform } from "./platform";

export class Location2 {
  width: number;
  restart() {
    this.x = this.initialX;
    this.y = this.initialY;
  }
  initialX: number;
  initialY: number;
  surfaces = [];
  private intervalHandler: number;

  onEnter() {
    this.intervalHandler = setInterval(() => {
      hero.currentLocation = "location 2"
    }, 1000)
  }


  constructor(public x, public y) {
    this.initialX = this.x;
    this.initialY = this.y;
    this.surfaces = [
      new Platform(this.x + 500, this.y, 1150, 12.59),
      new Platform(this.x + 500, this.y, 12.59, 400),
      new Platform(this.x + 887, this.y + 90, 12.59, 162),
      new Platform(this.x + 500, this.y + 90, 90, 12.59),
      new Platform(this.x + 575, this.y + 176, 150, 12.59),
      new Platform(this.x + 575, this.y + 176, 12.59, 70),
      new Platform(this.x + 655, this.y + 246, 12.59, 70),
      new Platform(this.x + 800, this.y + 176, 12.59, 70),
      new Platform(this.x + 800, this.y + 90, 90, 12.59),
      new Platform(this.x + 800, this.y + 238, 90, 12.59),
      new Platform(this.x + 987, this.y + 90, 12.59, 162),
      new Platform(this.x + 1708.42, this.y, 12.59, 400),
      new Platform(this.x + 1518.42, this.y + 90, 190, 12.59),
      new Platform(this.x + 990, this.y + 90, 190, 12.59),
      new Platform(this.x + 1258.42, this.y + 160, 190, 12.59),
      new Platform(this.x + 1458.42, this.y + 230, 190, 12.59),
      new Platform(this.x + 1058.42, this.y + 230, 190, 12.59),
    ]
  }


  update(heroMovement: Vector2d) {
    const dx = hero.calculateSpeed(this.surfaces);
    this.x = this.x - heroMovement.x;
    this.y = this.y - heroMovement.y;
    this.surfaces.forEach(surfaces => surfaces.update(dx))
    return 0;
  }

  draw() {
    background(0, 209, 182);
    fill("#291C16");
    this.surfaces.forEach(surfaces => surfaces.draw())
    hero.draw();
  }
}




