import React, {Component} from 'react';
import "./creation-form.css"
import CheckboxItems from "./checkbox-items";
import RangeAddition from "./range-addition";

class CreationForm extends Component {
    state = {
        type: 'text',
        value: '',
        id: 0,
        options: [1],
        range: {
            min: 0,
            max: 100
        }
    };
    onInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value})
    };


    addComponent = () => {
        if (this.state.value !== '') {
            this.props.addComponent({
                id: this.state.id,
                value: this.state.value,
                type: this.state.type,
                options: this.state.options,
                range: this.state.range
            });
            this.setState(state => {
                return {
                    type: 'text',
                    value: '',
                    id: ++state.id,
                    options: [1]
                }
            });

        } else {
            alert('fill all fields')
        }
    };
    onAddingOption = (newValue) => {
        this.setState(state => {
                return {
                    options: [...state.options, newValue]
                }
            }
        )
    };
    onChangeRange = (newRange) => {
        this.setState({range: newRange})
    };

    render() {
        return (
            <div className='creation-form'>
                <select name="type" id="" value={this.state.type} className='creation-input select'
                        onChange={(event => this.onInputChange(event))}>
                    <option value="text">Text</option>
                    <option value="password">Password</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="range">Range</option>
                </select>
                <input type="text" value={this.state.value} name='value' placeholder='Message'
                       className='creation-input'
                       onChange={(event => this.onInputChange(event))}/>
                {this.state.type === 'checkbox' && <CheckboxItems onAddingOption={this.onAddingOption}/>}
                {this.state.type === 'range' && <RangeAddition onChangeRange={this.onChangeRange}/>}
                <button type='button' className='add-btn' onClick={() => this.addComponent()}>Add component</button>
            </div>
        );
    }
}

export default CreationForm;