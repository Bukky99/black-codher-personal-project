//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  //const [loading, setLoading] = useState(false);

  const [shoes, setShoes] = useState([]);
  const [message, setMessage] = useState("Testing!");

  const fetchData = async () => {
    const apiUrl = `http://localhost:3000/api/trainer?q=${query}`;
    const response = await axios.get(apiUrl);
    setMessage(response.data.message);
    setShoes(response.data.shoes);
  };

  console.log(query);
  function handleChange(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  return (
    <div>
      <div className="container">
        {/*<h1>Trainers Release in 2020</h1>8*/}
        {/*shoes.map(shoe)*/}
        {/*<h2>Fetch a list of Nike Shoes from an API and display it</h2>*/}
        <label for="shoe-search">Search for your shoes:</label>
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
        <button className="fetch-button" onClick={fetchData}>
          Find Sneaker
        </button>
        <p>{message}</p>
      </div>
      {/* Displays data from API */}
      <p>
        {shoes.map((shoe) => (
          <div className="shoeInfo">
            <h1 className="shoeName">{shoe.name}</h1>
            <img className="shoeImg" src={shoe.imageLink} alt="a shoe" />
            <p>Release Date: {shoe.releaseDate}</p>
            <p>Brand: {shoe.brand}</p>
            <p>
              Price: {shoe.retailPrice.currencyCode} {shoe.retailPrice.amount}
            </p>
          </div>
        ))}
      </p>
    </div>
  );
};

export default Search;
