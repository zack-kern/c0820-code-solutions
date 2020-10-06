/* eslint-disable no-unused-vars */
function isUpperCased(word) {
  var cap;
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      cap = true;
    } else {
      cap = false;
    }
  }
  return cap;
}
