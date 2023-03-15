import { hero } from "../sketch";
import { Vector2d } from "../vector2d";
import { Platform } from "./platform";
import { Movable } from "../interfaces/movable";
import { Drawable } from "../interfaces/drawable";
import { Coins } from "./coins";
import { Hero } from "hero";
import { Ground } from "ground";
import { Location1 } from "location1/location1";
import { Box } from "../location2/box"
import { Enemy } from "../enemies/enemy";
import { Bullet } from "../enemies/bullet";
import { HERO_SYMBOL,PATH_SYMBOL } from "../consts";
import { isObjectInCell, prettyPrintMap, createMapCanvas, createLocationMap } from "../utils/mapUtils";
import { updatePosition } from "../utils/update";

export class Location2 {
  width: number;

  restart() {
    this.x = this.initialX;
    this.y = this.initialY;
  }

  initialX: number;
  initialY: number;
  surfaces = [];
  objects: Coins[];
  boxes: Box[];
  enemies: Enemy[];
  private intervalHandler: number;
  private IsInLocation: boolean;
  private ScoreString: string = "Score = ";
  private Score = 0;
  private readonly locationWidth: number = 1300;
  private readonly locationHeight: number = 500;



  // private map = [
  //   [' ', ' ', ' '],
  //   [' ', 'P', ' '],
  //   [' ', 'X', ' ']
  // ]


  onEnter() {
    this.IsInLocation = true;
    this.intervalHandler = setInterval(() => {
      if (this.IsInLocation)
        hero.currentLocation = "location 2";

    }, 1000)
  }

  OnLeave() {
    this.IsInLocation = false;
  }

  IsCoinCollision(object: Coins, hero: Hero) {


    return hero.x < object.radius + object.x
      && hero.x > object.x - object.radius
      && hero.y < object.y + object.radius && hero.y > object.y - object.radius;

  }
  colisionWithEnemy(enemy: Enemy, hero: Hero) {

    return hero.x < enemy.x + 30
      && hero.y == enemy.y - 20;


  }

  constructor(public x, public y) {

    this.initialX = this.x;
    this.initialY = this.y;
    this.surfaces =
      [
        new Platform(this.x + 500, this.y, 1150, 12.59),
        new Platform(this.x + 500, this.y, 12.59, 400),
        new Platform(this.x + 887, this.y + 90, 12.59, 162),
        new Platform(this.x + 500, this.y + 90, 90, 12.59),
        new Platform(this.x + 575, this.y + 176, 150, 12.59),
        new Platform(this.x + 575, this.y + 176, 12.59, 70),
        new Platform(this.x + 655, this.y + 246, 12.59, 70),
        new Platform(this.x + 800, this.y + 176, 12.59, 70),
        new Platform(this.x + 800, this.y + 90, 90, 12.59, "target2"),
        new Platform(this.x + 800, this.y + 238, 90, 12.59),
        new Platform(this.x + 987, this.y + 90, 12.59, 162),
        new Platform(this.x + 1708.42, this.y, 12.59, 400),
        new Platform(this.x + 1518.42, this.y + 90, 190, 12.59, "target"),
        new Platform(this.x + 990, this.y + 90, 190, 12.59),
        new Platform(this.x + 1258.42, this.y + 160, 190, 12.59),
        new Platform(this.x + 1458.42, this.y + 230, 190, 12.59),
        new Platform(this.x + 1058.42, this.y + 230, 190, 12.59),
      ]
    this.objects = [
      new Coins(this.x + 550, this.y + 50, 50),
      new Coins(this.x + 850, this.y + 65, 50),
      new Coins(this.x + 1130, this.y + 65, 50),
      new Coins(this.x + 1670, this.y + 65, 50),
      new Coins(this.x + 1350, this.y + 135, 50),
      new Coins(this.x + 750, this.y + 75, 50),
      new Coins(this.x + 645, this.y + 153, 50),
      new Coins(this.x + 749, this.y + 212, 50),
      new Coins(this.x + 546, this.y + 230, 50),
      new Coins(this.x + 1160, this.y + 206, 50),

    ]
    this.boxes = [
      new Box(this.x + 829, this.y + 192),
      new Box(this.x + 1150, this.y + 65),
      new Box(this.x + 1610, this.y + 180),
    ]
    this.enemies = [
      new Enemy(this.x + 650, this.y + 176, 40, 40, 40),
    ]
  }


  update(heroMovement: Vector2d) {
    const map = createMapCanvas(this.locationHeight, this.locationWidth);
    const minimap = createLocationMap([...this.surfaces, ...this.enemies, hero], map);
    
    
    const dx = hero.calculateSpeed(this.surfaces);
    updatePosition(this, heroMovement)
    this.surfaces.forEach(surfaces => surfaces.update(dx))
    this.objects = this.objects.filter(object => {
      if (this.IsCoinCollision(object, hero)) { return this.Score += 1, false; }

      else
        return true;
    })
    this.objects.forEach(objects => objects.update(dx))
    this.boxes.forEach(box => box.update(heroMovement))
    this.enemies.forEach(enemy => {
      const path = enemy.findPath(HERO_SYMBOL, minimap)
      function prettyPrintPath(minimap,path,PATH_SYMBOL){
        minimap = minimap.map(mapRow => [...mapRow]); 
        path.forEach(([x,y]) => 
        minimap[x][y] = PATH_SYMBOL );
        prettyPrintMap(minimap);
        
      }
      prettyPrintPath(minimap,path,PATH_SYMBOL);
      // console.log("Path: ", path);
      enemy.update(heroMovement)
      if (this.colisionWithEnemy(enemy, hero)) { location.reload(); }
    }
    )
    return 0;
  }

  draw() {

    background(0, 209, 182);
    fill("#291C16");
    this.surfaces.forEach(surfaces => surfaces.draw())
    hero.draw();
    this.objects.forEach(objects => objects.draw())
    this.enemies.forEach(enemies => enemies.draw())
    this.boxes.forEach(box => box.draw())
  }
}
