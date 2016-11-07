export function sum(...args: number[]){
    return args.reduce((s,x) => s+=x, 0);
}

export function multiply(...args: number[]){
    return args.reduce((s,x) => s*=x, 0);
}