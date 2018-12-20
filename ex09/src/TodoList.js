import React, { Component } from 'react'
import TodoItem from './TodoItem'
import FlipMove from 'react-flip-move'
import {connect} from "react-redux";

// 在這裡用map繪製清單
class TodoList extends Component {

    render(){
        let myitems = this.props.items
        console.log("Todo List item", myitems);
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {
                        myitems.map((item,index) => 
                            // console.log(index,item);
                            <TodoItem key={index} item={item} />
                        )
                    }
                </FlipMove>
            </ul>
        )
    }
}
const mapStateToProps = (state) => ({
    // items:state.items
})
export default connect(mapStateToProps)(TodoList)