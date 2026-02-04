import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // const handleQuantityChange = (event) => {
  //   setQuantity(event.target.value);
  // };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>name: {name}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        min={1}
      />
      <p>Qunatity: {quantity}</p>
      <textarea
        value={comment}
        placeholder="enter your comment here"
        onChange={handleCommentChange}
      />
      <p>Your comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select payment method please.</option>
        <option value="visa">visa</option>
        <option value="PayPal">PayPal</option>
        <option value="gift card">gift card</option>
      </select>
      <p>Payment Method: {payment}</p>

      <label>
        <input
          value="Pick Up"
          type="radio"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          value="Delivery"
          type="radio"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
