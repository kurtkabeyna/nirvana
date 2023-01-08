
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