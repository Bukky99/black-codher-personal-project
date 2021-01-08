//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { query } from "express";

const Search = () => {
  const [search, setSearch] = useState({
    query: "",
  });

  // const cancelTokenSource = axios.CancelToken.source();
  const [shoes, setShoes] = useState([]);
  const [message, setMessage] = useState("Testing!");
  const apiUrl = `http://localhost:3000/api/trainer?q=${query}$`;

  const fetchData = async () => {
    const response = await axios.get(apiUrl);

    setMessage(response.data.message);
    setShoes(response.data.shoes);
    console.log(response.data.shoes);
  };

  // const fetchSearchResults = async (updatedPageNo = "", query) => {
  //   // const pageNumber = updatedPageNo ? `&page=4${updatedPageNo}` : "";
  //   const response = await axios.get(apiUrl);

  //   if (cancelTokenSource) {
  //     cancelTokenSource.cancel();
  //   }

  //   axios.get(apiUrl, {
  //     cancelToken: cancelTokenSource.token,
  //   });

  //   cancelTokenSource.cancel().then((response) => {
  //     const resultNotFoundMsg = "nothing";
  //     console.log(response);
  //   });
  // };

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setSearch((prevSearch) => {
      return {
        ...prevSearch,
        [name]: value,
        loading: true,
      };
    });
    console.log(search);
  }

  // useEffect(() => {
  //   fetch("/api/trainer")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setShoe(jsonRes));
  // });

  return (
    <div>
      <div className="container">
        <h1>Trainers Release in 2020</h1>
        {/*shoes.map(shoe)*/}
        <h2>Fetch a list of Nike Shoes from an API and display it</h2>
        <label for="shoe-search">Search for your shoes:</label>
        {/* Fetch data from API */}
        <i className="fas fa-search" />
        <input
          type="search"
          name="query"
          value={search.query}
          id="shoe-search"
          placeholder="Search..."
          onChange={handleChange}
        ></input>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Shoe
        </button>
        <p>{message}</p>
      </div>
      {/* Displays data from API */}
      <p>
        {shoes.map((shoe) => (
          <div className="shoeInfo">
            <h1>{shoe.shoeInfo.name}</h1>
            <p>{shoe.shoeInfo.brand}</p>
            <img
              className="shoeImg"
              src={shoe.shoeInfo.imageLink}
              alt="a shoe"
            />
          </div>
        ))}
      </p>
    </div>
  );
};

export default Search;
