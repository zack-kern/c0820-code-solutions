/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var myArr = [];
  for (var i = 0; i < array.length; i++) {
    var last = myArr[myArr.length - 1];
    if (!last || last.length === size) {
      myArr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return myArr;
}
