import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar.js'
import Mainscreen from "./components/Mainscreen";

function App() {
  return (
    <div className="App">
        <Mainscreen/>
      <Toolbar/>
    </div>
  );
}

export default App;
