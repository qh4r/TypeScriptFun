function toUpper(name) {
    return name.toUpperCase();
}
var output = toUpper('rafał'); // terazwymaga string
// output =  2; // nie mozna bo output przestrzega typu
console.log(output);
function logAsError(text) {
    console.error('Error: ', text);
    // return text; // nie mozna nic zwrocic jesli typ deklarowany jako void
}
function Add() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i - 0] = arguments[_i];
    }
    return numbers.reduce(function (sum, n) { return sum += n; }, 0); // nie okreslono wyraznie void wiec inferencja do typu zwracanego number
}
logAsError("test: " + Add(1, 2, 5, 76, 12));
function PerformNumericCalc(method) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return method.apply(void 0, numbers);
}
// niestety obecnosc ... musi sie zgadzac  ... rozwija tablice
console.log('wywloanie', PerformNumericCalc(Add, 23, 21, 53, 321));
var func;
func = function (v1, v2) { return v1 % v2; };
console.log('mod: ', func(12, 7));
//# sourceMappingURL=functions.js.map