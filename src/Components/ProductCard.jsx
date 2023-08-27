import React, { useState } from "react";
import { styled } from "styled-components";
import { FiHeart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/Wishlist/action";

function ProductCard({
  id,
  title,
  image,
  brand,
  price,
  discount,
  category,
  rating,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (store) => store.wishlistReducer.wishlistItems
  );
  const handleAddToCart = () => {
    const newItem = {
      id,
      title,
      brand,
      price,
      discount,
      category,
      rating,
      image,
      // material,
      // color,
    };
    dispatch(addToCart(newItem));
  };

  const handleAddToWishList = () => {
    const newItem = {
      id,
      title,
      brand,
      price,
      discount,
      category,
      rating,
      image,
      // material,
      // color,
    };
    dispatch(addToWishlist(newItem));
  };
  return (
    <PRODUCTCARD>
      <Link to={`/products/${id}`}>
        <img src={image} alt="title" />
        <div className="productDetails">
          <p className="title">
            <strong>{title}</strong>
          </p>
          <p>{brand}</p>
          <div className="ratingDiv">Rating: {rating}</div>
          <div className="priceDiv">
            <div className="price">₹ {price}</div>
            <div className="MRP">₹ {price + price * (discount / 100)}</div>
          </div>
          <div className="discountDiv">
            <p>
              You Save {(discount / 100) * price}{" "}
              <span>{`(${discount}%)`}</span>
            </p>
          </div>
          <p>Express Shipping in 2 days</p>
        </div>
      </Link>
      <hr />
      <div className="btn">
        <button className="atc" onClick={handleAddToCart}>
          Add To Cart
        </button>
        <button className="atw" onClick={() => handleAddToWishList()}>
          {wishlistItems.some((item) => item.id === id) ? (
            <FiHeart id={`heart-${id}`} style={{ fill: "red" }} />
          ) : (
            <FiHeart id={`heart-${id}`} />
          )}
        </button>
      </div>
    </PRODUCTCARD>
  );
}

export default ProductCard;

const PRODUCTCARD = styled.div`
  background-color: white;
  box-shadow: 1px 1px 5px grey;
  border-radius: 5px;
  padding: 10px;

  img {
    margin: auto;
    width: 90%;
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
