import { Arabica } from "./src/arabica";
import { Coffee } from "./src/coffee";
import { CoffeeMaker } from "./src/coffee-maker";
import { CoffeeMakerFactory } from "./src/coffee-maker-factory";
import { Energy } from "./src/energy";
import { Robusta } from "./src/robusta";

class Main {
    public coffeeMaker!: CoffeeMaker;

    public constructor() {
        console.log(`I'm the Main constructor`);

        this._buildCoffeeMaker();

    }

    private _buildCoffeeMaker(): void {
        this.coffeeMaker = CoffeeMakerFactory.mixedEletricCoffeeMaker();

        console.log(this.coffeeMaker.makeCoffee() + ' Energie utilisée : ' + this.coffeeMaker.getEnergy().getType());
    }
}

const myApp: Main = new Main();