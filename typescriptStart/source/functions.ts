function toUpper(name:string):string { //typy jak widac
    return name.toUpperCase();
}

let output = toUpper('rafał'); // terazwymaga string
// output =  2; // nie mozna bo output przestrzega typu
console.log(output);

function logAsError(text:string):void {
    console.error('Error: ', text);
    // return text; // nie mozna nic zwrocic jesli typ deklarowany jako void
}

function Add(...numbers:number[]) {
    return numbers.reduce((sum, n) => sum += n, 0); // nie okreslono wyraznie void wiec inferencja do typu zwracanego number
}

logAsError(`test: ${Add(1,2,5,76,12)}`);


function PerformNumericCalc(method: (...num:number[]) => number,...numbers:number[]) : number{
    return method(...numbers);
}
// niestety obecnosc ... musi sie zgadzac  ... rozwija tablice

console.log('wywloanie', PerformNumericCalc(Add, 23,21,53,321));

let func : (a: number, b: number) => number;
func = (v1,v2) => v1%v2;
console.log('mod: ', func(12,7));


const test = function(input: number = 2, interval: number) : void {
// default nie musi byc ostatnią warością
        setTimeout(() => {
             console.log(input -= 1);
            if(input > 0){
                test(input, 200);
            }
        }, 1000)
};

console.log(test(5, 100));
console.log(test(undefined, 1000)); // undefined przyjmuje wartosc domyslna
console.log(test(null, 2000)); // przyjmuje na start wartosc 1? -- null jest rzutowany na 0!
