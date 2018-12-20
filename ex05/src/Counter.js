import React from 'react';

class Counter extends React.Component {

    state = { count: 0 }

  increment = () => {
    //   filter in later
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    //   filter in later
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="main_bg">
        <h2>Counter</h2>
        <div>
            <button onClick={this.decrement}>-</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="count">{this.state.count}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;