import React from 'react';
import Infos from './components/Info'
import TechnicianProfile from './components/TechnicianProfile'

import Realisations from './components/Realisations'
import Realisation from './components/RealisationComponent'
import Rating from './components/Rating'
import ContactLink from './components/ContactLink'

import '../Contact/Contact.css'
const Technicien = () => {
  
  return (
    <div>
      <TechnicianProfile></TechnicianProfile>
      <Realisation></Realisation>
      <ContactLink></ContactLink>
      <Rating></Rating>
    </div>
  );
};

export default Technicien;