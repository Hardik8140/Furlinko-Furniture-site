import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
} from "./actionTypes";

const intialstate = {
  users: {},
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = intialstate, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case LOGOUT:
      return {
        ...intialstate,
      };
    default:
      return state;
  }
};
