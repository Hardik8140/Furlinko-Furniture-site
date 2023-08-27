import React from "react";
import { styled } from "styled-components";
import SideBar from "../Components/SideBar";
import ProductList from "../Components/ProductList";

const ProductPage = () => {
  // let dispatch = useDispatch();
  // const { homeProduct, isLoading } = useSelector((store) => {
  //   return {
  //     homeProduct: store.homeReducer.homeProduct,
  //     isLoading: store.homeReducer.isLoading,
  //   };
  // }, shallowEqual);
  // const [searchParams] = useSearchParams();
  // const { category } = useParams();

  // let paramsObj = {
  //   params: {
  //     category: searchParams.getAll("category"),
  //   },
  // };

  // useEffect(() => {
  //   if (category) {
  //     dispatch(getProduct(paramsObj));
  //   }
  // }, [category, dispatch]);

  // const filteredProducts = homeProduct.filter(
  //   (product) => product.category === category
  // );

  return (
    <PRODUCTS className="products">
      <SideBar />
      <ProductList />
    </PRODUCTS>
  );
};

export default ProductPage;

const PRODUCTS = styled.div`
  padding: 2px;
  max-width: 1500px;
  margin: auto;
`;
