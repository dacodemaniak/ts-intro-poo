import { Arabica } from "./arabica";
import { Coffee } from "./coffee";
import { Energy } from "./energy";

export class CoffeeMaker {
    private coffee: Coffee;
    private liquid: string = '';
    private energy: Energy;

    public constructor() {
        this.coffee = new Arabica(); // Injection de dépendance

        this.liquid = 'eau';
        this.energy = new Energy();
    }

    public makeCoffee(): string {
        return 'Coffee is ready : ' + this.coffee.getType();
    }

    public setCoffee(type: Coffee): void {
        this.coffee = type;
    }

    public getCoffee(): Coffee {
        return this.coffee;
    }

    public getLiquid(): string {
        return this.liquid;
    }

    public setEnergy(energy: Energy): void {
        this.energy = energy;
    }

    public getEnergy(): Energy {
        return this.energy;
    }
}