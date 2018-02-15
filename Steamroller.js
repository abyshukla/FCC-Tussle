function steamrollArray(arr) {
  // I'm a steamroller, baby
  var tempArr=[];
  function extract(arrayNest){
    if (Array.isArray(arrayNest)){
      for(var i=0; i<arrayNest.length;i++){
        extract(arrayNest[i]);
      }
    }else{
      tempArr.push(arrayNest);
    }
    return tempArr;
  }
  for(var j=0;j<arr.length;j++){
    return extract(arr);
  }
  // return extract(arr);
}

steamrollArray([1, {}, [3, [[4]]]]);
