import { FETCH_FAILURE, FETCH_REQUEST, GET_FETCH_SUCCESS } from "./actionType";

const initialState = {
  homeProduct: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, isError: false };
    case GET_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        homeProduct: payload,
      };
    default:
      return state;
  }
};
