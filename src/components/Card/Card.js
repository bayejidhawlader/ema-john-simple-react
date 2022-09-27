import React from "react";
import "./Card.css";

const Card = (props) => {
  const { cart } = props;
  // console.log(cart);

  //   Price & Shipping
  let total = 0;
  let shipping = 0;
  console.log("Product Loded Before Fetch");
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }

  //   Tax
  const taxi = total * 0.1;
  const tax = parseFloat(taxi.toFixed(2));
  // console.log(typeof tax);

  //   Grand Total
  const totalPrice = total + shipping + tax;
  // console.log(typeof totalPrice);

  //   //shipping
  //   let shippingCharge = 0;
  //   for (const product of shipping) {
  //     shippingCharge = shippingCharge + product.shipping;
  //   }

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Item: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Caarge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${totalPrice}</h4>
    </div>
  );
};

export default Card;
