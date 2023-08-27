import {
  FETCH_SINGLE_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
} from "./actionType";

const initialState = {
  product: {
    title: "",
    image: "",
    brand: "",
    price: 0,
    rating: 0,
  },
  isLoading: false,
  isError: false,
};

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: action.payload,
      };
    case FETCH_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default singleProductReducer;
