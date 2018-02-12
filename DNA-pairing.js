
function pairElement(str) {
  var DNAObj = {
    'G':'C',
    'C':'G',
    'A':'T',
    'T':'A'
  };
  var newArr=[];
  var tempArr=[];
  str=str.split("");
  str.map(function(eachStrand){
    tempArr.push(eachStrand);
    tempArr.push(DNAObj[eachStrand]);
    newArr.push(tempArr);
    tempArr=[];
    console.log(newArr);
  });
  return newArr;
}

pairElement("ATGC");
