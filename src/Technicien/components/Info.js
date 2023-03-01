import React from "react";
import { Link } from "react-router-dom";
import "./Info.css"
import { FiArrowRight } from "react-icons/fi";
import BannerImage from "../../Assets/Images/déco.png"
import  BannerBackground from "../../Assets/Images/home2.png"
import Profile from "../../Assets/Images/technician2.png"
import stars from "../../Assets/Images/stars.png"

function Infos() {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Ahmed Elkantaoui          </h1>
          <img src={stars}
            style={{'width' : '250px',
              'height ': '150px',
              }} />
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corporis cumque molestiae doloremque commodi facilis iure voluptatum voluptate, aspernatur voluptas omnis esse asperiores, sit explicabo consectetur ex tenetur culpa nisi?
          </p>
          <button className="secondary-button">
            Contact me 
            <button className="secondary-button2">0655789007</button>
          </button>
        </div>
        <div className="home-image-section">
          <img className="home-image" src={Profile}/>
        </div>
     
      </div>
    </div>
  );
}

export default Infos;