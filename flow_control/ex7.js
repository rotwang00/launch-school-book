let why = function (str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
};

console.log(why('cohabitation'));
console.log(why('living'));
