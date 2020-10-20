/* eslint-disable no-unused-vars */
function take(array, count) {
  var newArr = [];
  if (array.length === 0) {
    return newArr;
  } else {
    for (var i = 0; i < count; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
}
