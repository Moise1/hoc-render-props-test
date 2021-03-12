import React, { Component } from 'react';
import UpdatedComponent from '../hoc/withCounter';

// Code for how to use HOC in React.
class ClickCounterTwo extends Component {

    render() {
        const {name, incrementCount, decrementCount, count} = this.props;

        return (
            <div>
                <button onClick={incrementCount}>
                     {name} clicked up {count} times already [HOC].
                </button>
                <button onClick={decrementCount} style={{marginLeft: "10px"}}>
                {name} clicked down {count} times already [HOC].
                </button>
            </div>
        );
    }
}

export default UpdatedComponent(ClickCounterTwo, 1);