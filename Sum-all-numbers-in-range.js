
function sumAll(arr) {
  var smallNum=0;                         //smallNum stores the smaller number of the specified range
  var bigNum=0;                           //bigNum stores the bigger number of the specified range
  if(arr[0]>arr[1]){
    smallNum=arr[1];                    
    bigNum=arr[0];
  }else if(arr[0]<arr[1]){
    smallNum=arr[0];
    bigNum=arr[1];    
  }else{                                  //return any number of the array, if both given numbers are same
    return arr[0];
  }
  for(var i=smallNum+1;i<=bigNum;i++){    // for loop runs from smallNum to bigNum
    smallNum+=i;
  }
  return smallNum;
}

sumAll([1, 4]);
