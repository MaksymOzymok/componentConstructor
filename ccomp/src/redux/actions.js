export const ADD_COMPONENT = 'ADD_COMPONENT';
export const CHANGE_CONFIGURATION = 'CHANGE_CONFIGURATION';

export const addComponent =(data)=>{
    return{
        type : ADD_COMPONENT,
        payload : data
    }
};
export const changeConfiguration=(data,id)=>{
    return {
        type : CHANGE_CONFIGURATION,
        payload :data,
        id,
    }
};