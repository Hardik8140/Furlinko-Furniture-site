import axios from "axios";
import {
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from "./actionType";

const URL = "https://furlinko.onrender.com/admins";

export const adminUser = (userData) => (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_REQUEST });

  return axios
    .post(`https://furlinko.onrender.com/admins`, userData)
    .then((res) => {
      console.log("login success", res.data);
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log("login failure", err);
      dispatch({ type: ADMIN_LOGIN_FAILURE });
    });
};

// export const createAccount = (payload) => (dispatch) => {
//   dispatch({ type: ADMIN_LOGIN_REQUEST });
//   return axios
//     .post(`https://furlinko.onrender.com/admins`, payload)
//     .then((res) => {
//       console.log("account created", res.data);
//       dispatch({ type: ADMIN_LOGIN_SUCCESS });
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({ type: ADMIN_LOGIN_FAILURE });
//     });
// };

export const logoutUser = () => (dispatch) => {
  dispatch({ type: ADMIN_LOGOUT });
};
