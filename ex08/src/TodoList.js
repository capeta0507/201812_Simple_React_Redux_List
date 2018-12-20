import React, { Component } from 'react'
import TodoItem from './TodoItem'
import FlipMove from 'react-flip-move'

// 在這裡用map繪製清單(用props)
class TodoList extends Component {
    deleteItem = (key) => {
        // console.log("Todo List Delete key ",key);
        this.props.deleteItem(key);
    }
    render(){
        let myitems = this.props.items
        console.log("Todo List item", myitems);
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {
                        myitems.map((item,index) => 
                            // console.log(index,item);
                            <TodoItem key={index} item={item} deleteItem={this.deleteItem} />
                        )
                    }
                </FlipMove>
            </ul>
        )
    }
}
export default TodoList