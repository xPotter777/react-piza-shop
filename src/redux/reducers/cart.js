
const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        default: return state
        case 'ADD_PIZZA_CART':
            const newItems = {
                ...state.items,
                [action.payload.id]:
                    !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id],
                            action.payload]
            }
            const allPizzas =[].concat.apply([],Object.values(newItems))
            const totalprice = allPizzas.reduce((sum,obj)=>obj.price + sum,0)
            return {
                ...state,
                items: newItems,
                itemsCount: [].concat.apply([],Object.values(newItems)).length,
                totalPrice: totalprice
            }

    }
}

export default cart;