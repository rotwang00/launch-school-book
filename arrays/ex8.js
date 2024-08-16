let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = function (strings) {
  return strings.reduce((odds, element) => {
    if (element.length % 2 === 1) {
      odds.push(element.length);
    }
    return odds;
  }, []);
};

console.log(oddLengths(arr)); // => [1, 5, 3]
