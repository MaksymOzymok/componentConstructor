import React, {Component} from 'react';
import Input from "../Components/previwComponents/input/input";
import Checkbox from "../Components/previwComponents/checkbox/checkbox";
import "./layout.css"
import Range from "../Components/previwComponents/Range/range";

class Preview extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className='layout'>
                <h3 className='layout-header'>Components preview</h3>
                {components(data)}
            </div>
        );
    }
}

const components = (data) => {
    return data.map(component => {
        switch (component.type) {
            case 'text':
                return <Input key={component.value + component.id}
                              type='text' label={component.value}/>;
            case 'password':
                return <Input key={component.value + component.id}
                              type='password' label={component.value}/>;
            case 'checkbox':
                return <Checkbox label = {component.value} options={component.options}/>;
            case 'range':
                return <Range type='range'
                              label = {component.value}
                              min={component.range.min}
                              max={component.range.max}/>;
            default :
                return null
        }
    })
};

export default Preview;