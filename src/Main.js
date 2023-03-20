import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Homepage/Home";
import Lr from "./Livingroom/lr";
import Salon from "./Article/Salon";
import Test from "./Test";
import "@fontsource/poppins";

const Main = () => {
  const user={
      Name: "Achraf Benomar" ,
      Comment: "It's so good, great job !",
      Time: new Date(),
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/Livingroom/1" element={<Salon user={user}/>}></Route>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/test" element={<Test user={user}/>}></Route>
      <Route exact path="/Livingroom" element={<Lr />}></Route>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Main;
