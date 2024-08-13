let rlSync = require('readline-sync');

let getInfo = function (question) {
  return rlSync.question(question);
};

let firstName = getInfo('What is your first name? ');
let lastName = getInfo('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
