/* eslint-disable no-unused-vars */
function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    var vowelsArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    if (vowelsArr.includes(string[i])) {
      count++;
    }
  }
  return (count);
}
