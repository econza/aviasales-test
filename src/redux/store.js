import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import ticketsReducer from "../tickets-reducer";

let reducers = combineReducers({

  mainState: ticketsReducer
});

let store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;
