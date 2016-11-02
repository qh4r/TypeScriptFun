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
//noinspection TsLint
house = {
    street: 'Kazimierza',
    apartment: 5
};
//# sourceMappingURL=objects.js.map