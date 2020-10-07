/* eslint-disable no-unused-vars */
function toObject(keyValuePair) {
  var prop = keyValuePair[0];
  var val = keyValuePair[1];
  var obj = {
    [prop]: val
  };
  return obj;
}
