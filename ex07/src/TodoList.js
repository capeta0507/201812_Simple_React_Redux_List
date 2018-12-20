import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(){
        super();
        this.delete = this.delete.bind(this);
    }
    delete(key){
        this.props.delete(key);
    }
  render() {
      let myitems = this.props.items
    return (
      <div>
        <TodoItem items={myitems} delete={this.delete}/>
      </div>
    )
  }
}
export default TodoList