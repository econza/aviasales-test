import { SET_SORTING } from '../actions'
import { setValue } from '../../utils/helpers'

let initialState = {
    sorting: "",
    filters: []
};

const filtersState = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORTING:
            return { 
                ...state, 
                sorting: action.sortingType
            };
        default:
            return state;
    };
};


export default filtersState;