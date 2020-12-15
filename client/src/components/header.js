import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="Header">
      <Link to="/">Home | </Link>
      <Link to="/wishList">My WishList| </Link>
      <Link to="/sneakerSearch">Sneaker Search</Link>
    </div>
  );
};

export default Header;
