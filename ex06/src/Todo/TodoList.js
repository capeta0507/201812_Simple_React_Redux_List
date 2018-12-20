import React,{Component} from 'react';
import {connect} from "react-redux";
import TodoItems from './TodoItems';
import "./TodoList.css";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        // this.state={
        //     items:[{text:"買牛奶",key:1},{text:"玩F1賽車",key:2}]
        // }
    }

    addItem(e){
        e.preventDefault();
        if (e.target.elements.inpItem.value !== ""){
            var newItem = {
                text : e.target.elements.inpItem.value,
                key : Date.now()
            };
            // console.log("Add new Item ",newItem);
            this.props.dispatch({type : "ADD_LIST",item:newItem});
            e.target.elements.inpItem.value = "";
        }
    }
    render(){
        // console.log("TodoList this.props.items ",this.props.items)
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <div className="theForm">
                            <input name="inpItem"
                                placeholder="enter task" 
                            ></input>
                            <button type="submit">add</button>
                        </div>
                        <TodoItems entries={this.props.items}/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items:state.items
  })

export default connect(mapStateToProps)(TodoList)