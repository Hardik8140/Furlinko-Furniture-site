import axios from "axios";
import {
  FETCH_SINGLE_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
} from "./actionType";

export const getSingleProduct =
  ({ id }) =>
  (dispatch) => {
    dispatch({ type: FETCH_SINGLE_PRODUCT_REQUEST });
    return axios
      .get(`https://furlinko.onrender.com/products/${id}`)
      .then((response) => {
        const product = response.data;
        dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, payload: product });
      })
      .catch((error) => {
        dispatch({ type: FETCH_SINGLE_PRODUCT_FAILURE });
      });
  };
