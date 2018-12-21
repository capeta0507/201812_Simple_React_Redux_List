import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {

  render() {
    return (
      <div className="main_bg">
        <h2>Counter(Redux)</h2>
        <div className="flex">
            <div className="click">
              <button onClick={this.props.decrement}>-</button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="count">{this.props.mycount}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="click">
              <button onClick={this.props.increment}>+</button>
            </div>
            
        </div>
      </div>
    )
  }
}
// 需在這設定props，此state為最上層store裡的state，所有的檔案都會使用store裡的state。
const mapStateToProps = (state) => ({
  mycount:state.count,
})
const mapDispatchToProps = (dispatch) => {
  return{
    increment : () => dispatch({type:"INCREMENT"}),
    decrement : () => dispatch({type:"DECREMENT"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);