let array = [3, 5, 7];

let sumOfSquares = function (arr) {
  return arr.reduce((sum, num) => sum + num * num, 0);
};

// let sumOfSquares = function (arr) {
//   return arr.reduce((sum, num) => sum + num * num);
// };

console.log(sumOfSquares(array));
