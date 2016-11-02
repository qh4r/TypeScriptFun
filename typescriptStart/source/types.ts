let testString = "test";
testString = "asd";

let num = 23;
// num = "asd"; //blad
num = 2.31;

let word : String;
// word = 34;  //blad
console.log(word); //uzycie nie zainicjalizowanej zmiennej nie ejst problemem - undefined
word = "Słowo";
console.log(word);

let tab : String[] = []; // bez = [] TALICE BEDZIE NIEZAINICJALIZOWANA

//tab.push(23); // nie mozna
tab.push("test");

let tab2 = [23,12,4132.12];
console.log(typeof tab, typeof tab2); // object

let tab3 : any[] = [23,"asdas", [23,21]]; // any to typ dowolny
let tab4 = [23,"asdas", [23,21]]; // domyslnie przjmie typ any

let tuple1 : [number, string, string] = [12, "Marian", "hehe"]; //tuple wymaga formatu pol
// tuple1 = [12, "Marian"]; // blad - nie moze brakowac pol
// tuple1 = ["asd", 23, "marian"] // blad -musi byc poprawny typ
tuple1 = [43, "Krystan", 'asd', 'test']; // moze byc niestety nadmiar
console.log('tuple: ', tuple1);

//enums
enum Marka {
    Opel, //0
    Honda = 100, // mozna ustawic wartosc inaczej inkrementuje co 1 od 0
    Fiat //101
}

let fura : Marka = Marka.Fiat;
console.log(fura) // integer po stronie jsa
console.log(Marka)