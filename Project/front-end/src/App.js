import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home2";
import Test from "./Test";
<!-- hi -->
export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Home2" element={<Home />} />
      </Routes>
    </Router>
  );
}
