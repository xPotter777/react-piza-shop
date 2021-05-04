
const initialState = {
     sortBy: {
         type:'popular',
         order:'desc',
     },
    category: null
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        default: return state
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }

    }
}

export default filters;