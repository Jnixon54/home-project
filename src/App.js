import React, { Component } from 'react';
import router from './router';
// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        { router }
      </div>
    );
  }
}

export default App;
