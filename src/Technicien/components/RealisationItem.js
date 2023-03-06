import React from "react";
import './Realisations.css';
import { Link } from 'react';

function RealisationItem({id, image, name }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 > {name} </h1>
    </div>
  );
}

export default RealisationItem;