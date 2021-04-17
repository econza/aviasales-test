import { SET_TICKETS, SORT_LOWEST_PRICE } from '../actions'

let initialState = {
    tickets: []
};

const ticketsState = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:
            return { 
                ...state, 
                tickets: action.tickets 
            };
        case SORT_LOWEST_PRICE :
            return {
                ...state,
                tickets: state.tickets.sort((a, b) => a.price - b.price)
            }
        default:
            return state;
    };
};

export default ticketsState;
