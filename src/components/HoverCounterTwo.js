import React, { Component } from 'react';
import UpdatedComponent from '../hoc/withCounter';

class HoverCounterTwo extends Component {

    render() {
        const {name, incrementCount, count} = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}>
                    {name}, who is {this.props.age}, hovered {count} times already [HOC]
                </h2>
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounterTwo);