import React from 'react'
import "./Home.css"
import Image from "../Assets/Images/Rectancle-1.svg"
import Fleche from "../Assets/Images/Fleche.svg"
const Home = () => {
  return (
    <div className='Home'>
        <img className='Image' src={Image}/>
        <p className='clients'>Connecting Clients</p>
        <img className='Fleche' src={Fleche}/>
        <p className='Empoyee'>With Employees</p>
        <p className='Intro'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
        </p>
    </div>
  )
}
export default Home;