import {
  ADMIN_AUTH_FAILURE,
  ADMIN_AUTH_REQUEST,
  ADMIN_AUTH_SUCCESS,
} from "./actionType";

const initialState = {
  isAdminAuth: true,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_AUTH_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_AUTH_SUCCESS:
      return { ...state, isLoading: false, isAdminAuth: true };
    case ADMIN_AUTH_FAILURE:
      return { ...state, isLoading: false, isError: false };
    default:
      return state;
  }
};
