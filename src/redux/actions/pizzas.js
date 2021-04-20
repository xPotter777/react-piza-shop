import axios from "axios";

export const fetchPizzas = () => (dispatch) => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data))
        dispatch(setLoader())
    });
}

export const setLoader = () => ({
    type:'SET_LOADING'
})

export const setPizzas = (items) => ({
    type:'SET_PIZZAS',
    payload: items
})