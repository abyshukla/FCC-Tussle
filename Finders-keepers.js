function findElement(arr, func) {
  var num = 0;
  var newArr=arr.filter(func);
  return newArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
