var account;
(function (account) {
    var bank = 100;
    function withdraw(val) {
        var w = Math.max(Math.min(val, bank), 0);
        bank -= w;
        return bank;
    }
    account.withdraw = withdraw;
    function store(val) {
        return bank += val;
    }
    account.store = store;
    function saldo() {
        return bank;
    }
    account.saldo = saldo;
})(account || (account = {}));
//# sourceMappingURL=account.js.map