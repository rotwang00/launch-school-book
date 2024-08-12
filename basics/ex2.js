let input = 4936;

let ones = input % 10;
input -= ones;
input /= 10;

let tens = input % 10;
input -= tens;
input /= 10;

let hundreds = input % 10;
input -= hundreds;
input /= 10;

let thousands = input;

console.log(thousands, hundreds, tens, ones);
