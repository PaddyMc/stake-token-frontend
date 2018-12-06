import React, { Component } from 'react';
import Home from '../Home/Home.container'
import ParticlesBackground from '../../components/ParticlesBackground/ParticlesBackground'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ParticlesBackground />
        <div className="App">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
