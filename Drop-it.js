function dropElements(arr, func) {
  // Drop them elements.
  var falseValues=0;
  for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
    if(!func(arr[i])){
      falseValues++;
    }else if(func(arr[i])){
      return arr.slice(falseValues);
    }
  }
  return arr.slice(falseValues);
}

dropElements([1, 2, 3], function(n) {return n < 3; });
