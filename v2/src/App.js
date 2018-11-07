import React, { Component } from 'react';
import './css/layout.css';
import './css/AppTest.css';
import Home from './pages/Home.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
      </div>
    );
  }
}

export default App;
