/* eslint-disable no-console */
var express = require('express');
var app = express();
app.use(function (req, res) {
  console.log(req.method);
  res.send('We sent it gents!');
});
app.listen(3000, function () {
  console.log('Listening to port 3000!');
});
