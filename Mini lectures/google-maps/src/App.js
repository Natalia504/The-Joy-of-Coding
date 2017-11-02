import React, { Component } from 'react';
import logo from './logo.svg';
import Gmap from './components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gmap />
      </div>
    );
  }
}

export default App;
