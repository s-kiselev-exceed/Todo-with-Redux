const initialState = {
    list: [],
    status: 'all',
    switcher: false,
}

export function todoReducer(state = initialState, action) {

    switch (action.type) {

        case 'GET_ITEMS':
            return { ...state, list: action.payload }

        case 'ADD_ITEM':
            return { ...state, list: [...state.list, action.payload] }

        case 'DELETE_ITEM':
            return { ...state, list: [...state.list.filter(e => e.id !== action.payload.id)] }

        case 'CLEAR_ALL_DONE':
            return { ...state, list: [...state.list.filter(e => !e.checked)] }

        case 'CHECK_ITEM':
            return {
                ...state, list: state.list.map(e => {
                    if (e._id === action.payload.id) {
                        return { ...e, checked: !action.payload.checked }
                    }
                    else {
                        return { ...e }
                    }
                }),
            }
        case 'CHECK_ALL_TASKS':
            return {
                ...state, list: state.list.map(e => {
                    if (state.list.every(e => e.checked) && action.payload.length) {
                        return { ...e, checked: action.payload[0].checked }
                    }
                    else {
                        if (action.payload.length) {
                            return { ...e, checked: action.payload[0].checked }
                        }
                    }
                }), switcher: !state.switcher
            }

        case 'FILTER_ALL':
            return { ...state, status: action.payload }

        case 'FILTER_DONE':
            return { ...state, status: action.payload }

        case 'FILTER_IN_PROGRESS':
            return { ...state, status: action.payload }

        default:
            return state
    }
}

