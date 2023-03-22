import React, { useState } from "react";
import "./workdetails.css";
import Creatable from "react-select/creatable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import  { useEffect ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import realisation_service from "../../services/realisation-service";


const WorkDetails = (props) => {
 const {donnes,setDonnes}=props;
  const [CurrentUser, setCurrentUser] = useState(undefined);
  const [titre, setTitre] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();

  const [description, setDescription] = useState();
 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const ref=useRef(null);
  useEffect(() => {
    const user1 = AuthService.getCurrentUser();

    if (user1) {
      setCurrentUser(user1);
    }
  }, []);
  const handleAddRealisation = (e) => {
    e.preventDefault();
    const userId = CurrentUser.id;
    console.log(userId);
    realisation_service.addRealisation(titre, description, category,image,CurrentUser).then(
      (response) => {
        
        console.log(response);
        navigate("/technicienrealisations");
        setDonnes({image,titre})
      },
      (error) => {
        console.log(error);
        setError(error.message);
      }
    );
    console.log("addRealisation");
  };

 
  return (
    <div className="workpage-container">
       {error && (
        <div className="alert alert-danger">
          <strong>{error}</strong>
        </div>
      )}
      <h1 className="worktitle">Add Work</h1>
      <h2 className="worksubtitle">Submit your work here</h2>
      <div className="workform-container">
        <div>
          <label className="worklabel">Titre</label>
          <input
          id="titre"
            type="text"
            className="workinput"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </div>

        <div>
        <label className="worklabel">Category</label>
          <input
          id="category"
            type="text"
            className="workinput"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
         
        </div>
      <div className="exception" >
      <label  className="worklabel">
    
          Upload image    
 </label>
          <input
        type="text"
        id="image"
        accept="image/*"
        className="workinput" 

        required
        onChange={(e) => setImage(e.target.value)}
       
      />
       
        
      </div>

      <div >
        <label className="worklabel">description</label>
        <input
          id="description"
            type="text"
            className="workinput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            
          />
        
        
      </div>

      

      <div >
        <button className="worksubmitbutton" onClick={handleAddRealisation}>Submit</button>
      </div>
    </div>
  </div>


)
}

  export default WorkDetails;
