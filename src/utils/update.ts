import { Vector2d } from "../vector2d";


export const updatePosition = (obj, heroMovement : Vector2d) => {
 obj.x = obj.x - heroMovement.x;
 obj.y = obj.y - heroMovement.y;

}


