import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraAPP from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const rootDiv = document.querySelector('#app');

// ReactDOM.render(<PrimeraAPP saludo="Hola, soy Goku"/>, rootDiv);
ReactDOM.render(<CounterApp value={1990}/>, rootDiv);