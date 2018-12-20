import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter count={42}/>
      </div>
    );
  }
}

export default App;
