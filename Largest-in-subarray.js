
function largestOfFour(arr) {
  // You can do this!
  var largeNumArr = [];
  var checkNum=0;
  for (var i=0; i<arr.length; i++){     //iterate through first array
    checkNum=arr[i][0];                 //consider first element of ith subarray as the largest number
    for(var j=0; j<arr[i].length; j++){ //iterate through subarray
      if(checkNum<arr[i][j]){           //if another is found bigger, that number is stored in checkNum
        checkNum=arr[i][j];
      }
    }
    largeNumArr.push(checkNum);         //The largest number is pushed in the array once loop completes
  }
  
  return largeNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
