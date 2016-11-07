//ES 6 way nie mozna uzywac w typescripcie
// const EngineSymbol = Symbol("EngineSymbol");
// const GearSymbol = Symbol("Gear");

interface IEngine {
    // get isEngineRunning():boolean // tylko metody w interfejsach
    turnOnTurbo(): void;
}

interface ITest {

}

//oczywiscie klas abstract nie da sie instancjonowac
abstract class EngineModel {
    constructor() {
        this.gearState = 0;
    }

    public abstract toggleEngine(state?: boolean); //metoda abstrakcyjna

    // public abstract get isEngineRunning():boolean; // - blad property nie moze byc abstrakcyjna

    private gearState: number;

    public set gear(val: number) {
        // this[GearSymbol] = val;
        this.gearState = val;
    }

    public get gear(): number {
        // return this[GearSymbol];
        return this.gearState;
    }
}

//klasa moze extendowac tylko 1 klase ale implementowac wiele interfejsow
class Engine extends EngineModel implements IEngine, ITest {
    //Typescript way - bez symbolu
    private engineRunning: boolean;

    constructor() {
        super(); // jak extenduje cos abstrakcyjnego to konstruktor wymagany
        // this[GearSymbol] = 0;
    }

    public get isEngineRunning(): boolean {
        return this.engineRunning;
    }

    toggleEngine(state?: boolean) {
        this.engineRunning = state || !this.engineRunning;
    }

    public turnOnTurbo(): void {
        console.log('uruchomiono turbodoladownia');
    }
}

class Vehicle {
    private engine: Engine;

    // public name: string - od razu tworzy publiczne pole i nicjalizuje je
    public constructor(engine: Engine, public name: string) {
        // this[EngineSymbol] = engine;
        this.engine = engine;
    }

    //DOMYSLNA DOSTEPNOSC TO PUBLIC
    get gear(): number {
        // return this[EngineSymbol].gear;
        return this.engine.gear;
    }

    set gear(newGear: number) {
        // this[EngineSymbol].gear = newGear;
        this.engine.gear = newGear;
        this.promptRunning();
    }

    public toggleEngine(state?: boolean) {
        // this[EngineSymbol] = state || !this[EngineSymbol];
        this.engine.toggleEngine(state);
        this.promptRunning();
    }

    protected get usedEngine(): Engine {
        return this.engine;
    }

    protected promptRunning(): void {
        // if(this[EngineSymbol].isEngineRunning()) {
        if (this.engine.isEngineRunning) {
            console.log(`Is running on gear: ${this.gear}`)
        }
    }
}

class MotorBoat extends Vehicle {
    public static printType(): void {
        console.log("To jest klasa lodka");
    }

    protected  promptRunning() {
        if (this.usedEngine.isEngineRunning) {
            console.log(`Is sliding on waves on gear: ${this.gear}`)
        }
        // super.promptRunning() // - tak wywoluje sie funkcje z klasy bazowej
    }
}

const Car: Vehicle = new Vehicle(new Engine(), "Mastodont");

// Rozszerzenie interfejsu window o pole Car, zeby moc uzyc tam pola
interface Window { Car: Vehicle; Boat: MotorBoat
}

// let abstrakt = new EngineModel(); // nie da sie instancjonowac klasy abstrakcyjnej

window.Car = Car;

Car.toggleEngine();
Car.gear = 2;
Car.toggleEngine();

window.Boat = new MotorBoat(new Engine(), "Piorun");
window.Boat.toggleEngine();

MotorBoat.printType(); // uzycie klasy statycznej