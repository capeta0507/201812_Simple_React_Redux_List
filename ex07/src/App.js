import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './TodoList.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        items:[
          {
          key:0,
          text:'Apple'
        },
        {
          key:1,
          text:'Banana'
        },
      ] /*陣列*/
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.delete = this.delete.bind(this);
}
handleAdd(key,text){
    let newItem={
      key:key,
      text:text,
  }
  this.setState({
    items:this.state.items.concat(newItem)
  })
  // console.log(newItem)
}
delete(key){
  this.setState({
    items:this.state.items.filter((item) => {return item.key !== key})
  })
}
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <TodoInput handle={this.handleAdd}/>
          <TodoList items={this.state.items} delete={this.delete}/>
        </div>
      </div>
    );
  }
}

export default App;
