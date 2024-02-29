import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import ProdukDetail from "./pages/ProdukDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail/:id" element={<ProdukDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
