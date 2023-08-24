import axios from "axios";
import { FETCH_FAILURE, FETCH_REQUEST, GET_FETCH_SUCCESS } from "./actionType";

// products

export const getProduct = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .get(`https://furlinko.onrender.com/products`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};
