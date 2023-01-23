import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import UserData from "./store/UserData";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const App = () => {
  return (
    <Provider store={UserData}>
      <Home />
    </Provider>
  );
};

export default App;
