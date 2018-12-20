import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state={
            key:0,
            text:''
        }
    }
    handleChange=(e) => {
        // console.log(e.target.value)
        this.setState({
            key:Date.now(),
            text:e.target.value
        })
    }
    addItem=(e) => {
        e.preventDefault();
        // console.log("addItem:" , this.state);
        let key = this.state.key;
        let text = this.state.text;
        if(text.length>0){
            this.props.addItem(key,text);
            this.setState({
                text:'',
                key:0
            })
        }else{
            alert("需要填寫資料 ...");
        }
    }
    render(){
        return (
            <form onSubmit={this.addItem}>
            <input 
                onChange={this.handleChange}
                placeholder="enter task" 
                value={this.state.text}
            ></input>
            <button type="submit">add</button>
        </form>
        )
    }
}
export default TodoItem