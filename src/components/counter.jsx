import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        count: 0,
        imageURL: 'https://picsum.photos/500',
        tags: ['tag1', 'tag2', 'tag3']
    }
    render() { 
        return ( <React.Fragment>
            <img src={this.state.imageURL} alt=""/>
            <span className="btn btn-primary m-2">{this.formatCounter()}</span>
            <button style={{fontSize:40}} className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
            </ul>
            </React.Fragment>
        );
    }

    formatCounter(){
        const {count} = this.state;
        return count === 0? <h1>Zero</h1> :count;
    }
}
 
export default Counter;