/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  var low;
  for (var j = 0; j < word.length; j++) {
    if (word[j].toLowerCase() === word[j]) {
      low = true;
    } else {
      low = false;
      return low;
    }
  }
  return low;
}
