import { Coffee } from "./coffee";
import { CoffeeMaker } from "./coffee-maker";

export class Arabica extends Coffee {
    public constructor() {
        super();
        this.type = 'Arabica';
    }
}