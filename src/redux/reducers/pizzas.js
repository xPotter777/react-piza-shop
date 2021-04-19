const initialState = {
    items: [],
    isLoaded:false
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        default: return state
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
            }

    }
}

export default pizzas;