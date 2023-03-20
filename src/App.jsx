import { BrowserRouter  } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Login from  "./components/login/Login.jsx";
import Register from "./Components/register/Register.jsx"
import TechnicienProfile from "./Components/Technicien-profile/TechnicienProfile";
import WorkDetails from "./Components/WorkDetails/WorkDetails";
import AddCategory from "./Components/addCategory/addCategory";



function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route  path="/login" element={ <Login /> }/>  
          <Route  path="/register" element={ <Register /> }/> 
          <Route  path="/profile" element={ <TechnicienProfile /> }/> 
          <Route  path="/addwork" element={ <WorkDetails/> }/> 
          <Route  path="/addcategory" element={ <AddCategory/> }/> 


          
      </Routes>
  </BrowserRouter>
    </div>      
  );
}

export default App;