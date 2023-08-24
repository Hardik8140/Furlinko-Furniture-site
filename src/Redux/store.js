import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as adminReducer } from "./Admin/reducer";
import { reducer as productReducer } from "./Product/reducer";
import { reducer as homeReducer } from "./Home/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  adminReducer,
  homeReducer,
  productReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
