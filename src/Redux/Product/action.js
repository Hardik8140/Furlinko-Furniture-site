import axios from "axios";
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

// products

export const postProduct = (newData) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .post(`http://localhost:8080/products`, newData)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_FETCH_SUCCESS });
      dispatch({ type: ADD_NEW_PRODUCT, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const getProduct = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .get(`http://localhost:8080/products`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const deleteProduct = (productId) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .delete(`http://localhost:8080/products/${productId}`)
    .then(() => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

// Sales :-

export const postSales = (newData) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .post(`http://localhost:8080/sales`, newData)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_FETCH_SUCCESS });
      dispatch({ type: ADD_NEW_SALES, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const getSales = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .get(`http://localhost:8080/sales`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const deleteSales = (productId) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .delete(`http://localhost:8080/sales/${productId}`)
    .then(() => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

// Users

export const postUsers = (newData) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .post(`http://localhost:8080/users`, newData)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_FETCH_SUCCESS });
      dispatch({ type: ADD_NEW_USERS, payload: res.data });
      dispatch(getUsers());
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const getUsers = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .get(`http://localhost:8080/users`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const deleteUsers = (productId) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .delete(`http://localhost:8080/users/${productId}`)
    .then(() => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
      dispatch(getUsers());
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};
