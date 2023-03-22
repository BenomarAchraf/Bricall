import { BrowserRouter  } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Login from  "./components/login/Login.jsx";
import Register from "./Components/register/Register.jsx"
import TechnicienProfile from "./Components/Technicien-profile/TechnicienProfile";
import WorkDetails from "./Components/WorkDetails/WorkDetails";
import { data } from './Components/Technicien-profile/data.jsx';
import React , {useState} from "react";
import Profile from './Components/Profileinformation/profileinformation.jsx';


function App() {
const [donnes,setDonnes]=useState();
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register />} />

          <Route  path="/login" element={ <Login /> }/>  
          <Route  path="/register" element={ <Register /> }/> 
          <Route  path="/profile" element={ <Profile/> }/> 


          <Route  path="/technicienrealisations"  element={ <TechnicienProfile donnes={donnes}  setDonnes={setDonnes}  /> }        /> 

          <Route  path="/addwork" element={ <WorkDetails donnes={donnes}  setDonnes={setDonnes}/> }/> 


          
      </Routes>
  </BrowserRouter>
    </div>      
  );
}

export default App;