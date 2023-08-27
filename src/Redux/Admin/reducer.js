import {
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from "./actionType";

const intialstate = {
  users: {},
  isAdminAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = intialstate, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isAdminAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };
    case ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADMIN_LOGOUT:
      return intialstate;
    default:
      return state;
  }
};
