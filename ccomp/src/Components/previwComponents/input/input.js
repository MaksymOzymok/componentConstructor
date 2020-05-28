import React, {Component} from "react";
import "./input.css"

class Input extends Component {

    render() {
        const {label, type} = this.props;
        return (
            <div className='input-component'>
                <span>{label}</span>
                <input type={type}/>
            </div>
        );
    }
}

export default Input;
