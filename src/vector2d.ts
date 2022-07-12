export class Vector2d {
  constructor(public x, public y) {}

  add(other: Vector2d) {
    return new Vector2d(this.x + other.x, this.y + other.y);
  }
}
