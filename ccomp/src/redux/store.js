import {createStore} from "redux";
import reducer from "./reducer";

const store = createStore(reducer);
export default store;
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()