import { CoffeeMaker } from "./src/coffee-maker";

class Main {
    public coffeeMaker: CoffeeMaker;

    public constructor() {
        console.log(`I'm the Main constructor`);
        this.coffeeMaker = new CoffeeMaker('fraise', 'eau', 'électricité');
        this.coffeeMaker.setCoffee('robusta');
        this.coffeeMaker.setEnergy('Pile nucléaire');
        console.log(this.coffeeMaker.makeCoffee() + ' Energie utilisée : ' + this.coffeeMaker.getEnergy());
    }
}

const myApp: Main = new Main();