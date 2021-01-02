//import React from "react";
import "./Search.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const [shoes, setShoes] = useState(null);
  const apiUrl = "http://localhost:3000/api/trainer";

  const fetchData = async () => {
    const response = await axios.get(apiUrl);

    setShoes(response.data);
    console.log(response.data);
  };
  return (
    <div>
      <p className="searchbar">
        <h1>Jordan Shoes</h1>
        <h2>Fetch a list of Nike Shoes from API and display it</h2>
        <label for="shoe-search">Search for your shoes:</label>
        <input type="search" id="shoe-search"></input>
        <button
          className="fetch-button"
          //when button click, fetch, update state with data...
          onClick={fetchData}
        >
          Search For Shoes
        </button>
      </p>
      <p className="shoe"></p>
    </div>
  );
};

export default Search;
