
function getIndexToIns(arr, num) {
  
  arr.sort(function(a,b){                 //use a function to sort the array as per numbers. a simple sort, sorts as string
    return a-b;
  });
  
  for(var i=0;i<arr.length;i++){          //traverse the length of the sorted array and insert num before the first biggest number.
    if(num<=arr[i]){                      // find the index where num would fit.
      return i;                           //Return the value of i as index
    }
  }                                       //The control is out of the loop, which means that num is biggest in the array
  arr.push(num);                          //num must be inserted at the end. 
  return arr.length-1;                    //Return the index (array length - 1)
}

getIndexToIns([3,3,5,20], 5);
