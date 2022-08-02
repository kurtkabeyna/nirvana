import { hero } from "../Some demo changes/src/sketch";
import { Vector2d } from "./vector2d";
export class Location2 {
  restart() {
    this.x = this.initialX;
    this.y = this.initialY;
  }
  initialX: number;
  initialY: number;
  constructor(public x, public y) {
    this.initialX = this.x;
    this.initialY = this.y;
  }

  update(heroSpeed: Vector2d) {

    return 0;

  }

  draw() {
    background(0, 209, 182)
    fill("#291C16");
    // +500//
    rect(this.x + 500, this.y, 1208.42, 12.59);
    rect(this.x + 500, this.y, 12.59, 400);
    rect(this.x + 887, this.y + 90, 12.59, 162);
    rect(this.x + 500, this.y + 90, 90, 12.59);
    rect(this.x + 575, this.y + 175, 150, 12.59);
    rect(this.x + 575, this.y + 175, 12.59, 70);
    rect(this.x + 655, this.y + 245, 12.59, 70);
    rect(this.x + 800, this.y + 175, 12.59, 70);
    rect(this.x + 800, this.y + 90, 90, 12.59);
    rect(this.x + 800, this.y + 239, 90, 12.59);
    rect(this.x + 987, this.y + 90, 12.59, 162);
    rect(this.x + 1708.42, this.y, 12.59, 400);
    rect(this.x + 1518.42, this.y + 90, 190, 12.59);
    rect(this.x + 990, this.y + 90, 190, 12.59);
    rect(this.x + 1258.42, this.y + 160, 190, 12.59);
    rect(this.x + 1458.42, this.y + 230, 190, 12.59);
    rect(this.x + 1058.42, this.y + 230, 190, 12.59);
    hero.draw();
  }
}
export interface Built {
  height: number;
  x: number;
  y: number;
  width: number;
}
interface Hero {
  x: number;
  y: number;
}
export function isBelowPlatform(platform: Built, item: Hero) {
  if (platform.y + platform.height < item.y) {
    return true;
  }
  return false;
}
export class Coins {
  restart() {
    this.x = this.initialX;
    this.y = this.initialY;
  }
  initialX: number;
  initialY: number;
  constructor(public x, public y) {
    this.initialX = this.x;
    this.initialY = this.y;
  }

  update(heroMovement: Vector2d) {
    this.x = this.x - heroMovement.x;
    this.y = this.y - heroMovement.y;
  }


  drawCoins() {
    fill(224, 208, 25);
    circle(this.x + 630, this.y + 50, 50);
    circle(this.x + 930, this.y - 30, 50);
    circle(this.x + 1230, this.y + 5, 50);
    circle(this.x + 1630, this.y - 30, 50);
    circle(this.x + 1330, this.y + 150, 50);
    circle(this.x + 1650, this.y + 150, 50);
    circle(this.x + 515, this.y + 160, 50);
    circle(this.x + 730, this.y + 160, 50);
    circle(this.x + 816, this.y + 100, 50);
    circle(this.x + 1030, this.y + 75, 50);
  }
}