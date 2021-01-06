//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { set } from "mongoose";
//import data from "/server/models/trainers.json";

// export default function Parent () {
//     const [shoes, getShoes] = useState('');

//     const url = 'http://localhost:3000/api/trainer';

//     const getAllShoes = () => {
//       axios.get(`${url}past`)
//       .then((response) => {
//         const shoeName = response.data.shoeName;
//         getShoes(shoeName)
//       })
//       .catch(error => console.error(`Error: $(error)`));
//     }
//     useEffect(() => {
//       getAllShoes();
//     }, []);
// }
// }

const Search = (props) => {
  const [shoes, setShoes] = useState([]);
  const [message, setMessage] = useState("Testing!");
  const apiUrl = "http://localhost:3000/api/trainer";

  const fetchData = async () => {
    const response = await axios.get(apiUrl);

    setMessage(response.data.message);
    setShoes(response.data);
    console.log(response.data);
  };
  return (
    <div>
      <div className="container">
        <h1>Trainers Release in 2020</h1>
        <h2>Fetch a list of Nike Shoes from an API and display it</h2>
        {/*<label for="shoe-search">Search for your shoes:</label>*/}
        {/* Fetch data from API */}
        <input type="search" id="shoe-search"></input>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Shoe
        </button>
        <p>{message}</p>
      </div>
      {/* Displays data from API */}
      {/*<p className="shoes">{shoeInfo && shoes.map()}</p>*/}
    </div>
  );
};

export default Search;
