import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [prosucts, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelAddToCart = (product) => {
    console.log(product);
    // cars.push(product)
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop">
      <div className="products-container">
        {prosucts.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className="card-container">
        <Card cart={cart}></Card>
      </div>
    </div>
  );
};

export default Shop;

// https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json
