import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        count: 0
    }

    handleIncrement= () => {
       this.setState({count: this.state.count + 1})
    }
    render() { 
        return ( <React.Fragment>
            <span className="btn btn-primary btn-sm m-2">{this.formatCounter()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary">Increment</button>
            <br/>
            </React.Fragment>
        );
    }

    formatCounter(){
        const {count} = this.state;
        return count === 0? <h1>Zero</h1> :count;
    }
}
 
export default Counter;