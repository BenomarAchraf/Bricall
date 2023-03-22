import React, { Fragment, useState } from "react";
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

  const [Cat , setCat]=useState("Categories");
  const [Index,setIndex]=useState(0);
  const [Realisation, setRealisation]=useState({})

  return (
    <BrowserRouter>
      <Navbar setCat={setCat}/>
      <Routes>
      <Route exact path="/Categories/*" element={<Lr Cat={Cat} setCat={setCat} Index={Index} setIndex={setIndex} setRealisation={setRealisation}/>}></Route>
      <Route exact path="/Categories" element={<Home Cat={Cat} setCat={setCat}/>}></Route>
      <Route exact path="/test" element={<Test user={user}/>}></Route>
      <Route exact path="/Categories/:Cat/:Index" element={<Salon Cat={Cat} Index={Index} Realisation={Realisation}/>}></Route>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Main;
