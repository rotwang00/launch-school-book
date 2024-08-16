let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let findIntegers = function (arr) {
  return arr.filter(x => Number.isInteger(x));
};

let integers = findIntegers(things);
console.log(integers);
