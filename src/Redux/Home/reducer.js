import {
  FETCH_FAILURE,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_REQUEST,
  GET_FETCH_SUCCESS,
} from "./actionType";

const initialState = {
  homeProduct: [],
  product: null,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        homeProduct: payload,
      };
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
