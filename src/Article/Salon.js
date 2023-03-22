import React ,{useEffect, useState} from 'react'
import "./Salon.css"
import Selected from "../Assets/Images/lr.webp"
import { ImDownload3 as Download , ImShare2 as Share , ImLink as CopyLink} from "react-icons/im";
import {BsFillCaretDownFill as DownF} from "react-icons/bs"
import CommentBox from './CommentBox';
import SSug from './SliderSug/SSug';
import { Data } from '../Livingroom/Slider/Data';
const Salon = ({user,Index, Realisation}) => {
    const [ShowComments,setShowComments]=useState(true)
    useEffect(()=>{
        console.log(Index);
        console.log(Realisation);
    },[])
  return (
    <div className='salon'>
        <div className='Card'>
            <img src={Data[Index]} className='Selected' alt="" />
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
                    "{Realisation.titre}" By  <a href='' className='Namep'>{Realisation.user.username}</a>  
                </div>
                <div className='Descriptionlr Amin'>
                {Realisation.description}
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