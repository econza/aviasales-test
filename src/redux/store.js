import { createStore, combineReducers } from "redux";

import ticketsReducer from "../tickets-reducer";

let reducers = combineReducers({

  mainState: ticketsReducer
});

let store = createStore(
  reducers
);

export default store;
