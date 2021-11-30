import { Arabica } from "./arabica";
import { Coffee } from "./coffee";

export class CoffeeMaker {
    private coffee: Coffee;
    private liquid: string = '';
    private energy: string = '';

    public constructor() {
        this.coffee = new Arabica(); // Injection de dépendance

        this.liquid = 'eau';
        this.energy = 'électricité';
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

    public setEnergy(energy: string): void {
        if (energy == 'électricité' || energy == 'feu') {
            this.energy = energy;
        }
    }

    public getEnergy(): string {
        return this.energy;
    }
}