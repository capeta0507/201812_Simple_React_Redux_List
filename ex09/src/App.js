import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import './TodoList.css'
import {connect} from "react-redux";

class App extends Component {
  
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>Todo List</h1>
         <TodoInput />
         <TodoList 
            items={this.props.items}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items:state.items
})

export default connect(mapStateToProps)(App);
