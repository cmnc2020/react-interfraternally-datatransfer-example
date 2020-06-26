import React, { Component } from 'react';

class ChildB extends Component {
    render() {
        return (
            <h1>{this.props.msg}</h1>
        );
    }
}

export default ChildB;