import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Homepage/Home";
import "@fontsource/poppins";
const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Main;
