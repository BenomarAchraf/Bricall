import React from 'react';
import Infos from './components/Info'
import Realisations from './components/Realisations'
import Rating from './components/Rating'
import ContactLink from './components/ContactLink'

import '../Contact/Contact.css'
const Technicien = () => {
  
  return (
    <div>

      <Infos></Infos>
      <Realisations></Realisations>
            <ContactLink></ContactLink>

      <Rating></Rating>
    </div>
  );
};

export default Technicien;