import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        value: this.props.counter.value
    }

    handleIncrement= () => {
       this.setState({value: this.state.value + 1})
    }
    render() { 
        return ( <React.Fragment>
            <span className="btn btn-primary btn-sm m-2">{this.formatCounter()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary m-2">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-secondary m-2">Delete</button>
            <br/>
            </React.Fragment>
        );
    }

    formatCounter(){
        const {value} = this.state;
        return value === 0? <h4>Zero</h4> :value;
    }
}
 
export default Counter;