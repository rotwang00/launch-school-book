let rlSync = require('readline-sync');

let number1 = parseInt(rlSync.question('Enter the first number: '));
let number2 = parseInt(rlSync.question('Enter the second number: '));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}.`);
