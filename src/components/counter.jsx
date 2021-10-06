import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        tags: ['tag1', 'tag2', 'tag3']
    }

    renderTags(){
        if(this.state.tags.length === 0) return null;
        return <ul>{this.state.tags.map(tag =><li key={tag}>{tag}</li>)}</ul>
    }

    render() { 
        return ( <React.Fragment>
            {this.state.tags.length === 0 && "No Tags"}
            {this.renderTags()}
            </React.Fragment>
        );
    }


}
 
export default Counter;