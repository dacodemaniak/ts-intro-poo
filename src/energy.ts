export class Energy {
    private type: string;




    public constructor() {
        this.type = 'Electricité';
    }
    
    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }
    

}