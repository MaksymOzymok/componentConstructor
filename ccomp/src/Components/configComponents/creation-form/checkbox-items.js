import React, {Component} from 'react';
import "./checkbox-items.css"

class CheckboxItems extends Component {
    state = {
        IDs: [1]
    };
    onHandlePlus = () => {
        let newIndex = this.state.IDs.length + 1;
        this.setState(state => {
            return {
                IDs: [...state.IDs, newIndex]
            }
        });
        this.props.onAddingOption(newIndex)
    };

    render() {

        return (
            <div className='items-container'>
                {this.state.IDs.map(id => <button key={'item' + id} className='option'>option {id}</button>)}
                <i className="far fa-plus-square" onClick={() => this.onHandlePlus()}></i>
            </div>
        );
    }
}

export default CheckboxItems;