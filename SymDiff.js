function sym(args) {
  var argArray = Array.from(arguments);
  var newArr = [];
  var resultArr = [];
  
  function dupWithinArray(array) {
  	array = array.filter(function(value, index, array) {
      return array.indexOf(value) == index;
    });
    return array;
  }
  
  function getDiff(arr1, arr2) {
    var array1 = arr1.filter(function(arr1Elem) {
      return arr2.indexOf(arr1Elem) < 0;
    });
    
    var array2 = arr2.filter(function(arr2Elem) {
      return arr1.indexOf(arr2Elem) < 0;
    });
    return array1.concat(array2);
  }
  
  for (var i = 0; i < argArray.length; i++) {
    resultArr = getDiff(resultArr, argArray[i]);
  }
  
  return dupWithinArray(resultArr);
}

sym([1, 2, 3], [5, 2, 1, 4]);
