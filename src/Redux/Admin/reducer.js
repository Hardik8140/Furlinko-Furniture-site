import {
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_LOGOUT,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "./actionType";

const initialState = {
  isAdminAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAdminAuth: true };
    case ADMIN_LOGIN_FAILURE:
    case ADMIN_LOGIN_LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
