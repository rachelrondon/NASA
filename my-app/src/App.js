import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './Api.js';

class App extends Component {
  render() {
    return (
      <div className="layout">
        <Api />
      </div>
    );
  }
}

export default App;
