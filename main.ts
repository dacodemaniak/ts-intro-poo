import { Arabica } from "./src/arabica";
import { Coffee } from "./src/coffee";
import { CoffeeMaker } from "./src/coffee-maker";
import { Robusta } from "./src/robusta";

class Main {
    public coffeeMaker!: CoffeeMaker;

    public constructor() {
        console.log(`I'm the Main constructor`);

        this._buildCoffeeMaker();

    }

    private _buildCoffeeMaker(): void {
        const arabica: Coffee = new Arabica();

        const robusta: Coffee = new Robusta();

        this.coffeeMaker = new CoffeeMaker();
        this.coffeeMaker.setCoffee(robusta);
        
        console.log(this.coffeeMaker.makeCoffee() + ' Energie utilisée : ' + this.coffeeMaker.getEnergy().getType());
    }
}

const myApp: Main = new Main();