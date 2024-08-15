let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
// myArray.forEach(x => {
//   if (!(x % 2)) {
//     console.log(x);
//   }
// });

myArray.forEach(innerArray => {
  innerArray.forEach(x => {
    if (x % 2 === 0) {
      console.log(x);
    }
  });
});

// myArray.forEach(function (nestedArray) {
//   nestedArray.forEach(function (value) {
//     if (value % 2 === 0) {
//       console.log(value);
//     }
//   });
// });
