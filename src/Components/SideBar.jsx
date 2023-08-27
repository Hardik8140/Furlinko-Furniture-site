import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

function SideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
  const [color, setColor] = useState(searchParams.getAll("color") || []);
  const [order, setOrder] = useState(searchParams.get("order") || "");

  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  useEffect(() => {
    let params = {
      category,
      brand,
      color,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, brand, color, order]);

  return (
    <SIDEBAR className="products-sidebar">
      <div className="sorting-div">
        <label>Filter by Category</label>
        <select
          name="filtering"
          onChange={(e) => setCategory([e.target.value])}
        >
          <option value="">Select Category</option>
          <option value="Sofas">Sofas</option>
          <option value="Sectional Sofas">Sectional Sofas</option>
          <option value="Sofa Cum Beds">Sofa Cum Beds</option>
          <option value="Gaming Chairs">Gaming Chairs</option>
          <option value="Recliners">Recliners</option>
          <option value="Chaise Loungers">Chaise Loungers</option>
        </select>

        <label>Filter by Brand</label>
        <select name="brand" onChange={(e) => setBrand([e.target.value])}>
          <option value="">Select Brand</option>
          <option value="ModernLiving">ModernLiving</option>
          <option value="CozyHaven">CozyHaven</option>
          <option value="GamerPro">GamerPro</option>
          <option value="LuxuryLiving">LuxuryLiving</option>
          <option value="TrendyDesigns">TrendyDesigns</option>
          <option value="ElegantHome">ElegantHome</option>
        </select>

        <label>Filter by Color</label>
        <select name="brand" onChange={(e) => setColor([e.target.value])}>
          <option value="">Select Color</option>
          <option value="Brown">Brown</option>
          <option value="Rust">Rust</option>
          <option value="Grey">Grey</option>
          <option value="Black">Black</option>
          <option value="Beige">Beige</option>
          <option value="Blue">Blue</option>
        </select>

        <label>Sort By</label>
        <select name="sorting" onChange={handleOrder}>
          <option value="">Relevance</option>
          <option value="priceLH">Price: Low to High</option>
          <option value="priceHL">Price: High to low</option>
          <option value="discountHL">Max Discount</option>
          <option value="ratingHL">Top Rated</option>
        </select>
      </div>
    </SIDEBAR>
  );
}

export default SideBar;

const SIDEBAR = styled.div`
  background-color: #dbdbdb;
  padding: 10px 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  .sorting-div {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  select {
    padding: 7px;
    border-radius: 3px;
    border: none;
    background-color: whitesmoke;
  }

  select > option {
    font-size: 15px;
    padding: 10px;
  }

  @media (min-width: 320px) {
    /* Apply responsive styles for screens wider than 768px */
    flex-direction: row;

    .sorting-div {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      margin: auto;
      align-items: center;
    }
  }
  @media (min-width: 426px) {
    /* Apply responsive styles for screens wider than 768px */
    flex-direction: row;

    .sorting-div {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
    }
  }
  @media (min-width: 769px) {
    /* Apply responsive styles for screens wider than 768px */
    flex-direction: row;

    .sorting-div {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      align-items: center;
    }
  }
  @media (min-width: 1024px) {
    /* Apply responsive styles for screens wider than 768px */
    flex-direction: row;

    .sorting-div {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      align-items: center;
    }
  }
  @media (min-width: 1200px) {
    /* Apply responsive styles for screens wider than 768px */
    flex-direction: row;

    .sorting-div {
      flex-direction: row;
      align-items: center;
    }
  }
`;
