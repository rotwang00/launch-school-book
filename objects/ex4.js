let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);
let upperKeys = keys.map(key => key.toUpperCase());
console.log(upperKeys);
