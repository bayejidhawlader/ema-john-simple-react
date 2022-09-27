import React, { useEffect, useState } from "react";
import {
  addToDb,
  getStoredCard,
} from "../../ema-john-resources/utilities/fakedb";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // useEffect(() => {
  //   console.log("Local Storage First Line", products);
  //   const storedCart = getStoredCard();
  //   const savedCart = [];
  //   console.log(storedCart);
  //   for (const id in storedCart) {
  //     const addedProduct = products.find((product) => product.id === id);
  //     if (addedProduct) {
  //       const quentity = storedCart[id];
  //       addedProduct.quentity = quentity;
  //       savedCart.push(addedProduct);
  //     }
  //   }
  //   setCart(savedCart);
  //   // console.log("Local Storage Finished");
  // }, [products]);

  const handelAddToCart = (product) => {
    console.log(product);
    // cars.push(product)
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop">
      <div className="products-container">
        {products.map((product) => (
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

// https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0af79283953e498480c6ac22015ec878_9366/Creator_365_Tee_Black_GL0465_21_model.jpg
