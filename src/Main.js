import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Homepage/Home";
import Lr from "./Livingroom/lr";
import "@fontsource/poppins";
const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/Categories/Livingroom" element={<Lr />}></Route>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Main;
