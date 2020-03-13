import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    // three: threeReducer,
});

let store = createStore(reducers);


window.store = store;
export default store;