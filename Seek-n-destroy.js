
function destroyer(arr) {
  console.log(arr);                                   //returns [1, 2, 3, 1, 2, 3, 2, 3]
  var args = Array.prototype.slice.call(arguments);   //converts arguments into array
  args.splice(0,1);                                   //deletes the first element from args array
  return arr.filter(function(element) {               //filter arr
    return args.indexOf(element) === -1;              //search in ARGS, each element from ARR, return which is not found
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
