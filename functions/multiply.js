let rlSync = require('readline-sync');

let multiply = function (x, y) {
  return x * y;
};

let firstNumber = rlSync.question('Enter the first number: ');
let secondNumber = rlSync.question('Enter the second number: ');

console.log(multiply(firstNumber, secondNumber));
