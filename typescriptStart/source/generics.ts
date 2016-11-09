// najprostszy generyk - troche bez sensu
function process<T>(data: T){
    return data;
}

console.log(process<string>("test"));
// console.log(process<string>(2)); // blad - bo typ string wybrany
console.log(process<number>(2));
console.log(process<boolean>(true));

let arr1 : number[] = [];
arr1.push(2);
// arr1.push("asd"); // nie zadziala
let arr2 : Array<number> = []; //rownowaznik
arr2.push(2);
// arr2.push("ad"); // dupa

function chain<T>(elems: T[]) { // mozna : Array<T>
    return elems.reduce((s,x) => s = s.toString()+x.toString(), '');
}

console.log('chain; ', chain([1,2,31,2,14]));
console.log('chain; ', chain<string>(["rafal, ", "asia", "stas"]));
console.log('chain; ', chain([true, "asia", 2])); // dziala bo typ any?
// console.log('chain; ', chain<string>([true, "asia", 2])); // ofc - blad