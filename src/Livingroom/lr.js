import React , { useState }  from 'react'
import Logo22 from "../Assets/Images/Logo4.svg"
import "./lr.css"
import introlr from "../Assets/Images/Rectangle-lr1.png"
import lr from "../Assets/Images/lr3.png"
import lr1 from "../Assets/Images/lr4.png"
import lr2 from "../Assets/Images/lr5.png"
import lr3 from "../Assets/Images/lr6.png"
import lr4 from "../Assets/Images/lr7.png"
import lr5 from "../Assets/Images/lr8.png"
import Slider from './Slider/Slider'
import { FaArrowAltCircleDown as Down } from 'react-icons/fa'
import Introcatalogue from '../Homepage/Component0/introcatalogue'
const Lr = () => {
    const type="Living Room";
    const [val , setVal]=useState("");
  return (
    <div className='LR'>
        <div className='LivingBG'>
            <div  className='Introlr'>
                <img src={introlr} alt="" />
                <p>Categories</p>
            </div>
            <div>
                <Introcatalogue val = { val } setVal = { setVal } type={type} /> 
            </div>
            <div className='Animation'>
                <Down className='down' />
                <div className='Livingroom'>
                   <img src={lr} className='livr' />
                   <img src={lr1} className='livr1' />
                   <img src={lr2} className='livr2' />
                   <img src={lr3} className='livr3' />
                   <img src={lr4} className='livr4' />
                   <img src={lr5} className='livr5' />
                </div>
            </div> 
            <div className='article'>
                <div className='suggestion'>
                    <img className='Logo22' src={Logo22} alt='' />
                    <p>Suggestion For You</p>
                    <div></div>
                </div>
                <div className='articles'>
                   <Slider /> 
                </div>
            </div>
           



        </div>
    </div>
  )
}

export default Lr