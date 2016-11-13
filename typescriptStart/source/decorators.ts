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