import React, {Component} from 'react';
import "./checkbox.css"

class Checkbox extends Component {
    state = {
        selectedIndex : 0
    };

    onSelectOption = (id)=>{
      this.setState({selectedIndex : id})
    };
    render() {
        const {options,label} = this.props;
        return (
            <div className='checkbox'>
                <span>{label}</span>
                <div className='checkbox-container'>
                    {options.map((value,index)=>
                    {
                        let className = 'option';
                        if(index===this.state.selectedIndex){
                            className += ' selected';
                        }

                       return <button  name={value} className={className}
                                      onClick={(event)=>this.onSelectOption(+event.target.name-1)}>option {value}</button>
                    })}
                </div>
            </div>
        );
    }
}

export default Checkbox;