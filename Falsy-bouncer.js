
function bouncer(arr) {
  //filter function returns values if true.
  //false, null, 0, "", undefined, and NaN are boolean objects which are ALWAYS false
  return arr.filter(function(eachElem){
    return eachElem;
  });
}

bouncer([7, "ate", "", false, 9]);
