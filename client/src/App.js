import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Trainer from "./Components/Trainer";
import WishList from "./Pages/WishList";
import Login from "./Pages/Login";

// SERVICES

const App = () => {
  const [name, setName] = useState("Bukky");
  return (
    <BrowserRouter>
      <Route
        path="/"
        render={() => (
          <React.Fragment>
            <Header />
          </React.Fragment>
        )}
      />

      <Route
        exact
        path="/Home"
        render={() => (
          <React.Fragement>
            <Header />
            <Login />
          </React.Fragement>
        )}
      />

      <Route
        path="/WishList"
        render={() => (
          <React.Fragment>
            <WishList name={name} />
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
