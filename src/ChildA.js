import React, { Component } from 'react';

class ChildA extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.changeMessage();
    }

    render() {
        return (
            <button onClick={this.handleClick}>Click</button>
        );
    }
}

export default ChildA;