import React, {Component} from 'react';
import "./range-addition.css"

class RangeAddition extends Component {
    state = {
        min: 0,
        max: 100
    };
    onInputChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        let newObj = this.state;
        newObj[name] = parseInt(value);
        this.props.onChangeRange(newObj);
        this.setState({[name]: +value});

    };

    render() {

        return (
            <div className='range-addition'>
                <div className='row'>
                    <span>min</span>
                    <input name='min' type="text" onChange={(event) => this.onInputChange(event)}/>
                </div>
                <div className='row'>
                    <span>max</span>
                    <input name='max' type="text" onChange={(event) => this.onInputChange(event)}/>
                </div>

            </div>
        );
    }
}

export default RangeAddition;