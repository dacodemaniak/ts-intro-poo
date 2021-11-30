export class Energy {
    private type: string;
    private boilingTime: number;

    public constructor() {
        this.type = 'Electricité';
        this.boilingTime = 20;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public setBoilingTime(time: number): void {
        this.boilingTime = time;
    }

    public getBoilingTime(): number {
        return this.boilingTime;
    }
}