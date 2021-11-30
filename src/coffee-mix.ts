import { Arabica } from "./arabica";
import { Coffee } from "./coffee";
import { CoffeeInterface } from "./coffee-interface";
import { Robusta } from "./robusta";

export class CoffeeMix implements CoffeeInterface {
    private coffees: Map<Coffee, number> = new Map();
    
    private robusta: Robusta = new Robusta();
    private arabica: Arabica = new Arabica();

    public constructor() {
        this.coffees.set(
            this.arabica, // new Arabica()
            0
        );

        this.coffees.set(
            this.robusta, // new Robusta()
            0
        );
    }

    public getType(): string {
        let mix: string = '';

        this.coffees.forEach((quantity: number, coffee: Coffee) => {
            mix += coffee.getType() + ' ' + quantity + '% ';
        });

        return mix;
    }

    /**
     * Adjust arabica quantity and determine robusta quantity
     * @param quantity 
     */
    public arabicaQuantity(quantity: number): void {
        this.coffees.set(this.arabica, quantity);
        const reste: number = 100 - quantity;
        this.coffees.set(this.robusta, reste);
    }

    public robustaQuantity(quantity: number): void {
        this.coffees.set(this.robusta, quantity);
        const reste: number = 100 - quantity;
        this.coffees.set(this.arabica, reste);
    }
}