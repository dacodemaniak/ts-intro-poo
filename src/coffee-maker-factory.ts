import { CoffeeMaker } from "./coffee-maker";
import { CoffeeMix } from "./coffee-mix";
import { Energy } from "./energy";
import { Robusta } from "./robusta";

export class CoffeeMakerFactory {
    public static electricCoffeeMaker(): CoffeeMaker {
        const coffeeMaker: CoffeeMaker = new CoffeeMaker();
        coffeeMaker.setCoffee(new Robusta());

        return coffeeMaker;
    }

    public static gasCoffeeMaker(): CoffeeMaker {
        const coffeeMaker: CoffeeMaker = new CoffeeMaker();
        coffeeMaker.setCoffee(new Robusta());

        const energy: Energy = new Energy();
        energy.setType('Gaz');
        energy.setBoilingTime(45);

        coffeeMaker.setEnergy(energy);

        return coffeeMaker;
    }

    public static mixedEletricCoffeeMaker(): CoffeeMaker {
        const coffeeMaker: CoffeeMaker = new CoffeeMaker();

        const mixed: CoffeeMix = new CoffeeMix();
        mixed.robustaQuantity(70);

        coffeeMaker.setCoffee(mixed);

        return coffeeMaker;
    }
}