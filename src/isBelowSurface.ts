import { Hero } from "./hero";
import { Surface } from "./surface";


export const isBelowSurface = (surface: Surface, item: Hero) => surface.y + surface.height < item.y;
