import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Babel оптимизирует это:
// const elem = <h2 class='greetings'>Hello, World!</h2>;
const text = 'Hello, World!';
const elem = (
  <div>
    <h2>{text}</h2>
    <input tabIndex={0} type="text"/>
    <button>click</button>
  </div>
);

// Babel не будет этот код обрабатывать. Отправит как есть.
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello, World!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
