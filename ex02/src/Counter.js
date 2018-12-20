import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {

  // state = { count: 0 }

  // 使用this.props.dispatch執行
  increment = () => {
    // console.log(this.props);
    this.props.dispatch({type:"INCREMENT"})
  }

  decrement = () => {
    // console.log(this.props);
    this.props.dispatch({type:"DECREMENT"})
  }

  render() {
    return (
      <div className="main_bg">
        <h2>Counter(Redux)</h2>
        <div>
            <button onClick={this.decrement}>-</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="count">{this.props.mycount}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}
// 需在這設定props，此state為最上層store裡的state，所有的檔案都會使用store裡的state。
const mapStateToProps = (state) => ({
  mycount:state.count,
})

export default connect(mapStateToProps)(Counter);