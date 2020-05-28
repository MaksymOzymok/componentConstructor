import React, {Component} from 'react';
import "../creation-form/checkbox-items.css"

class ConfiguredCheckbox extends Component {
    state = {
        options: this.props.options
    };
    onHandlePlus = () => {
        let newIndex = this.state.options.length + 1;
        this.props.changeConfig({type: 'options', value: [...this.state.options, newIndex]}, this.props.id);
        this.setState(state => {
            return {
                options: [...state.options, newIndex]
            }
        });
    };

    render() {
        return (
            <div className='items-container'>
                {this.state.options.map(option => <button key={'configured' + option}
                                                          className='option'>option {option}</button>)}
                <i className="far fa-plus-square" onClick={() => this.onHandlePlus()}></i>
            </div>
        );
    }
}

export default ConfiguredCheckbox;