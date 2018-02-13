function sumPrimes(num) {
  var arrNums = [];
  var upperLimit = Math.sqrt(num);
  var sum = 0;

  // Make an array from 2 to (n - 1)
  for (var i = 0; i <= num; i++) {
    arrNums.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
    if (arrNums[i]) {
      for (var j = i * i; j <= num; j += i) {
        arrNums[j] = false;
      }
    }
  }

  for (var i = 2; i <= num; i++) {
    if (arrNums[i]) {
      sum += i;
    }
  }

  return sum;
}

sumPrimes(22);
