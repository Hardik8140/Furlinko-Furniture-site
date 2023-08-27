import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import ProductCard from "../Components/ProductCard";
import { Card, Image, SimpleGrid } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../Redux/Cart/action";
import { removeFromWishlist } from "../Redux/Wishlist/action";

const Wishlist = () => {
  const { id } = useParams();
  const wishlistItems = useSelector(
    (store) => store.wishlistReducer.wishlistItems
  );
  const dispatch = useDispatch();

  const handleAddToCart = (itemId) => {
    // const newItem = {
    //   id,
    //   title,
    //   brand,
    //   price,
    //   discount,
    //   category,
    //   rating,
    //   image,
    //   // material,
    //   // color,
    // };
    dispatch(addToCart(itemId));
    dispatch(removeFromWishlist(itemId.id));
  };

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

  return (
    <SimpleGrid
      columns={{ base: "1", sm: "1", md: "3", lg: "4" }}
      gap={6}
      p={6}
    >
      {wishlistItems.map((el) => (
        <PRODUCTCARD key={el.id}>
          <Link to={`/products/${id}`}>
            <img src={el.image} alt="title" />
            <div className="productDetails">
              <p className="title">
                <strong>{el.title}</strong>
              </p>
              <p>{el.brand}</p>
              <div className="ratingDiv">Rating: {el.rating}</div>
              <div className="priceDiv">
                <div className="price">₹ {el.price}</div>
                <div className="MRP">
                  ₹ {el.price + el.price * (el.discount / 100)}
                </div>
              </div>
              <div className="discountDiv">
                <p>
                  You Save {(el.discount / 100) * el.price}{" "}
                  <span>{`(${el.discount}%)`}</span>
                </p>
              </div>
              <p>Express Shipping in 2 days</p>
            </div>
          </Link>
          <hr />
          <div className="btn">
            <button className="atc" onClick={() => handleAddToCart(el)}>
              Add To Cart
            </button>
            <button
              className="atw"
              onClick={() => handleRemoveFromWishlist(el.id)}
            >
              Remove
            </button>
          </div>
        </PRODUCTCARD>
      ))}
    </SimpleGrid>
  );
};

export default Wishlist;

const PRODUCTCARD = styled.div`
  background-color: white;
  box-shadow: 1px 1px 5px grey;
  border-radius: 5px;
  padding: 10px;

  img {
    margin: auto;
    width: 95%;
    padding: 1px;
  }
  hr {
    margin-top: 10px;
    /* margin-bottom: 10px; */
  }
  .btn {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 10px;
  }
  .atc {
    padding: 7px;
    background-color: lightgray;
    border-radius: 4px;
    font-weight: bold;
  }
  .atw {
    background-color: lightgray;
    padding: 11px;
    border-radius: 4px;
  }
  .atc:hover {
    color: white;
    background-color: gray;
  }
  /* .atc {
    margin: auto;
  }
  .atc:hover {
  }
  .atw {
  } */
  .title {
  }

  .MRP {
    text-decoration: line-through;
    color: #6b6b6b;
  }

  .productDetails {
    padding: 10px;
    background-color: white;
  }

  .priceDiv {
    display: flex;
    gap: 20px;
  }

  .discountDiv {
    font-weight: bolder;
  }

  .discountDiv span {
    color: #7aaf6c;
    font-weight: bold;
  }
`;
