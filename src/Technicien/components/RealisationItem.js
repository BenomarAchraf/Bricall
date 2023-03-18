import React from "react";
import './Realisations.css';
import { Link } from 'react';

function RealisationItem({id, titre, description, image }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 > {titre} </h1>
      <p>{description}</p>
    </div>
  );
}

export default RealisationItem;