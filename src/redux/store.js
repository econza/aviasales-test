import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import ticketsReducer from "../redux/reducers/ticketsState"
import filtersReducer from "../redux/reducers/filtersState"

let reducers = combineReducers({
  mainState: ticketsReducer,
  filtersState: filtersReducer
});

let store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;
