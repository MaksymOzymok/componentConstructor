import React, {Component} from 'react';
import "./range.css"


class Range extends Component {
    state ={
        value : 1
    };
    onInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: +value});
    };
    render() {
        const {min,max,label}=this.props;
        return (
            <div className='range'>
                <span className='range-header'>{label}</span>
                <input name='value' value={this.state.value} min={min} max={max} type="range" onChange={(event)=>this.onInputChange(event)}/>
                <span>value : {this.state.value}</span>
                <span>min : {min}</span>
                <span>max : {max}</span>
            </div>
        );
    }
}

export default Range;