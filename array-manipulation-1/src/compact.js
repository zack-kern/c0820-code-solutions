/* eslint-disable no-unused-vars */
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      arr.push(array[i]);
    }
  }
  return arr;
}
