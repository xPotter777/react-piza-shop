import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk'

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const store = createStore(rootReducer,composeEnhansers(applyMiddleware(thunk)))

export default store;