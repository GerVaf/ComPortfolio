import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import Submit from "./pages/Submit";
import Submission from "./components/Submit/Submission";

const App = () => {
  return (
    <div className="flex flex-col scrollbar-thin">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/submission" element={<Submission />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
