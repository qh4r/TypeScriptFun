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
//# sourceMappingURL=types.js.map