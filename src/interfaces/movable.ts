import { Vector2d } from "../vector2d";

export interface Movable {
    update(dx: Vector2d): void;
}