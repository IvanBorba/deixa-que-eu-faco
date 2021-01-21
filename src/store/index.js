import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import usersReducer from "./modules/users/reducer";
import { chefServicesReducer } from "./modules/services/reducer";
import { costumerServicesReducer } from "./modules/services/reducer";

const reducers = combineReducers({
  users: usersReducer,
  chefServices: chefServicesReducer,
  costumerServices: costumerServicesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
