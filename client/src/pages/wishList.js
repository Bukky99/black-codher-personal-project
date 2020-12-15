import React from "react";
import "./WishList.css";

const WishList = (props) => {
  console.log(props);
  return (
    <div className="WishListTitle">
      <h1> {props.name}'s Sneaker Wish List!</h1>
    </div>
  );
};

export default WishList;
