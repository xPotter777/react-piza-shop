
const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0
}

const getTotalPrice = arr => arr.reduce((sum,obj)=>obj.price + sum,0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        default: return state
        case 'ADD_PIZZA_CART':
            const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items,
                action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]:{
                    items:currentPizzaItems,
                    totalPrice:getTotalPrice(currentPizzaItems),
                }

            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas =[].concat.apply([],items)
            const totalprice = getTotalPrice(allPizzas)
            return {
                ...state,
                items: newItems,
                itemsCount: allPizzas.length,
                totalPrice: totalprice
            }
        case 'CLEAR_CART' :
            return {
                totalPrice: 0,
                itemsCount: 0,
                items: {}
            }
        case 'REMOVE_CART_ITEM' :
            const itemsToDelete = {
                ...state.items
            }
            const currentTotalPrice = itemsToDelete[action.payload].totalPrice
            const currentTotalCount = itemsToDelete[action.payload].items.length
            delete itemsToDelete[action.payload]
            return {
            ...state,
            items: itemsToDelete,
                totalPrice:state.totalPrice - currentTotalPrice,
                itemsCount: currentTotalCount
            }
    }
}

export default cart;