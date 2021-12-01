import { Paintable } from "./paintable";

export abstract class Shape implements Paintable {
    protected name: string = '';

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public paint(color: string): string {
        return 'Paint the : ' + this.name + ' in ' + color;
    }

    public abstract perimeter(): number;
}