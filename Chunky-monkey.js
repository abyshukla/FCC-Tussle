
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray=[];
  for(var i=0;i<arr.length;i+=size){
      newArray.push(arr.slice(i, i+size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 3);
