import React, {Component} from 'react';
import ConfiguredCheckbox from "../configured-checkbox/configured-checkbox";
import "./created-component.css"
import RangeForConfig from "../rangeForConfig";

class CreatedComponent extends Component {
    state = {
        type: this.props.type,
        value: this.props.value,
        options: this.props.options,
        range: this.props.range
    };
    onInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
        this.props.changeConfig({type: name, value: value}, this.props.id);
    };

    render() {
        return (
            <div className='created-component'>
                <select name="type" id="" value={this.state.type} className='creation-input select'
                        onChange={(event => {
                            this.onInputChange(event);
                        })}>
                    <option value="text">Text</option>
                    <option value="password">Password</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="range">Range</option>
                </select>
                <input type="text" value={this.state.value} name='value' placeholder='Message'
                       className='creation-input'
                       onChange={(event => {
                           this.onInputChange(event);
                       })}/>
                {this.state.type === 'checkbox' && <ConfiguredCheckbox options={this.props.options} id={this.props.id}
                                                                       changeConfig={this.props.changeConfig}/>}
                {this.state.type === 'range' && <RangeForConfig range={this.props.range}
                                                                id={this.props.id}
                                                                changeConfig={this.props.changeConfig}/>}
            </div>
        );
    }
}

export default CreatedComponent;