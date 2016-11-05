//ES 6 way nie mozna uzywac w typescripcie
// const EngineSymbol = Symbol("EngineSymbol");
// const GearSymbol = Symbol("Gear");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Engine = (function () {
    function Engine() {
        // this[GearSymbol] = 0;
        this.gearState = 0;
    }
    Object.defineProperty(Engine.prototype, "gear", {
        get: function () {
            // return this[GearSymbol];
            return this.gearState;
        },
        set: function (val) {
            // this[GearSymbol] = val;
            this.gearState = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "isEngineRunning", {
        get: function () {
            return this.engineRunning;
        },
        enumerable: true,
        configurable: true
    });
    Engine.prototype.toggleEngine = function (state) {
        this.engineRunning = state || !this.engineRunning;
    };
    return Engine;
}());
var Vehicle = (function () {
    function Vehicle(engine, name) {
        this.name = name;
        // this[EngineSymbol] = engine;
        this.engine = engine;
    }
    Object.defineProperty(Vehicle.prototype, "gear", {
        //DOMYSLNA DOSTEPNOSC TO PUBLIC
        get: function () {
            // return this[EngineSymbol].gear;
            return this.engine.gear;
        },
        set: function (newGear) {
            // this[EngineSymbol].gear = newGear;
            this.engine.gear = newGear;
            this.promptRunning();
        },
        enumerable: true,
        configurable: true
    });
    Vehicle.prototype.toggleEngine = function (state) {
        // this[EngineSymbol] = state || !this[EngineSymbol];
        this.engine.toggleEngine(state);
        this.promptRunning();
    };
    Object.defineProperty(Vehicle.prototype, "usedEngine", {
        get: function () {
            return this.engine;
        },
        enumerable: true,
        configurable: true
    });
    Vehicle.prototype.promptRunning = function () {
        // if(this[EngineSymbol].isEngineRunning()) {
        if (this.engine.isEngineRunning) {
            console.log("Is running on gear: " + this.gear);
        }
    };
    return Vehicle;
}());
var MotorBoat = (function (_super) {
    __extends(MotorBoat, _super);
    function MotorBoat() {
        _super.apply(this, arguments);
    }
    MotorBoat.prototype.promptRunning = function () {
        if (this.usedEngine.isEngineRunning) {
            console.log("Is sliding on waves on gear: " + this.gear);
        }
        // super.promptRunning() // - tak wywoluje sie funkcje z klasy bazowej
    };
    return MotorBoat;
}(Vehicle));
var Car = new Vehicle(new Engine(), "Mastodont");
window.Car = Car;
Car.toggleEngine();
Car.gear = 2;
Car.toggleEngine();
window.Boat = new MotorBoat(new Engine(), "Piorun");
window.Boat.toggleEngine();
//# sourceMappingURL=classes.js.map