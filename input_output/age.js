let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you? '));

let gap = 10;
console.log(`In ${gap} years, you will be ${age + gap} years old.`);
gap = 20;
console.log(`In ${gap} years, you will be ${age + gap} years old.`);
gap = 30;
console.log(`In ${gap} years, you will be ${age + gap} years old.`);
gap = 40;
console.log(`In ${gap} years, you will be ${age + gap} years old.`);
