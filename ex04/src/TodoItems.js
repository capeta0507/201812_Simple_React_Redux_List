import React, { Component } from 'react';
import {connect} from "react-redux"
import FlipMove from "react-flip-move";
// yarn add react-flip-move

class TodoItems extends Component {
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item){
        return <li onClick={()=>this.delete(item.key)}
        key={item.key}>{item.text}</li>
    }

    delete(key){
        // this.props.delete(key);
        // console.log("TodoItems Key ",key);
        this.props.dispatch({type : "DELETE_LIST",key:key})
    }
  render() {
      var todoEntries = this.props.entries;
    //   console.log("TodoItems : entries ",this.props.entries)
      var listItems = todoEntries.map(this.createTasks);
    return (
        <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
                {listItems}
            </FlipMove>
        </ul>
    );
  }
}
const mapStateToProps = (state) => ({
    items:state.items
  })
export default connect(mapStateToProps)(TodoItems)
