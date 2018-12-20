import React, { Component } from 'react'
import {connect} from "react-redux";

class TodoItem extends Component {
    //在這裡將資料用props傳到這，並將資料秀出
    deleteItem(key){
        console.log("Todo Item delete ",key);
        // this.props.deleteItem(key);
        this.props.dispatch({type : "DELETE_LIST",key:key})
    }
    render(){
        let myitem = this.props.item;
        // console.log("Todo Item ",item);
        return (
            <li onClick={() => this.deleteItem(myitem.key)}>
                {myitem.text}
            </li>
        )
    }
}
const mapStateToProps = (state) => ({
    // items:state.items
})
export default connect(mapStateToProps)(TodoItem)