import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, handelAddToCart }) => {
  // const { product, handelAddToCart } = props;
  const { name, img, seller, price, ratings } = product;
  // console.log(props);
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <h4 className="seller-info">Price: ${price}</h4>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p className="product-rating">
          <small>Rating: {ratings} star</small>
        </p>
      </div>
      <button className="product-btn" onClick={() => handelAddToCart(product)}>
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;

{
  /* <i class="fa-solid fa-cart-shopping"></i>; */
}
