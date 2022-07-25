import { hero } from "./sketch";

export class Location2 {
    draw() {
        background(123, 255, 230);
        hero.draw();
    }
    update(): number {
        return 0;
    }
}
