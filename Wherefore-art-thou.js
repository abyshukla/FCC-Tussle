
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var sourceKeys = Object.keys(source);
  
  //filter each object in the array collection
  arr = collection.filter(function(eachObject){
    for(var i=0; i<sourceKeys.length; i++){
    
    //if collection's i'th object does not have sourceKeys i'th property return false
    //OR
    //return false if the values of the above properties do not match
    
      if(!eachObject.hasOwnProperty(sourceKeys[i])||eachObject[sourceKeys[i]]!==source[sourceKeys[i]]){
//         console.log(eachObject.hasOwnProperty(sourceKeys[i]), eachObject[sourceKeys[i]], source[sourceKeys[i]]);
        return false;
      }
    }
    return true;
  });

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
