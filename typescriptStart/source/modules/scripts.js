"use strict";
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args.reduce(function (s, x) { return s += x; }, 0);
}
exports.sum = sum;
function multiply() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args.reduce(function (s, x) { return s *= x; }, 0);
}
exports.multiply = multiply;
//# sourceMappingURL=scripts.js.map