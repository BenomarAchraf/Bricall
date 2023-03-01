import React from 'react'
import "./Subscribe.css"
import { FaFacebookF as Ai,
    FaLinkedinIn as Linkedin } from "react-icons/fa";
import {
  BsInstagram as Instagram,
  BsTwitter as Twitter,

} from "react-icons/bs";
const Subscribe = () => {
  return (
    <div className='sb'>
        <div className='subs'>
            <p>Subscribe to our Social Media</p>
            <div className='icons' >
                <Ai className="icon" />
                <Instagram className="icon" />
                <Twitter className="icon" />
                <Linkedin className="icon" />
            </div>
        </div>
    </div>

  )
}

export default Subscribe