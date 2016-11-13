function present(constructorFn: Function) { // to dekorator
    console.log(constructorFn)
}
//DEKORATOR MUSI PRZYJMOWAC KONSTRUKTOR

// wypisze
// function Student(name) {
//     this.name = name;
// }

@present
class Student {
    constructor(public name: string){

    }
}

function printName(constructorFn: Function){
    // tak dodajemy funkcje dekoratorem
    constructorFn.prototype.printName = function(){
        console.log(`siemanko! JESTEM ${this.name}`);
    }
}

// fabryka
function checkPresent(addFunction : boolean){
    return addFunction ? printName : null;
}

@present // mozna dodac kilka dekoratorow
@checkPresent(true) // fabryka zwraca dekorator zalezny od parametrow
class Senior extends Student {
    constructor(name: string) {
        super(name);
    }
}
let student1 = new Student("MArcin");
let senior1 = new Senior("Adam");

// w ten sposob rzutujemy <>
// bez rzutowania na any typescriptnie bedzie widzial printName na typie senior
(<any>senior1).printName();

// method decorator

function methodDecoratorFactory(isWritable: boolean){
    return function methodDecorator(target: any, propName: string, propertyDesc: PropertyDescriptor){
        propertyDesc.writable = isWritable;
    }
}

// param dekorator
function paramDecorator(target: any, methodName: string, paramIndex: number) {
    console.log('second param is: ', target, methodName, paramIndex);
}
// istnieja tez dekoratory propet ale je pominalem

class Calc {

    @methodDecoratorFactory(false)
    sum(arg1: number, @paramDecorator arg2: number) : number {
        return arg1 + arg2;
    }
}

let calc1 = new Calc();
calc1.sum = function(arg1, arg2) : number{
    return 2*(arg1+arg2)
};

console.log('suma',calc1.sum(2,2)); //nadpisanie nie zadziala dzieki dekoratorowi

// prop decorator
