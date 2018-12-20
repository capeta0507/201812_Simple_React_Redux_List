import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
