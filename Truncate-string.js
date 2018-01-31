
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num>=str.length){
    return str;
  }else if(num<=3 && num>0){
    return str.substr(0,num).concat('...');
  }else{
    return str.substr(0,num-3).concat('...');
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 0);
