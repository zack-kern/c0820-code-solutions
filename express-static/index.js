var express = require('express');
var path = require('path');
var app = express();
var myPath = path.join(__dirname, 'public');
var staticStuff = express.static(myPath);
app.use(staticStuff);
app.listen(3000);
