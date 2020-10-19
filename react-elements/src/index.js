import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
var root = document.getElementById('root');
var myH1 = React.createElement(
  'h1',
  [null],
  ['Hello, React!!!']
);
ReactDOM.render(myH1, root);
