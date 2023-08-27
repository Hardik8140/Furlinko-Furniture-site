import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as adminReducer } from "./Admin/reducer";
import { reducer as productReducer } from "./Product/reducer";
import { reducer as homeReducer } from "./Home/reducer";
import { reducer as loginReducer } from "./authReducer/reducer";
import singleProductReducer from "./SingleProduct/reducer";
import { reducer as cartReducer } from "./Cart/reducer";
import { reducer as wishlistReducer } from "./Wishlist/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  adminReducer,
  homeReducer,
  loginReducer,
  cartReducer,
  wishlistReducer,
  singleProductReducer,
  productReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
