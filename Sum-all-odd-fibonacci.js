function sumFibs(num) {
  var firstNum = 0;
  var secondNum = 1;
  var temp = 0;
  var sum = 0;
  for (i = 0; firstNum < num; i++) {
    temp = firstNum;
    firstNum = secondNum;
    secondNum = temp;
    secondNum += firstNum;
    if (firstNum % 2 !== 0 && firstNum <= num) {
      sum += firstNum;
    }
  }
  return sum;
}

sumFibs(10);
