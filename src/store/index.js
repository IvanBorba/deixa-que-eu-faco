import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import usersReducer from "./modules/users/reducer";

const reducers = combineReducers({
  users: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
