import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state={
            key:0,
            text:''
        }
        this.addItem = this.addItem.bind(this);
        this.handle = this.handle.bind(this)
    }
    handle(e){
        // console.log(e.target.value);
        this.setState({
            key:Date.now(),
            text:e.target.value
        })
    }
    addItem(e){
        e.preventDefault();
        var key = this.state.key;
        var text = this.state.text;
        if(text.length>0){
            e.target.elements.inpItem.value = "";
            this.props.handle(key,text);
            this.setState({
                text:'',
                key:0
            })
        }else{
            alert("需要填寫資料 ...");
        }
        
        
    }
  render() {
    return (
        <form onSubmit={this.addItem}>
            <input name="inpItem"
                onChange={this.handle}
                placeholder="enter task" 
            ></input>
            <button type="submit">add</button>
        </form>
    )
  }
}
export default TodoItem