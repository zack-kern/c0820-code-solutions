/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];
  arr[firstIndex] = secondChar;
  arr[secondIndex] = firstChar;
  return arr.join('');
}
