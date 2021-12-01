import { Shape } from "./shape";

export class Rectangle extends Shape {
    private length: number = 0;
    private width: number = 0;
    
    public constructor() {
        super();
        this.name = 'Rectangle';
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    /**
     * Override
     * @returns number
     */
    public perimeter(): number {
        return (this.length + this.width) * 2;
    }
}