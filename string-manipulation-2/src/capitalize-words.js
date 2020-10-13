/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  var myString = string.toLowerCase();
  var arr = myString.split(' ');
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i].substring(1);
    var firstLet = arr[i][0].toUpperCase();
    var full = (firstLet + word);
    arr[i] = full;
    var final = arr.join(' ');
  }
  return (final);
}
