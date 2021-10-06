import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        count: 0
    }

    handleIncrement(){
        console.log('Increment Clicked');
    }
    render() { 
        return ( <React.Fragment>
            <span className="btn btn-primary m-2">{this.formatCounter()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCounter(){
        const {count} = this.state;
        return count === 0? <h1>Zero</h1> :count;
    }
}
 
export default Counter;