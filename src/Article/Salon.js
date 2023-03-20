import React ,{useState} from 'react'
import "./Salon.css"
import Selected from "../Assets/Images/lr.webp"
import { ImDownload3 as Download , ImShare2 as Share , ImLink as CopyLink} from "react-icons/im";
import {BsFillCaretDownFill as DownF} from "react-icons/bs"
import CommentBox from './CommentBox';
import SSug from './SliderSug/SSug';
const Salon = ({user}) => {
    const [ShowComments,setShowComments]=useState(true)
  return (
    <div className='salon'>
        <div className='Card'>
            <img src={Selected} className='Selected' alt="" />
            <div className='SelectedInfo'>
                <div className='icons12'>
                   
                        <Download className='ic' />
                        <Share className='ic' />
                        <CopyLink className='ic' />
                        <button className='Save'>
                        Save 
                        </button>
                    <div className='icall'></div>
                 </div>
                <div  className='TitleLr'>
                    "Minimalist Elegance: The Modern Living Room Design" By  <a href='' className='Namep'>Roban Marox</a>  
                </div>
                <div className='Descriptionlr Amin'>
                A modern living room is characterized by a minimalist design featuring clean lines and neutral colors. Furniture is typically low to the ground, made of sleek materials such as leather, metal, or high-gloss wood. 
                </div>
                <div className='Commentaires'>
                            Comments <DownF className={ShowComments?"DownF":"DownF1"} onClick={()=>setShowComments(!ShowComments)}/>
                
                </div>

            </div>
        </div>
        <div className='CommentChat'>
        {
                    ShowComments&& <div className='chatbox'> 
                        < CommentBox  user={user}   />
                    </div>
                }
        </div>    

        <div className='SuggEl'>
            <p className='MSFL'> More Suggestion For You </p>
            <SSug className="positionSS" />
         </div>
    </div>
  )
}

export default Salon