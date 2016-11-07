namespace account {
    let bank = 100;
    export function withdraw(val: number) : number {
        let w = Math.max(Math.min(val, bank), 0);
        bank -= w;
        return bank;
    }

    export function store(val: number) : number {
        return bank += val;
    }

    export function saldo() : number {
        return bank;
    }
}