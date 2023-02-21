import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Main;
