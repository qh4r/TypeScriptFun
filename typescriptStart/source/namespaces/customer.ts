/// <reference path="account.ts" />

// by powyzsze dzialalo trzeba uzywac amd albo system jako loadera modulow
((...elems) => {
    while (elems.length) {
        console.log(`bieżące saldo: ${elems.shift()()}`);
    }
})(
    account.saldo,
    account.store.bind(null, 23),
    account.store.bind(null, 100),
    account.withdraw.bind(null, 43),
    account.store.bind(null, 123),
    account.withdraw.bind(null, 500)
);

namespace testy {
    export function HALO() {
        console.log('halo to namespace');
    }
}