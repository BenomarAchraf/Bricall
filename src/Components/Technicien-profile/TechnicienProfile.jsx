import React from "react";
import "./TechnicienProfile.css";
import technicienprofile from "../../assets/technicienprofile.png";
import category1 from "../../assets/category1.png";
import category2 from "../../assets/category2.png";
import category3 from "../../assets/category3.png";
import category4 from "../../assets/category4.png";
import category5 from "../../assets/category5.png";
import category6 from "../../assets/category6.png";





export default function TechnicienProfile(){
    return (
        <div className="profile-container">
          <div className="profile-header">
            <img className="profile-photo" src={technicienprofile} alt="Profile" />
            <h1 className="profile-name">ALAOUI ANASS</h1>
            <button className="profile-button">
            <a href="/addwork
            " > Add Work</a>

              
             </button>
          </div>
          <div className="profile-grid">
            <div className="profile-grid-category">Electricité</div>
            <div className="profile-grid-category"></div>
            <div className="profile-grid-category"></div>
            <div className="profile-grid-item">
              <img src={category1} alt="Image 1" />
              <p>Legend 1</p>
            </div>
            <div className="profile-grid-item">
              <img src={category2} alt="Image 2" />
              <p>Legend 2</p>
            </div>
            <div className="profile-grid-item">
              <img src= {category3} alt="Image 3" />
              <p>Legend 3</p>
            </div>
            <div className="profile-grid-item">
              <img src={category4} alt="Image 4" />
              <p>Legend 4</p>
            </div>
            <div className="profile-grid-item">
              <img src={category5} alt="Image 5" />
              <p>Legend 5</p>
            </div>
            <div className="profile-grid-item">
              <img src={category6} alt="Image 6" />
              <p>Legend 6</p>
            </div>
           
            <button className="profile-button" >
            <a href="/addcategory
            " > Add Category</a>

              
             </button>
          
          </div>
        </div>
      );

}