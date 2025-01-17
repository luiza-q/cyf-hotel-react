import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      {props.orderType}: {orders} <br />
      <RestaurantButton handleClick={orderOne} />
      <br />
      <br />
    </li>
  );
};

export default Order;
