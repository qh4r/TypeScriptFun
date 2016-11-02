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
//house = {
//    test: "Sobieskiego"
//}; nie zadziala wymagany typ Address
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
//# sourceMappingURL=objects.js.map