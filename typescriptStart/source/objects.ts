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

//noinspection TsLint
house = {
    street: 'Kazimierza',
    apartment: 5
};
