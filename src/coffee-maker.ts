export class CoffeeMaker {
    private coffee: string = '';
    private liquid: string = '';
    private energy: string = '';

    public constructor() {
        this.coffee = 'arabica';
        this.liquid = 'eau';
        this.energy = 'électricité';
    }

    public makeCoffee(): string {
        return 'Coffee is ready : ' + this.coffee;
    }

    public setCoffee(type: string): void {
        const lowerType: string = type.toLocaleLowerCase();

        if (lowerType == 'robusta' || lowerType == 'arabica') {
            this.coffee = lowerType;
        } else {
            this.coffee = 'arabica';
        }
    }

    public getCoffee(): string {
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