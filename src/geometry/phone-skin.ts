import { Paintable } from "./paintable";

export class PhoneSkin implements Paintable {
    private name: string = '';

    public constructor(name: string) {
        this.name = name;
    }

    public paint(color: string): string {
        return this.name + ' is ' + color + ' colored';
    }
}