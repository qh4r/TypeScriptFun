let object1 = {
    name: 'rafał',
    age: 26
};

//NASTEPUJE INFERENCJA TYPU
//od teraz utworzony obiekt musi miec pola name i age o odpowiednich typach i nic poza tym

 //object1 = {}; // error wymagane pola name i age jako string i age
// object1 = {name: "tomasz", boring: true} // j/w brakuje age
// object1 = {name: "tomasz", age: 32, boring: true}; // nadmiar tez odpada

let object2 : {name: string, length: number} = { // jawna dekalracja typow
    length: 31,
    name: "Długa"
};

// typ to nie klasa tylko wymagany format
// ? okresla nullable
type Address = {street: string, block?: string, apartment: number};

let house : Address;
//house = {
//    test: "Sobieskiego"
//}; nie zadziala wymagany typ Address

//dziala
house = {
    street: 'Kazimierza',
    apartment: 5
};

//union type

let dupa : string | boolean;
//teraz dupa moze byc stringiem lub boolem
// dupa = 23; // nie zadziala
dupa = false;
dupa = "asd";

//sprawdzanie typow
console.log(typeof dupa == "string");
console.log(typeof dupa == "boolean"); //false

//WSZYSTKO JEST DOMYSLNIE USTAWIANE NA UNDEFINED A DOMYSLNY TYP (GDY NIE PODAMY GO ANI NIE ZAINICJALIZUJEMY JAWNIE) - TO ANY
let isNullable = 12;
isNullable = null; // jest nulowalny

//MOZNA ZMIENIC TO USTAWIENIE NA NIENULLOWALNE ustawiajac "strictNullChecks" w tscconfig na true
// nie ejst to wspierane przez intelisense webstorma?