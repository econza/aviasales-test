import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import mainState from "../redux/reducers/mainState"
import filtersReducer from "../redux/reducers/filtersState"

let reducers = combineReducers({
  mainState: mainState,
  filtersState: filtersReducer
});

let store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;
