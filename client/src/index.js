import React from "react";
import ReactDOM from "react-dom/client";
import { PropTypes } from "react";
import Start from "./Start";
import { BrowserRouter, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Start />
  </BrowserRouter>
);
