import { hero, } from "../sketch";
import { Vector2d } from "../vector2d";
import { Platform } from "./platform";
import { Movable } from "../interfaces/movable";
import { Drawable } from "../interfaces/drawable";
import { Coins } from "./coins";


export class Location2 {
  width: number;
  restart() {
    this.x = this.initialX;
    this.y = this.initialY;
  }

  initialX: number;
  initialY: number;
  surfaces = [];
  objects: (Coins)[]
  private intervalHandler: number;
  private IsInLocation: boolean;/*
  private Score: string  = "Score =  " ;*/
  private Score = 0;


  private filterQ ;

  onEnter() {
    this.IsInLocation = true;
    this.intervalHandler = setInterval(() => {
      if (this.IsInLocation)
        hero.currentLocation = "location 2"

    }, 1000)
  }

  OnLeave() {
    this.IsInLocation = false;


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
    this.objects = [
      new Coins(this.x + 630, this.y + 50, 50),
      new Coins(this.x + 930, this.y - 30, 50),
      new Coins(this.x + 1230, this.y + 5, 50),
      new Coins(this.x + 1630, this.y - 30, 50),
      new Coins(this.x + 1330, this.y + 150, 50),
      new Coins(this.x + 1650, this.y + 150, 50),
      new Coins(this.x + 515, this.y + 160, 50),
      new Coins(this.x + 730, this.y + 160, 50),
      new Coins(this.x + 816, this.y + 100, 50),
      new Coins(this.x + 1030, this.y + 75, 50),

    ]
  }
  
 
  update(heroMovement: Vector2d) {
    const dx = hero.calculateSpeed(this.surfaces);
    this.x = this.x - heroMovement.x;
    this.y = this.y - heroMovement.y;
    this.surfaces.forEach(surfaces => surfaces.update(dx))
    
    this.objects = this.objects.filter(object => {
   
      
      if ( hero.x < object.radius + object.x
        && hero.x > object.x - object.radius
        && hero.y < object.y + object.radius && hero.y > object.y - object.radius) 
        { return this.Score += 1 , false ; }
        
      else
        return true;
    })
    this.objects.forEach(objects => objects.update(dx))
    return 0;
    
  }

  draw() {
    background(0, 209, 182);
    fill("#291C16");
    this.surfaces.forEach(surfaces => surfaces.draw())
    hero.draw();
    this.objects.forEach(objects => objects.draw())
    console.log(this.Score);
  }
  
}




