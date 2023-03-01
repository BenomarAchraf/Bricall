import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Realisations.css"


const ContactLink = () => {
 
  return (
      <div >
        <div className="evaluate"><h2 >Contactez-moi </h2>
              <h3>Si vous avez besoin d'une prestation </h3>
              <Link to="/contact">
                <button>Follow the link</button>
              </Link>
</div>
          
    </div>
  );
};

export default ContactLink;