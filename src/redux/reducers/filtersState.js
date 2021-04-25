import { SET_SORTING, SET_FILTERS } from '../actions'
import { setValue } from '../../utils/helpers'

let initialState = {
    sorting: "",
    filters: {
        "-1": true,
        "0": true,
        "1": true,
        "2": true,
        "3": true,
        "4": true,
    }
};

const filtersState = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORTING:
            return { 
                ...state, 
                sorting: action.sortingType
            };
        case SET_FILTERS:
            return {
                ...state,
                filters: action.filters
            }
        default:
            return state;
    };
};


export default filtersState;