export class CoffeeMaker {
    private coffee: string = '';
    private liquid: string = '';
    private energy: string = '';

    public constructor(coffee: string, liquid: string, energy: string) {
        this.setCoffee(coffee);

        this.liquid = liquid;
        this.energy = energy;
    }

    public makeCoffee(): string {
        return 'Coffee is ready : ' + this.coffee;
    }

    public setCoffee(type: string): void {
        if (type == 'robusta' || type == 'arabica') {
            this.coffee = type;
        } else {
            this.coffee = 'arabica';
        }
    }

    public getCoffee(): string {
        return this.coffee;
    }

    public setLiquid(liquid: string): void {
        if (liquid == 'eau') {
            this.liquid = liquid;
        }
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