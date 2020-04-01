import {applyMiddleware, combineReducers, createStore} from "redux";
import commonReducer from "./commonReducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    common: commonReducer,
    form: formReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers);
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;