import React, { Component } from 'react';

class ClickCounter extends Component {
    
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div style={{margin: "30px auto", backgroundColor: "cyan", color: "black"}}>
                <button  type="button" onClick={incrementCount}> Button clicked {count} times [RENDER PROPS]</button>
            </div>
        );
    }
}

export default ClickCounter;