import { Shape } from "./shape";

export class Circle extends Shape {
    private radius: number = 0;

    public constructor() {
        super();
        this.name = 'Circle';
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public perimeter(): number {
        return Math.PI * this.radius * 2;
    }
}