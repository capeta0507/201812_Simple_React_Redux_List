import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import './TodoList.css'

class App extends Component {
  constructor(props){
    super(props);
    /* Todo 資料 State */
    this.state = {
      items:[
        {key:1,text:'買牛奶'},
        {key:2,text:'吃水果'}
      ] 
    }
  }

  addItem = (key,text) => {
    let newItem={
      key:key,
      text:text,
    }
    // console.log("APP addItem ", newItem);
    this.setState({
      items:this.state.items.concat(newItem)
    })
    // console.log("APP new State ", this.state);
  }

  deleteItem = (key) =>{
    this.setState(
      {
        items:this.state.items.filter((item) => {
          return (item.key !== key)
        })
      }
    )
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
         <TodoInput addItem={this.addItem}/>
         <TodoList 
            items={this.state.items}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
