import React, { Component } from 'react';
import FlipMove from "react-flip-move";

class TodoItem extends Component {
    delete(key){
        this.props.delete(key);
    }
  render() {
      let items = this.props.items
      let prodItem = items.map((item) =>{
        return(
            <li onClick={()=>this.delete(item.key)}
                key={item.key}>{item.text}</li>
        )
      })
      
    return (
        <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
                {prodItem}
            </FlipMove>
        </ul>
    )
  }
}
export default TodoItem