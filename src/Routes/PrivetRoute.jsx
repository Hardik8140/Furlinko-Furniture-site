import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.loginReducer.isAuth);
  const location = useLocation();
  return (
    <>
      {isAuth ? (
        children
      ) : (
        <Navigate state={location.pathname} to="/login" replace={true} />
      )}
    </>
  );
};

export default PrivetRoute;
