import React from 'react';
//import logo from './logo.svg';
import title from './img/zumex-text.png';
//import start from './img/start.png';
import reactlogo from './img/react-logo-512.png';
//import Board from './containers/board.js';
import GameRow from './containers/gameRow.js';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <img src={title} className="App-title" height="60" alt="title" />
        <img src={reactlogo} className="React-logo" height="60" alt="title" />
      </div>

         <GameRow />

       </header>
    </div>
  );
}

export default App;
