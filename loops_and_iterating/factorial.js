// For loop version
// let factorial = function (number) {
//   let answer = 1;
//   for (let i = 1; i <= number; i++) {
//     answer *= i;
//   }
//   return answer;
// };

// Recursion version
let factorial = function (number) {
  if (number === 1) return number;
  return number * factorial(number - 1);
};

console.log(factorial(4));
console.log(factorial(40));
