import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox />
      </div>
    );
  }
}

export default App;
