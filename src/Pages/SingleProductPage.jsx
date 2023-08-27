import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { styled } from "styled-components";
import { getSingleProduct } from "../Redux/SingleProduct/action";
import ProductDetails from "../Components/ProductDetails";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct({ id }));
  }, [dispatch, id]);

  const handleAddToCart = () => {};
  const handleAddToWishList = () => {};

  return (
    <ProductDetails
      handleAddToCart={handleAddToCart}
      handleAddToWishList={handleAddToWishList}
    />
  );
};

export default SingleProductPage;
