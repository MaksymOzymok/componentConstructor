import React, {Component} from 'react';

class RangeForConfig extends Component {
    state = {
        min: this.props.range.min,
        max: this.props.range.max
    };
    onInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: +value});
        let newObj = this.state;
        newObj[name] = parseInt(value);
        this.props.changeConfig({type: 'range', value: newObj}, this.props.id);
    };

    render() {

        return (
            <div className='range-addition'>
                <div className='row'>
                    <span>min</span>
                    <input name='min' type="text" value={this.state.min}
                           onChange={(event) => this.onInputChange(event)}/>
                </div>
                <div className='row'>
                    <span>max</span>
                    <input name='max' type="text" value={this.state.max}
                           onChange={(event) => this.onInputChange(event)}/>
                </div>

            </div>
        );
    }
}

export default RangeForConfig;