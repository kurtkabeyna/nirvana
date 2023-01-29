import { MAP_CELL_HEIGHT_PX, MAP_CELL_WIDTH_PX, SURFACE_SYMBOL } from "consts";
import { Surface } from "surface";

export const isObjectInCell = (objX: number, objY: number, objWidth: number, objHeight: number, cellX: number, cellY: number) =>
    objX <= cellX
    && cellX <= objX + objWidth
    && objY <= cellY
    && cellY <= objY + objHeight;


export const prettyPrintMap = (locationMap: string[][]) => {
    const separator = "-".repeat(locationMap[0].length);
    console.log(separator);
    locationMap.forEach(row => {
        console.log(row.join(''))
    })
    console.log(separator);
}
export const createLocationMap = (objects : Surface[], map : string[][], symbol : string) =>{
    
    map.forEach((row, r) => {
      row.forEach((cell, c) => {

        const cellX = c * MAP_CELL_WIDTH_PX;
        const cellY = r * MAP_CELL_HEIGHT_PX;
        objects.forEach((object) => {
          if (isObjectInCell(object.x, object.y, object.width, object.height, cellX, cellY)) {
            map[r][c] = symbol
          }
        })

        
      })
    })
    return map
  }
 export const createMapCanvas = (locationHeight : number, locationWidth : number): string[][] => {
    const rowCount = locationHeight / MAP_CELL_HEIGHT_PX;
    const cellCount = locationWidth / MAP_CELL_WIDTH_PX;
    const row = Array(cellCount).fill(' '); 
    return Array(rowCount).fill(row).map(mapRow => [...mapRow]);
}