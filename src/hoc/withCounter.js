import React, {Component} from 'react';

// Higher Order Component 
const UpdatedComponent = (OriginalComponent, deductNumber)=>{
    
    // Conventionallyh, this class component can named similarly 
    // to the function but in Pascal case. e.g: UpdatedComponent
    // while the function is in snake case. e.g: updatedComponent.
    // The original component in this case is named (WrappedComponent).
    
    class NewComponent extends Component {

        state = {
            count: 0
        }
    
        incrementCount = () =>{
            this.setState(prevState =>{
                return {count: prevState.count + 1}
            })
        }

        decrementCount = () =>{
            this.setState(prevState =>{
                return {count: prevState.count - deductNumber}
            })
        }

        render() {
            const {count} = this.state;
            return (
                <div>
                    <OriginalComponent 
                    name="Moise"
                    count={count} 
                    incrementCount={this.incrementCount}
                    decrementCount={this.decrementCount}
                    {...this.props}
                    />
                </div>
            );
        }
    }
    
    return NewComponent;
}

export default UpdatedComponent;