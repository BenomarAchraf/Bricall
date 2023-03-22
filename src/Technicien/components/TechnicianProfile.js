import { useState, useEffect } from 'react';
import stars from "../../Assets/Images/stars.png"
import  BannerBackground from "../../Assets/Images/home2.png"
import "./Info.css"
import Profile from "../../Assets/Images/technician2.png"

function TechnicianProfile() {
  const [technicianData, setTechnicianData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/v1/technician/1`) 
      .then(response => response.json())
      .then(data => setTechnicianData(data))
      .catch(error => console.error(error));
  }, []);

  if (!technicianData) {
    return <div>Loading technician data...</div>;
  }

  const { username, email, phoneNumber } = technicianData;

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">{username}</h1>
          <img
            src={stars}
            style={{ width: '250px', height: '150px' }}
            alt="Technician's rating"
          />
          
          <p className="primary-text">{email}</p>
          <button className="secondary-button">
            Contact me 
            <button className="secondary-button2">{phoneNumber}</button>
          </button>
        </div>
        <div className="home-image-section">
          <img className="home-image" src={Profile} alt="Technician's profile" />
        </div>
      </div>
    </div>
  );
}
export default TechnicianProfile;