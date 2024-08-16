let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = function (arr) {
  let lengths = arr.map(x => x.length);
  return lengths.filter(x => x % 2 === 1);
};

console.log(oddLengths(arr)); // => [1, 5, 3]
