import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePageApp/App"; // Adjust paths as needed
import Contact from "./ContactPageApp/App"; // Adjust paths as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
