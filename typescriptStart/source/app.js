/// <reference path="./namespaces/customer.ts" />
"use strict";
// powyzsze to require namespaca testy
var scripts_1 = require('./modules/scripts');
console.log('test');
testy.HALO();
testy.HALO();
testy.HALO();
var $elem = document.createElement("h1");
$elem.innerText = "DZIALA";
document.querySelector('body').appendChild($elem);
var arg = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("1-9 suma: " + scripts_1.sum.apply(void 0, arg) + ", a iloczyn: " + scripts_1.multiply.apply(void 0, arg));
//# sourceMappingURL=app.js.map