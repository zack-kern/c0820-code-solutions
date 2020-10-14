var express = require('express');
var grades = [];
var nextId = 1;
var app = express();
app.use(express.json());
app.get('/api/grades', function (req, res) {
  res.json(grades);
});
app.post('/api/grades', (req, res) => {
  nextId++;
  req.body.nextId = nextId;
  res.json(req.body);
  grades.push(req.body);
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 3k!!');
});
