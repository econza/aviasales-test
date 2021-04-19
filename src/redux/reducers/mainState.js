import { SET_TICKETS, SET_SHOW_COUNT } from '../actions'

let initialState = {
    tickets: [],
    showCount: 5
};

const ticketsState = (state = initialState, action) => {
    switch (action.type) {
        case SET_TICKETS:
            return { 
                ...state, 
                tickets: action.tickets 
            };
        case SET_SHOW_COUNT:
            return {
                ...state,
                showCount: action.count
            }
        default:
            return state;
    };
};

export default ticketsState;
