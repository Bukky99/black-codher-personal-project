import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar bg-dark container">
      <Link to="/">Home </Link>
      <Link to="/about">About</Link>
      <Link to="/wishList">My WishList </Link>
      <Link to="/sneakerSearch">Sneaker Search</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
