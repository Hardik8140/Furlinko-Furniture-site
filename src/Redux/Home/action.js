import axios from "axios";
import {
  FETCH_FAILURE,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_REQUEST,
  GET_FETCH_SUCCESS,
} from "./actionType";

// products

export const getProduct = (paramsObj) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .get(`https://furlinko.onrender.com/products`, paramsObj)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: GET_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

// export const getProducts = () => (dispatch) => {
//   dispatch({ type: FETCH_REQUEST });
//   axios
//     .get(`https://furlinko.onrender.com/products`)
//     .then((res) => {
//       console.log(res.data);
//       dispatch({ type: GET_FETCH_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({ type: FETCH_FAILURE });
//     });
// };

export const getSingleProduct = (category, id) => (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REQUEST });
  return axios
    .get(`https://furlinko.onrender.com/products/${category}/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_PRODUCT_FAILURE });
    });
};
