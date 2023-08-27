import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { styled } from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getProduct } from "../Redux/Home/action";

function ProductList() {
  let dispatch = useDispatch();
  const { homeProduct, isLoading } = useSelector((store) => {
    return {
      homeProduct: store.homeReducer.homeProduct,
      isLoading: store.homeReducer.isLoading,
    };
  }, shallowEqual);
  const [searchParams] = useSearchParams();

  let paramsObj = {
    params: {
      category: searchParams.getAll("category"),
      brand: searchParams.getAll("brand"),
      color: searchParams.getAll("color"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProduct(paramsObj));
  }, [searchParams]);

  return (
    <PRODUCTLIST className="product-list">
      {homeProduct.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </PRODUCTLIST>
  );
}

export default ProductList;

const PRODUCTLIST = styled.div`
  padding: 20px;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr); /* 2 columns on medium screens */
  }

  @media (min-width: 426px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on larger screens */
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); 
  }/*
`;
