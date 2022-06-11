import React from "react";
import Connection from "./Connection";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Inscription from "./Inscription";
import Hub from "./Hub";
function Start() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/Connection" element={<Connection />} />
      </Routes>
    </div>
  );
}

export default Start;
