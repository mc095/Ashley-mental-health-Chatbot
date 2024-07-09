import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Phi3 from "./components/Home/Phi_3";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Preloader load={load} />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phi3" element={<Phi3 />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;