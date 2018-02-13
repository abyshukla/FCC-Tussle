
function spinalCase(str) {
  //search for group1 ($1) and group2 ($2). Words which have a lowercase and uppercase letters together
  //insert a space between the the groups
  //convert all to lowercase
  //search for whitespace(\s) and underscore(\_), and replace with hyphen
  str=str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/[\s\_]/g,'-');
  return str;
}

spinalCase('thisIsSpinalTap');
