var express = require('express');
var myArr = [{
  id: 1,
  name: 'Jackie Chan',
  course: 'Karate',
  grade: 9001
}, {
  id: 2,
  name: 'Zackie Chan',
  course: 'Not Karate',
  grade: 7
}];
var app = express();
app.get('/api/grades', function (req, res) {
  res.json(myArr);
});
app.listen(3000);
