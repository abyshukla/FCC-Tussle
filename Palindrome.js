function palindrome(str) {
  var newStr=str.replace(/[\W_]/g,'').toLowerCase();
  return newStr==newStr.split('').reverse().join('');
}
