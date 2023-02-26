import { Hero } from "./hero";
import { GameObject } from "./gameObject";


export const isBelowSurface = (surface: GameObject, item: Hero) => surface.y + surface.height < item.y;
