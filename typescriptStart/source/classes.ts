//ES 6 way nie mozna uzywac w typescripcie
// const EngineSymbol = Symbol("EngineSymbol");
// const GearSymbol = Symbol("Gear");

class Engine {
    //Typescript way - bez symbolu
    private engineRunning:boolean;
    private gearState:number;

    constructor() {
        // this[GearSymbol] = 0;
        this.gearState = 0;
    }

    public set gear(val:number) {
        // this[GearSymbol] = val;
        this.gearState = val;
    }

    public get gear():number {
        // return this[GearSymbol];
        return this.gearState;
    }

    public get isEngineRunning():boolean {
        return this.engineRunning;
    }

    toggleEngine(state?:boolean) {
        this.engineRunning = state || !this.engineRunning;
    }
}

class Vehicle {
    private engine:Engine;

    // public name: string - od razu tworzy publiczne pole i nicjalizuje je
    public constructor(engine:Engine, public name: string) {
        // this[EngineSymbol] = engine;
        this.engine = engine;
    }

    //DOMYSLNA DOSTEPNOSC TO PUBLIC
    get gear():number {
        // return this[EngineSymbol].gear;
        return this.engine.gear;
    }

    set gear(newGear:number) {
        // this[EngineSymbol].gear = newGear;
        this.engine.gear = newGear;
        this.promptRunning();
    }

    public toggleEngine(state?:boolean) {
        // this[EngineSymbol] = state || !this[EngineSymbol];
        this.engine.toggleEngine(state);
        this.promptRunning();
    }

    protected get usedEngine() : Engine{
        return this.engine;
    }

    protected promptRunning():void {
        // if(this[EngineSymbol].isEngineRunning()) {
        if (this.engine.isEngineRunning) {
            console.log(`Is running on gear: ${this.gear}`)
        }
    }
}

class MotorBoat extends Vehicle {
    protected  promptRunning() {
        if (this.usedEngine.isEngineRunning) {
            console.log(`Is sliding on waves on gear: ${this.gear}`)
        }
        // super.promptRunning() // - tak wywoluje sie funkcje z klasy bazowej
    }
}

const Car:Vehicle = new Vehicle(new Engine(), "Mastodont");

// Rozszerzenie interfejsu window o pole Car, zeby moc uzyc tam pola
interface Window { Car: Vehicle; Boat: MotorBoat }

window.Car = Car;

Car.toggleEngine();
Car.gear = 2;
Car.toggleEngine();

window.Boat = new MotorBoat(new Engine(), "Piorun");
window.Boat.toggleEngine();
