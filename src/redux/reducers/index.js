import filterReducer from './filters'
import pizzasReducer from './pizzas'
import {combineReducers} from "redux";
import cart from "./cart";

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer,
    cart
})

export default rootReducer;