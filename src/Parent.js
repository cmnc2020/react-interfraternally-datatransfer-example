import React from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Hello'
        }
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage() {
        this.setState({ msg: 'Goodbye' });
    }

    render() {
        return (
            <div>
                <ChildA changeMessage={this.changeMessage} />
                <ChildB msg={this.state.msg} />
            </div>
        );
    }
}

export default Parent;