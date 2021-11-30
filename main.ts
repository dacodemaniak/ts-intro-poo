import { Arabica } from "./src/arabica";
import { Coffee } from "./src/coffee";
import { CoffeeMaker } from "./src/coffee-maker";
import { Robusta } from "./src/robusta";

class Main {
    public coffeeMaker: CoffeeMaker;

    public constructor() {
        console.log(`I'm the Main constructor`);

        const arabica: Coffee = new Arabica();

        const robusta: Coffee = new Robusta();

        this.coffeeMaker = new CoffeeMaker();
        this.coffeeMaker.setCoffee(robusta);
        this.coffeeMaker.setEnergy('Pile nucléaire');
        console.log(this.coffeeMaker.makeCoffee() + ' Energie utilisée : ' + this.coffeeMaker.getEnergy());
    }
}

const myApp: Main = new Main();