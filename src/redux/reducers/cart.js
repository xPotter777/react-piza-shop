
const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0
}

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

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

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
            return {
                ...state,
                items: newItems,
                itemsCount:totalCount,
                totalPrice: totalPrice
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
        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

    }
}

export default cart;