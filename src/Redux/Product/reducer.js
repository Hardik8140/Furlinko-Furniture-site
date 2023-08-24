import {
  ADD_NEW_PRODUCT,
  ADD_NEW_SALES,
  ADD_NEW_USERS,
  DELETE_PRODUCT_SUCCESS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  GET_FETCH_SUCCESS,
  POST_FETCH_SUCCESS,
} from "./actionType";

const initialState = {
  product: [],
  sales: [],
  users: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, isError: false };
    case POST_FETCH_SUCCESS:
      return { ...state, isLoading: false };
    case GET_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: payload,
        sales: payload,
        users: payload,
      };
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        isLoading: false,
        product: [...state.product, payload],
      };
    case ADD_NEW_SALES:
      return {
        ...state,
        isLoading: false,
        sales: [...state.sales, payload],
      };
    case ADD_NEW_USERS:
      return {
        ...state,
        isLoading: false,
        users: [...state.users, payload],
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: state.product.filter((product) => product.id !== payload),
        sales: state.sales.filter((product) => product.id !== payload),
        users: state.users.filter((product) => product.id !== payload),
      };
    default:
      return state;
  }
};
