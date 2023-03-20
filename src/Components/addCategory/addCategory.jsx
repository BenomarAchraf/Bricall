
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import "./addcategory.css"


const AddCategory = (props) => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        console.log("test")
        e.preventDefault();
    
        try {
          const response = await axios.post("/api/v1/profile", { name });
          console.log(response.data);
          navigate.push(`/profile/${response.data.id}`); // Redirect to category page
        } catch (error) {
          console.log(error);
        }
      };
      return (

        <div className="">
          <h1 className="categorytitle">Add Category</h1>
          <h2 className="categorysubtitle">If You Woulk Like to Add A special category !</h2>
          <div className="category-container">
            <div>
              <label className="categorylabel">Name</label>
              <input
                type="text"
                className="categoryinput"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <button className="categorysubmitbutton" onClick={handleSubmit}> Submit</button>

            </div>
            </div>
            );

}
export default AddCategory;