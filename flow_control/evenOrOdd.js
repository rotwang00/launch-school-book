let evenOrOdd = function (number) {
  if (!Number.isInteger(number)) {
    console.log('Not an integer.');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};

evenOrOdd(64);
evenOrOdd(65);
evenOrOdd(4.5);
evenOrOdd('45');
