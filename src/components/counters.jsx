import React, { Component } from 'react'
import Counter from './counter';

class Counters extends React.Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0}
        ]
    };


    handleDelete = (counterID) =>{
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters})
 
    }

    render() { 
        return <div>
            {
            this.state.counters.map(counter => 
            <Counter key={counter.id}
             onDelete={this.handleDelete}
            counter={counter} 
            />)
            }
        </div>;
    }
}
 
export default Counters;