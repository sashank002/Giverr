import React from "react";
<<<<<<< HEAD
import "./Orders.scss";
import { Link } from "react-router-dom";

const Orders = () => {
  const currentUser={
    id:1,
    username:"John Doe",
    isSeller:true,
  }
  return(
  <div className="Orders">
    <div className="container">
      <div className="title">
        <h1>Orders</h1>
        
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>{currentUser?.isSeller ? "Buyer" :"Seller"}</th>
          <th>Contact</th>
        </tr>
        <tr>
          <td>
            <img className="img" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </td>
          <td>Gigs1</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img className="delete" src="./img/message.png" alt="" />
          </td>
        </tr>

      </table>
    </div>
  </div>
  );
};

export default Orders;

=======

const Orders = () => {
  return <div className="orders">Orders</div>;
};

export default Orders;
>>>>>>> 6ee63e9f372ae97c083fe4c2fb8522e89f8e20bb
