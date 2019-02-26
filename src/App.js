import React, { Component } from 'react';
import './App.css';
import PomodoroClock from './components/pomodoro-clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PomodoroClock />
      </div>
    );
  }
}

export default App;
