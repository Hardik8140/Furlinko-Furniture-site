import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
} from "./actionTypes";

const URL = "https://furlinko.onrender.com/users";

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .get(`https://furlinko.onrender.com/users`, userData)
    .then((res) => {
      console.log("login success", res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch((err) => {
      console.log("login failure", err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const createAccount = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`https://furlinko.onrender.com/users`, payload)
    .then((res) => {
      console.log("account created", res.data);
      dispatch({ type: SIGNUP_SUCCESS });
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
