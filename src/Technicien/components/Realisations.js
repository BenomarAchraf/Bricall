import React from 'react';
import { FaTools } from 'react-icons/fa';
import './Realisations.css';
import section from "../../Assets/Images/section2.png"
import section2 from "../../Assets/Images/section2'.png"
import { RealisationsList } from './RealisationsList';
import RealisationItem from './RealisationItem';
import RealisationComponent from './RealisationComponent';
function Realisations({id, image, name}) {
    return (
      <div className="menu">
        <img className="menu-section" src={section} alt="" />
        <h1 className="menuTitle1" ><FaTools/></h1>
      <h1 className="menuTitle2">Découvrez mes réalisations</h1>
      <div className="menuList">
        
        </div>
        <img className="section2" src="{section2}" alt="" />
        </div>
  );
}

export default Realisations;