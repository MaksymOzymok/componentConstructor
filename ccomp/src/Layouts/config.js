import React, {Component} from 'react';
import CreationForm from "../Components/configComponents/creation-form/creation-form";
import CreatedComponent from "../Components/configComponents/created-component/created-component";

class Config extends Component {

    render() {

        const {addComponent, data, changeConfiguration} = this.props;
        return (
            <div className='layout'>
                <h3 className='layout-header'>Components configuration</h3>
                {components(data, changeConfiguration)}
                <CreationForm addComponent={addComponent}/>
            </div>
        );
    }
}

const components = (data, changeConfig) => {
    return data.map(component => {
        switch (component.type) {
            case 'text':
                return <CreatedComponent key={component.value + component.type + component.id}
                                         id={component.id}
                                         options={component.options}
                                         range={component.range}
                                         changeConfig={changeConfig} type='text' value={component.value}/>;
            case 'password':
                return <CreatedComponent
                    key={component.value + component.type + component.id}
                    id={component.id}
                    options={component.options}
                    range={component.range}
                    changeConfig={changeConfig} type='password' value={component.value}/>;
            case 'checkbox':
                return <CreatedComponent
                    changeConfig={changeConfig}
                    id={component.id}
                    range={component.range}
                    type='checkbox' value={component.value} options={component.options}/>;
            case 'range':
                return <CreatedComponent changeConfig={changeConfig}
                                         id={component.id}
                                         type={'range'}
                                         range={component.range}
                                         value={component.value}/>;
            default :
                return null
        }
    })
};

export default Config;

//