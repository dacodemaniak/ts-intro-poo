import { CoffeeInterface } from "./coffee-interface";

export abstract class Coffee implements CoffeeInterface {
    protected type: string = '';

    public getType(): string {
        return this.type;
    }
}