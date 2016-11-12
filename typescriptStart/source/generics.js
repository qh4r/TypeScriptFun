// najprostszy generyk - troche bez sensu
function process(data) {
    return data;
}
console.log(process("test"));
// console.log(process<string>(2)); // blad - bo typ string wybrany
console.log(process(2));
console.log(process(true));
var arr1 = [];
arr1.push(2);
// arr1.push("asd"); // nie zadziala
var arr2 = []; //rownowaznik
arr2.push(2);
// arr2.push("ad"); // dupa
function chain(elems) {
    return elems.reduce(function (s, x) { return s = s.toString() + x.toString(); }, '');
}
console.log('chain; ', chain([1, 2, 31, 2, 14]));
console.log('chain; ', chain(["rafal, ", "asia", "stas"]));
console.log('chain; ', chain([true, "asia", 2])); // dziala bo typ any?
// console.log('chain; ', chain<string>([true, "asia", 2])); // ofc - blad 
//# sourceMappingURL=generics.js.map