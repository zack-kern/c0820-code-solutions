import React from 'react';
import ReactDOM from 'react-dom';
var root = document.querySelector('#root');
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const ThisList = pokedex.map(pokemon => {
  return <li key={pokemon.name}>{pokemon.name}</li>;
}
);
ReactDOM.render(
  <ul>{ThisList}</ul>,
  root
);
