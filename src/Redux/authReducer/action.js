import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS, SIGNUP_SUCCESS } from "./actionType"

let URL = "";




export const loginUser = (email) => (dispatch) => {
     dispatch({type:LOGIN_REQUEST});
 return axios.get(`${URL}/users/${email}`);
}

  

export const createAccount = (payload) => (dispatch) =>{
        dispatch({type:LOGIN_REQUEST});
      
   return axios.post(`${URL}/users`,payload).then((res)=>{
      console.log("account created",res.data);
      dispatch({type:SIGNUP_SUCCESS});
    }).catch((err)=>{
      dispatch({type:LOGIN_FAILURE})
    })
   
}