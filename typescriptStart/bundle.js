var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var object1 = {
    name: 'rafał',
    age: 26
};
//NASTEPUJE INFERENCJA TYPU
//od teraz utworzony obiekt musi miec pola name i age o odpowiednich typach i nic poza tym
//object1 = {}; // error wymagane pola name i age jako string i age
// object1 = {name: "tomasz", boring: true} // j/w brakuje age
// object1 = {name: "tomasz", age: 32, boring: true}; // nadmiar tez odpada
var object2 = {
    length: 31,
    name: "Długa"
};
var house;
// house = {
//    test: "Sobieskiego"
// }; //nie zadziala wymagany typ Address
//dziala
house = {
    street: 'Kazimierza',
    apartment: 5
};
//union type
var dupa;
//teraz dupa moze byc stringiem lub boolem
// dupa = 23; // nie zadziala
dupa = false;
dupa = "asd";
//sprawdzanie typow
console.log(typeof dupa == "string");
console.log(typeof dupa == "boolean"); //false
//WSZYSTKO JEST DOMYSLNIE USTAWIANE NA UNDEFINED A DOMYSLNY TYP (GDY NIE PODAMY GO ANI NIE ZAINICJALIZUJEMY JAWNIE) - TO ANY
var isNullable = 12;
isNullable = null; // jest nulowalny
//MOZNA ZMIENIC TO USTAWIENIE NA NIENULLOWALNE ustawiajac "strictNullChecks" w tscconfig na true
// nie ejst to wspierane przez intelisense webstorma?
//destrukturyzacja jak w es6
var dest = { message: "Dupa", severity: 100, user: { id: 1337, name: "rafa" } };
var message = dest.message, problemLevel = dest.severity; // problem level to alias
console.log(message, problemLevel); //ok
console.log(severity); //error alias przesłonił nazwe
// !!! ponizsza deklaracja (severity) zostanie zhoistowana wiec nie  bedzie errora ale powyzsza linija zwroci undefined
var severity = dest.severity, id = dest.user.id; // zaglebienie
//console.log(user) // blad nie ma usera, zostal wykorzystany tylko jako sposob na dostep glebiej
console.log(severity, id);
var account;
(function (account) {
    var bank = 100;
    function withdraw(val) {
        var w = Math.max(Math.min(val, bank), 0);
        bank -= w;
        return bank;
    }
    account.withdraw = withdraw;
    function store(val) {
        return bank += val;
    }
    account.store = store;
    function saldo() {
        return bank;
    }
    account.saldo = saldo;
})(account || (account = {}));
/// <reference path="account.ts" />
// by powyzsze dzialalo trzeba uzywac amd albo system jako loadera modulow
(function () {
    var elems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elems[_i - 0] = arguments[_i];
    }
    while (elems.length) {
        console.log("bie\u017C\u0105ce saldo: " + elems.shift()());
    }
})(account.saldo, account.store.bind(null, 23), account.store.bind(null, 100), account.withdraw.bind(null, 43), account.store.bind(null, 123), account.withdraw.bind(null, 500));
var testy;
(function (testy) {
    function HALO() {
        console.log('halo to namespace');
    }
    testy.HALO = HALO;
})(testy || (testy = {}));
/// <reference path="./namespaces/customer.ts" />
// powyzsze to require namespaca testy
console.log('test');
testy.HALO();
testy.HALO();
testy.HALO();
var $elem = document.createElement("h1");
$elem.innerText = "DZIALA";
document.querySelector('body').appendChild($elem);
//nie dziala i chuj
// import {sum, multiply} from 'source/modules/scripts';
//
// let arg = [1,2,3,4,5,6,7,8,9];
// console.log(`1-9 suma: ${sum(...arg)}, a iloczyn: ${multiply(...arg)}`); 
//ES 6 way nie mozna uzywac w typescripcie
// const EngineSymbol = Symbol("EngineSymbol");
// const GearSymbol = Symbol("Gear");
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
function toUpper(name) {
    return name.toUpperCase();
}
var output = toUpper('rafał'); // terazwymaga string
// output =  2; // nie mozna bo output przestrzega typu
console.log(output);
function logAsError(text) {
    console.error('Error: ', text);
    // return text; // nie mozna nic zwrocic jesli typ deklarowany jako void
}
function Add() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i - 0] = arguments[_i];
    }
    return numbers.reduce(function (sum, n) { return sum += n; }, 0); // nie okreslono wyraznie void wiec inferencja do typu zwracanego number
}
logAsError("test: " + Add(1, 2, 5, 76, 12));
function PerformNumericCalc(method) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return method.apply(void 0, numbers);
}
// niestety obecnosc ... musi sie zgadzac  ... rozwija tablice
console.log('wywloanie', PerformNumericCalc(Add, 23, 21, 53, 321));
var func;
func = function (v1, v2) { return v1 % v2; };
console.log('mod: ', func(12, 7));
var test = function (input, interval) {
    if (input === void 0) { input = 2; }
    // default nie musi byc ostatnią warością
    setTimeout(function () {
        console.log(input -= 1);
        if (input > 0) {
            test(input, 200);
        }
    }, 1000);
};
console.log(test(5, 100));
console.log(test(undefined, 1000)); // undefined przyjmuje wartosc domyslna
console.log(test(null, 2000)); // przyjmuje na start wartosc 1? -- null jest rzutowany na 0!
var testString = "test";
testString = "asd";
var num = 23;
// num = "asd"; //blad
num = 2.31;
var word;
// word = 34;  //blad
console.log(word); //uzycie nie zainicjalizowanej zmiennej nie ejst problemem - undefined
word = "Słowo";
console.log(word);
var tab = []; // bez = [] TALICE BEDZIE NIEZAINICJALIZOWANA
//tab.push(23); // nie mozna
tab.push("test");
var tab2 = [23, 12, 4132.12];
console.log(typeof tab, typeof tab2); // object
var tab3 = [23, "asdas", [23, 21]]; // any to typ dowolny
var tab4 = [23, "asdas", [23, 21]]; // domyslnie przjmie typ any
var tuple1 = [12, "Marian", "hehe"]; //tuple wymaga formatu pol
// tuple1 = [12, "Marian"]; // blad - nie moze brakowac pol
// tuple1 = ["asd", 23, "marian"] // blad -musi byc poprawny typ
tuple1 = [43, "Krystan", 'asd', 'test']; // moze byc niestety nadmiar
console.log('tuple: ', tuple1);
//enums
var Marka;
(function (Marka) {
    Marka[Marka["Opel"] = 0] = "Opel";
    Marka[Marka["Honda"] = 100] = "Honda";
    Marka[Marka["Fiat"] = 101] = "Fiat"; //101
})(Marka || (Marka = {}));
var fura = Marka.Fiat;
console.log(fura); // integer po stronie jsa
console.log(Marka);
var typeAny; //implicit any
// NO IMPLICIT ANY w cfg SPRAWIA ŻE TAKA DEKLARACJA BEZ TYPU LUB INFERENCJI JEST ZABRONIONA
var otherAny; // takie any jest dopuszczalne
typeAny = 12;
typeAny = "asd";
var immutable = 3;
// immutable = 5; //const nie mozna zmienic ofc
{
    var outBlock;
    var inBlock = void 0;
}
outBlock = 5;
// inBlock = 34; // nie istnieje bo let przypisuje do bloku {}
// w typescripcie nie da sie zadeklarowac nowej zmiennej bez var,let lub const
// tak jak w es5 w trybie use strict 
define("modules/scripts", ["require", "exports"], function (require, exports) {
    "use strict";
    function sum() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return args.reduce(function (s, x) { return s += x; }, 0);
    }
    exports.sum = sum;
    function multiply() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return args.reduce(function (s, x) { return s *= x; }, 0);
    }
    exports.multiply = multiply;
});
//# sourceMappingURL=bundle.js.map