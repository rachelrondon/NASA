import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './api.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NASA App</h1>
        <Api />
      </div>
    );
  }
}

export default App;
