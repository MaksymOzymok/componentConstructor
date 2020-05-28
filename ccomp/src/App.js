import React, {Component} from 'react';
import Config from "./Layouts/config";
import Preview from "./Layouts/preview";
import "./index.css"
import {connect} from "react-redux"
import {addComponent,changeConfiguration} from "./redux/actions";

class App extends Component {

    render() {
        const {addComponent,changeConfiguration} = this.props;
        return (

            <div className='app'>
                <Config addComponent={addComponent} data = {this.props.componentsConfig} changeConfiguration={changeConfiguration}/>
                <Preview data = {this.props.componentsPreview}/>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addComponent: data => dispatch(addComponent(data)),
        changeConfiguration: (data,id) => dispatch(changeConfiguration(data,id))
    }
};

const mapStateToProps = (store)=>{
    return{
        componentsConfig : store.componentsConfig,
        componentsPreview : store.componentsPreview
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);