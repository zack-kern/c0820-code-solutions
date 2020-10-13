/* eslint-disable no-unused-vars */
function ransomCase(string) {
  var lower = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      lower += string[i].toLowerCase();
    } else if (i % 2 !== 0) {
      lower += string[i].toUpperCase();
    }
  }
  return lower;
}
