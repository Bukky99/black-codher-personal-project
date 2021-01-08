import React, { useState } from "react";
import "./WishList.css";
import axios from "axios";
//import {Form, Button, Card} from "react-bootstrap";

const WishList = (props) => {
  console.log(props);

  //object tracking two fields, username & description
  const [input, setInput] = useState({
    username: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newRequest = {
      username: input.username,
      description: input.description,
    };
    axios.post("http://localhost:5000/api/request", newRequest);
  }

  return (
    <div className="container">
      <h1>Create Wish List Page</h1>
      {/*<h1> {props.name}'s Sneaker Wish List!</h1>*/}
      {/*form to go at bottom of page */}
      <label>Request shoes you would like to get more information about:</label>
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="username"
            value={input.username}
            autoComplete="off"
            className="form-control"
            placeholder="Username"
          ></input>
        </div>
        {/*User can request to get more info from a shoe if not on the website which will send into database*/}
        {/*User sends form which is attached to thier account*/}
        <div className="form-group">
          <textarea
            onChange={handleChange}
            name="description"
            value={input.description}
            autoComplete="off"
            className="form-control"
            placeholder="Sneaker Name/Sneaker Description"
          ></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-lg btn-info">
          Request Shoe Info{" "}
        </button>
      </form>
    </div>
  );
};

export default WishList;
