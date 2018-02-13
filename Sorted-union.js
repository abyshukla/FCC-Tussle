function uniteUnique(arr) {
  var mergedArr = [];
  var newArr = [];
// merging the argument arrays
  for (var i = 0; i < arguments.length; i++) {
    mergedArr = mergedArr.concat(arguments[i]);
  }
  for (var j = 0; j < mergedArr.length; j++) {
// before pushing numbers in new array, check if it already exists
    if (newArr.indexOf(mergedArr[j]) == -1) {
      newArr.push(mergedArr[j]);
    }
  }
// return new array
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
