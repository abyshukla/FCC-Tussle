//Filter runs a loop comparing each element to a given criterion
//indexOf also runs a loop, where it finds a number (provided by filter in array1) within the array it is running

function diffArray(arr1, arr2) {
  var newArr1=arr2.filter(function(element){
    return arr1.indexOf(element)==-1;
  });
  var newArr2=arr1.filter(function(element){
    return arr2.indexOf(element)==-1;
  });
  // Same, same; but different.
  return newArr1.concat(newArr2);
}

diffArray([1, 2, 3, 5], [3, 1, 2, 5, 4]);
