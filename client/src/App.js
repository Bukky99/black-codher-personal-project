import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//import data from "./models/trainers.json";
import "./App.css";
import Navbar from "./Components/Navbar";
//import Trainer from "./Components/Trainer";
import WishList from "./Pages/WishList";
import Login from "./Pages/Login";
import Search from "./Components/Search";

// SERVICES

const App = () => {
  const [name, setName] = useState("Bukky");
  const [shoes, setShoes] = useState(null);

  return (
    <BrowserRouter>
      <Route
        path="/"
        render={() => (
          <React.Fragment>
            <Navbar />
            <Login />
          </React.Fragment>
        )}
      />

      {/*<Route
        exact
        path="/Home"
        render={() => (
          <React.Fragement>
            <Navbar />
            <Login />
          </React.Fragement>
        )}
        />*/}

      <Route
        path="/WishList"
        render={() => (
          <React.Fragment>{/*<WishList name={name} />*/}</React.Fragment>
        )}
      />

      <Route
        path="/sneakerSearch"
        render={() => (
          <React.Fragment>
            <Search />
          </React.Fragment>
        )}
      />

      <Route
        path="/login"
        render={() => (
          <React.Fragment>
            <Login />
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
