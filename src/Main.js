import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Homepage/Home";
<<<<<<< Updated upstream
import Lr from "./Livingroom/lr";
import "@fontsource/poppins";
=======
import Contact from "./Contact/Contact"
import Technicien from "./Technicien/Technicien"
>>>>>>> Stashed changes
const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
<<<<<<< Updated upstream
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/Categories/Livingroom" element={<Lr />}></Route>
=======
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/technicien" element={<Technicien />}></Route>
>>>>>>> Stashed changes
    </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Main;
