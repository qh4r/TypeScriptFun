function present(constructorFn: Function) { // to tekorator
    console.log(constructorFn)
}

// wypisze
// function Student(name) {
//     this.name = name;
// }

@present
class Student {
    constructor(public name: string){

    }
}

let student1 = new Student("MArcin");