import { Arabica } from "./arabica";
import { Coffee } from "./coffee";
import { CoffeeInterface } from "./coffee-interface";
import { Energy } from "./energy";

export class CoffeeMaker {
    private coffee: CoffeeInterface;
    private liquid: string = '';
    private energy: Energy;

    private static readonly BOILING_DELTA: number = 10;

    public constructor() {
        this.coffee = new Arabica(); // Injection de dépendance

        this.liquid = 'eau';
        this.energy = new Energy();
    }

    public makeCoffee(): string {
        const boilingRealTime: number = this.energy.getBoilingTime() - CoffeeMaker.BOILING_DELTA;

        return 'Coffee is ready : ' + this.coffee.getType() + ' Timing : ' + boilingRealTime;
    }

    public setCoffee(type: CoffeeInterface): void {
        this.coffee = type;
    }

    public getCoffee(): CoffeeInterface {
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