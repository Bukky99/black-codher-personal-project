//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const [shoes, setShoes] = useState([]);
  const [message, setMessage] = useState("Testing!");

  const fetchData = async () => {
    const apiUrl = `http://localhost:3000/api/trainer?q=${query}`;
    const response = await axios.get(apiUrl);
    setMessage(response.data.message);
    setShoes(response.data.shoes);
  };

  console.log(query);
  const handleChange = async (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    const apiUrl = `http://localhost:3000/api/trainer?q=${event.target.value}`;
    const response = await axios.get(apiUrl);
    setMessage(response.data.message);
    setShoes(response.data.shoes);
  };

  const handleAdd = (event) => {
    console.log(event.target.id);
    const foundShoe = shoes.find((shoe) => event.target.id === shoe._id);
    console.log(shoes.find((shoe) => event.target.id === shoe._id));
    const myStorage = window.localStorage;
    myStorage.setItem("wishList", JSON.stringify(foundShoe));
  };

  return (
    <div>
      <div className="container">
        {/*<h1>Trainers Release in 2020</h1>8*/}
        {/*shoes.map(shoe)*/}
        {/*<h2>Fetch a list of Nike Shoes from an API and display it</h2>*/}
        <label className="shoe-search">Search for your shoes:</label>
        {/* Fetch data from API */}
        <i className="fas fa-search" />
        <input
          className="searchBar"
          type="search"
          name="query"
          value={query}
          id="shoe-search"
          placeholder="Search..."
          onChange={handleChange}
        ></input>
        {/* {/* <button className="fetch-button" onClick={fetchData}>
          live serach instead of button 
          Find Sneaker
        </button> */}
        <p>{message}</p>
      </div>
      {/* Displays data from API */}

      {shoes.map((shoe) => (
        <div className="shoeInfo" key={shoe._id}>
          <h1 className="shoeName">{shoe.name}</h1>
          <img className="shoeImg" src={shoe.imageLink} alt="a shoe" />
          <p>Release Date: {shoe.releaseDate}</p>
          <p>Brand: {shoe.brand}</p>
          <p>
            Price: {shoe.retailPrice.currencyCode} {shoe.retailPrice.amount}
          </p>
          <button id={shoe._id} type="button" onClick={handleAdd}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Search;
