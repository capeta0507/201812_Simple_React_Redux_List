import React, { Component } from 'react'

class TodoItem extends Component {
    //在這裡將資料用props傳到這，並將資料秀出
    // 需注意arrow function需在onclick使用
    deleteItem(key){
        // console.log("Todo Item delete ",key);
        this.props.deleteItem(key);
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
export default TodoItem