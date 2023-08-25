import {
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "./actionType";

export const adminLogin =
  ({ email, password }) =>
  (dispatch) => {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const expectedAdminEmail = "admin@example.com";
    const expectedAdminPassword = "admin";

    if (email === expectedAdminEmail && password === expectedAdminPassword) {
      dispatch({ type: ADMIN_LOGIN_SUCCESS });
      return Promise.resolve();
    } else {
      dispatch({ type: ADMIN_LOGIN_FAILURE });
      return Promise.reject();
    }
  };
