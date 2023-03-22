import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavbarComponents from "./Navbar/NavbarComponents";
import Chat from "./Chat/Chat";
import Conversation from "./Components/Conversations/Conversation";

import Footer from "./Footer/Footer";
import Home from "./Homepage/Home";
import Lr from "./Livingroom/lr";
import Salon from "./Article/Salon";
import Test from "./Test.js";
import "@fontsource/poppins";
import Contact from "./Contact/Contact"
import Technicien from "./Technicien/Technicien"
import Login from  "./Components/login/Login.jsx";
import Register from "./Components/register/Register.jsx"
import TechnicienProfile from "./Components/Technicien-profile/TechnicienProfile.jsx";
import WorkDetails from "./Components/WorkDetails/WorkDetails.jsx";
import AddCategory from "./Components/addCategory/addCategory.jsx";

const Main = () => {
  const user={
      Name: "Achraf Benomar" ,
      Comment: "It's so good, great job !",
      Time: new Date(),
  }
  const [donnes,setDonnes]=useState();

  return (
    <BrowserRouter>
    <NavbarComponents />
      <Routes>
      <Route exact path="/Livingroom/1" element={<Salon user={user}/>}></Route>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/Categories/Livingroom" element={<Lr />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/technicien" element={<Technicien />}></Route>
      <Route exact path="/test" element={<Test user={user}/>}></Route>
        <Route exact path="/Livingroom" element={<Lr />}></Route>
        <Route  path="/login" element={ <Login /> }/>  
          <Route  path="/register" element={ <Register /> }/> 
          <Route  path="/profile" element={ <TechnicienProfile /> }/> 
          <Route  path="/addwork" element={ <WorkDetails/> }/> 
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route  path="/technicienrealisations"  element={ <TechnicienProfile donnes={donnes}  setDonnes={setDonnes}  /> }        /> 

        <Route path="/addwork" element={<WorkDetails donnes={donnes} setDonnes={setDonnes} />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Main;
