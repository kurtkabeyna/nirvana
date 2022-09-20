import { Surface } from "./ground";
import { hero, location2, coins, landscape } from "./sketch";
import { Vector2d } from "./vector2d";

export class Location2 {
  width: number;
  restart() {
    this.x = this.initialX;
    this.y = this.initialY; 
  }
  initialX: number;
  initialY: number;  
  surfaces=[]



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
    landscape.update(dx);
    this.surfaces.forEach(surfaces=>surfaces.update(dx))
    return 0;
  }

  draw() {
    background(0, 209, 182);
    fill("#291C16");
    this.surfaces.forEach(surfaces=>surfaces.draw())
    hero.draw();
    landscape.draw();
  }
}

interface Hero {
  x: number;
  y: number;
}

export class Platform implements Surface {
  initialX: number;
  initialY: number;
  update(heroMovement:Vector2d){
    this.x=this.x-heroMovement.x;
    this.y=this.y-heroMovement.y;


  }
  constructor(public x,public y, public width,public height) {
    this.initialX = this.x;
    this.initialY = this.y;
  }
  draw(){
    rect(this.x, this.y,this.width,this.height)
  }
}

interface Hero {
  x: number;
  y: number;
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

  update(heroSpeed: Vector2d) {
    this.x = this.x - heroSpeed.x;
    this.y = this.y - heroSpeed.y;
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

