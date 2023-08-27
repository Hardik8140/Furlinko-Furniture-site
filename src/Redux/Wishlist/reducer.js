import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actionType";

const initialState = {
  wishlistItems: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
