import React from 'react'
import "./Footer.css"
import Subscribe from "./Subscribe/Subscribe"
import Footer1 from './footer/footer'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='Subscribe'>
          < Subscribe />
      </div>
      <div className='footer1'>
          <Footer1 />
      </div>
    
    </div>
  )
}

export default Footer;