
class Car {

    make: string;
    model: number;
    color: string;

    constructor(make:string,model:number,color:string) {
        this.make = make;
        this.model=model;
        this.color=color;

    }

    private getMake():string {
        return this.make
    }

    protected getModel():number {
        return this.model
    }

    protected getColor():string {
        return this.color
    }

    public type():void {
        const make:string = this.getMake()
        const model:number = this.getModel()
        const color:string = this.getColor()
        console.log(`
        Make: ${make}
        Model: ${model}
        Color: ${color}
        `)
    }
}

const car:Car = new Car('Honda Civic',1987,'blue')
car.type()

class SportsCar extends Car {
    getColor(){
        return "black"
    }

}

const sporty = new SportsCar("Porsche", 1999, "Red")
sporty.type()
