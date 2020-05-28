import {ADD_COMPONENT, CHANGE_CONFIGURATION} from "./actions";
import {getNewArr} from "./helpers";

const initialState = {
    newObj: {},
    componentsConfig: [],
    componentsPreview : []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPONENT:
            return {
                ...state, componentsConfig:
                    [...state.componentsConfig, action.payload],
                componentsPreview:
                    [...state.componentsPreview, action.payload]
            };
        case CHANGE_CONFIGURATION:
            return {
                ...state,
                componentsPreview: [...getNewArr(state.componentsPreview, action.id, action.payload)]
            };
        default:
            return {...state}
    }
};
export default reducer;
