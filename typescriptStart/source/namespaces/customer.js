/// <reference path="account.ts" />
// by powyzsze dzialalo trzeba uzywac amd albo system jako loadera modulow
(function () {
    var elems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elems[_i - 0] = arguments[_i];
    }
    while (elems.length) {
        console.log("bie\u017C\u0105ce saldo: " + elems.shift()());
    }
})(account.saldo, account.store.bind(null, 23), account.store.bind(null, 100), account.withdraw.bind(null, 43), account.store.bind(null, 123), account.withdraw.bind(null, 500));
var testy;
(function (testy) {
    function HALO() {
        console.log('halo to namespace');
    }
    testy.HALO = HALO;
})(testy || (testy = {}));
//# sourceMappingURL=customer.js.map