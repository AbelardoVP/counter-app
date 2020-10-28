import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './App';
import './index.css';

ReactDOM.render(
  <CounterApp value={2} />,
  document.getElementById('root')
);
