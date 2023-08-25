import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Home/action";
import { useParams, useSearchParams } from "react-router-dom";

const ProductPage = () => {
  let dispatch = useDispatch();
  const { homeProduct, isLoading } = useSelector((store) => {
    return {
      homeProduct: store.homeReducer.homeProduct,
      isLoading: store.homeReducer.isLoading,
    };
  }, shallowEqual);
  const [searchParams] = useSearchParams();
  const { category } = useParams();

  let paramsObj = {
    params: {
      category: searchParams.getAll("category"),
    },
  };

  useEffect(() => {
    if (category) {
      dispatch(getProduct(paramsObj));
    }
  }, [category, dispatch]);

  const filteredProducts = homeProduct.filter(
    (product) => product.category === category
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <p>{product.title}</p>
                <p>{product.brand}</p>
                <p>{product.price}</p>
                <p>{product.discount}</p>
                <p>{product.rating}</p>
                <p>{product.category}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
