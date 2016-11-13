/// <reference path="./namespaces/customer.ts" />

// powyzsze to require namespaca testy

console.log('test');
testy.HALO();
testy.HALO();
testy.HALO();
const $elem = document.createElement("h1");
$elem.innerText = "DZIALA";
document.querySelector('body').appendChild($elem);

// interface jquery  {
//     (...args: any[]): any;
//     css(...args: any[])
// }
// var $ : jquery;

// import 'jQuery'; //  z tym nie dziala bo komonjs to gowno

console.log('jquery ',$);
$('#test').css({'background-color' : 'red', "color" : 'white'});


//nie dziala i chuj
// import {sum, multiply} from 'source/modules/scripts';
//
// let arg = [1,2,3,4,5,6,7,8,9];
// console.log(`1-9 suma: ${sum(...arg)}, a iloczyn: ${multiply(...arg)}`);