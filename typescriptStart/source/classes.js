//ES 6 way nie mozna uzywac w typescripcie
// const EngineSymbol = Symbol("EngineSymbol");
// const GearSymbol = Symbol("Gear");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//oczywiscie klas abstract nie da sie instancjonowac
var EngineModel = (function () {
    function EngineModel() {
        this.gearState = 0;
    }
    Object.defineProperty(EngineModel.prototype, "gear", {
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
    return EngineModel;
}());
//klasa moze extendowac tylko 1 klase ale implementowac wiele interfejsow
var Engine = (function (_super) {
    __extends(Engine, _super);
    function Engine() {
        _super.call(this); // jak extenduje cos abstrakcyjnego to konstruktor wymagany
        // this[GearSymbol] = 0;
    }
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
    Engine.prototype.turnOnTurbo = function () {
        console.log('uruchomiono turbodoladownia');
    };
    return Engine;
}(EngineModel));
var Vehicle = (function () {
    // public name: string - od razu tworzy publiczne pole i nicjalizuje je
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
    MotorBoat.printType = function () {
        console.log("To jest klasa lodka");
    };
    MotorBoat.prototype.promptRunning = function () {
        if (this.usedEngine.isEngineRunning) {
            console.log("Is sliding on waves on gear: " + this.gear);
        }
        // super.promptRunning() // - tak wywoluje sie funkcje z klasy bazowej
    };
    return MotorBoat;
}(Vehicle));
var Car = new Vehicle(new Engine(), "Mastodont");
// let abstrakt = new EngineModel(); // nie da sie instancjonowac klasy abstrakcyjnej
window.Car = Car;
Car.toggleEngine();
Car.gear = 2;
Car.toggleEngine();
window.Boat = new MotorBoat(new Engine(), "Piorun");
window.Boat.toggleEngine();
MotorBoat.printType(); // uzycie klasy statycznej
var Person = (function () {
    // private _firstName;
    // private _lastName;
    //nie trza deklarowac zmiennych bo mozna w konstruktorze
    // 2 arg opcjonalny - ?
    function Person(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        // MOZNA UTWORZYC TYLKO 1 KONSTRUKTOR
        get: function () {
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.presentSelf = function () {
        console.log("Jestem " + this.firstName + " " + (this.lastName || '') + " ");
    };
    return Person;
}());
function sayHi(person) {
    console.log(person.firstName + " mowi czesc");
}
sayHi({
    firstName: 'Rafał', lastName: 'Kuchar', presentSelf: function () {
    }
}); //ok
sayHi({
    firstName: 'Asia', presentSelf: function () {
    }
}); // ok
// sayHi({firstName: 'Tomasz', lastName: 'Grzyb', presentSelf: function(){}, age: 37}) // nie zadziala
// interfejs dopuszcza tylko znane typy
var person1 = new Person("Krzysztof");
person1.presentSelf();
sayHi((person1));
var EmptyPerson = (function () {
    function EmptyPerson() {
    }
    EmptyPerson.prototype.presentSelf = function () {
    };
    return EmptyPerson;
}());
// kosntruktor domyslny pozwala na tworzenie klas bez inicjalizacji pol
var emptyPerson1 = new EmptyPerson();
sayHi(emptyPerson1); // first name undefined
var sum = function () {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args.reduce(function (s, x) { return s += x * _this.multiplier; }, 0);
};
//# sourceMappingURL=classes.js.map