import { Circle } from "./circle";
import { Paintable } from "./paintable";
import { PhoneSkin } from "./phone-skin";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";

class Geometry {
    public constructor() {
        const rectangle: Rectangle = new Rectangle();
        rectangle.setLength(10);
        rectangle.setWidth(5);

        const circle: Circle = new Circle();
        circle.setRadius(5);

        const coque: PhoneSkin = new PhoneSkin('Coque Samsung S21');

        const chariot: Paintable[] = [rectangle, circle, coque];

        for (let i = 0; i < chariot.length; i++) {
            console.log(chariot[i].paint('Rouge'));
        }
    }
}

new Geometry();