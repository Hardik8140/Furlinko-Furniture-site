// cartActions.js

import { ADD_TO_CART } from "./actionType";

export const addToCart = (item) => (dispatch) => {
  const itemWithInitialQuantity = { ...item, quantity: 1 };
  dispatch({ type: ADD_TO_CART, payload: itemWithInitialQuantity });
};

export const increaseQuantity = (itemId) => ({
  type: "INCREASE_QUANTITY",
  payload: itemId,
});

export const decreaseQuantity = (itemId) => ({
  type: "DECREASE_QUANTITY",
  payload: itemId,
});

export const deleteCartItem = (itemId) => ({
  type: "DELETE_CART_ITEM",
  payload: itemId,
});
