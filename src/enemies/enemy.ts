import { Vector2d } from "../vector2d";
import { Drawable } from "../interfaces/drawable";
import { Movable } from "../interfaces/movable";
import { updatePosition } from "../utils/update";
import { ENEMY_SYMBOL, OBSTACLE_SYMBOL, VISITED_SYMBOL } from "../consts";
import { GameObject } from "../gameObject";
import { prettyPrintMap } from "../utils/mapUtils";

type Path = [number, number][]

export class Enemy implements Drawable, Movable, GameObject {

  constructor(
    public x: number,
    public y: number,
    public patrolArea: number,
    public width: number,
    public height: number) { }

  minimapSymbol: string = ENEMY_SYMBOL;
  minimapPosition: [number, number];


  draw(): void {
    fill("#89F58C");
    triangle(
      this.x + 40,
      this.y, // + 140
      this.x - 20,
      this.y, // + 140
      this.x + 30,
      this.y - 70 // + 140
    );
    fill('#753224');
    triangle(
      this.x + 30,
      this.y - 20, // + 140
      this.x - 10,
      this.y - 30, // + 140
      this.x + 20,
      this.y - 60 // + 140
    );
    fill('#753224');
    triangle(
      this.x + 20,
      this.y - 30, // + 140
      this.x - 20,
      this.y - 40, // + 140
      this.x + 10,
      this.y - 70 // + 140
    );

    triangle(
      this.x + 30,
      this.y - 20, // + 140
      this.x,
      this.y - 30, // + 140
      this.x + 50,
      this.y - 20 // + 140
    );

    triangle(
      this.x + 35,
      this.y - 30, // + 140
      this.x - 6,
      this.y - 40, // + 140
      this.x + 32,
      this.y - 70 // + 140
    );
    fill('white');
    circle(this.x + 17, this.y - 36, 19);
    fill('black');
    circle(this.x + 17, this.y - 36, 7);
    fill('red');
    circle(this.x + 17, this.y - 36, 2);



  }
  update(heroMovement: Vector2d) {
    updatePosition(this, heroMovement);
    this.x = this.x + this.direction;
    this.stepsCount = this.stepsCount + this.direction;
    if (this.stepsCount == this.patrolArea) {
      this.direction = -1;
    }
    if (this.stepsCount == -this.patrolArea) {
      this.direction = 1;
    }
  }

  private stepsCount: number = 0;
  private direction: number = 1;

  getNodeNeighbours(x: number, y: number) {
    const shifts = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    return shifts.map(([sx, sy]) => [x + sx, y + sy]);
  }

  findPath(targetSymbol: string, minimap: string[][]) {
    if (!this.minimapPosition) {
      return []
    }
    minimap = minimap.map(mapRow => [...mapRow]);
    const initialPath: Path = [this.minimapPosition];
    const queue: Path[] = [initialPath];
    while (queue.length != 0) {
      const subjectPath = queue.shift();
      const [subjectX, subjectY] = subjectPath.length == 1
        ? subjectPath[0]
        : subjectPath[subjectPath.length - 1];

      const subjectRow = minimap[subjectX];
      if (!subjectRow) {
        // if row is undefined it means, that we are outside of the map
        continue;
      }
      if (subjectRow[subjectY] == targetSymbol) {
        return subjectPath
      }

      this.getNodeNeighbours(subjectX, subjectY).forEach(([neighbourX, neighbourY]) => {
        if (minimap[neighbourX] == undefined
          || minimap[neighbourX][neighbourY] == VISITED_SYMBOL
          || minimap[neighbourX][neighbourY] == OBSTACLE_SYMBOL
          || minimap[neighbourX][neighbourY] == ENEMY_SYMBOL) {
          return;
        }
        if (minimap[neighbourX][neighbourY] != targetSymbol) {
          minimap[neighbourX][neighbourY] = VISITED_SYMBOL
        }
        const pathToExplore = [...subjectPath, [neighbourX, neighbourY]] as Path;
        queue.push(pathToExplore)
      })
    }
  }
}