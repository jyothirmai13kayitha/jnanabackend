import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishlist from "./Wishlist";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;

