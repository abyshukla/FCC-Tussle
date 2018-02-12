
function convertToRoman(num) {
  
  //create two arrays containing both regular and 'special' roman numerals
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX","V", "IV", "I"];
  var result="";
  
  //loop through decimal array and divide num by each decimal element
  for(var i=0;i<decimal.length;i++){
  
    //if num is divisible by decimal element and remainder is less than num (true division)
    //then concatenate roman[i] to result and subtract decimal[i] (divisor) from num
    while(num%decimal[i]<num){
      result+=roman[i];
      num-=decimal[i];
    }
  }
  return result;
}

convertToRoman(3999);
