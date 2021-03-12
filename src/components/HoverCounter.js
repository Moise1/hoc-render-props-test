import React, { Component } from 'react';

class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props;
        return (
            <div style={{marginTop: "20px", backgroundColor: "green", color: "black"}}>
                <h2 onMouseOver={incrementCount}>Button hovered over {count} [RENDER PROPS]</h2>
            </div>
        );
    }
}

export default HoverCounter;