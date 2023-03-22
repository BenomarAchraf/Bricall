
import React , {useEffect, useState} from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { dataa } from '../dataa'
import data  from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { SaveComment } from '../Services/commentaire'
import { GetRealisationCommments } from '../Services/commentaire'
import "./Coments.css"
const CommentBox = ({user,Realisation}) => {

    const [donnée , setD]=useState([])
    const [val, setVal] = useState('');
    const [showEmojis, setShowEmojis] = useState(false);
    const addEmoji = (e) => {
      let sym = e.unified.split("-");
      let codesArray = [];
      sym.forEach((el) => codesArray.push("0x" + el));
      let emoji = String.fromCodePoint(...codesArray);
      setVal(val + emoji);
    };
  
    const LgDeal=(Name)=>{
      const log=Name.split(" ");
      const logoo=(log.length>=2)?log[0].charAt(0)+log[1].charAt(0):log[0].charAt(0)+log[0].charAt(0);
      return logoo;
    }
    
    const Verifay=(Time)=>{
      if(Time==2023){
        return "";
      }
      return Time.toString()+" ";
  }
  
    const Sub=async(val)=>{
       
      const commentaire=val;
      const realisation={...Realisation};
      const Dd=new Date().toString().split(" ");
      const time=Dd[2]+" "+Dd[1]+" "+Verifay(Dd[3])+"at "+Dd[4];
      const nev={
        time,commentaire,realisation, user
      }
      console.log(Realisation);
      setD([...donnée , nev])
      SaveComment(nev)
      //{Realisation&&&&setD([...donnée , nev])}
        
        console.log(nev)
        setVal("")
  
    }
    const Fetch=async()=>{
      const don=await GetRealisationCommments(Realisation.id);
      console.log(don);
      {don&&setD(don)};

    }
  
    useEffect(()=>{
       Fetch();
    },[])

    return (
      <div className='boxx'>
      
      <div className='bc' >
        
          {donnée.map((item, i)=>{
              const {time,commentaire, user}=item;
              const Dd=time.split(" ");
              const Time=Dd[0]+" "+Dd[1]+" "+Verifay(Dd[2])+"at "+Dd[3];
              console.log(time)
              return (
                <div key = { i } className="Comment" >
                  <div className='Logoo'> 
                    <p className='lgo'>{LgDeal(user.username)}</p>
                  </div>
                  <div className='Cm'>
                    <div className='Name'>
                        {user.username}
                    </div>
                    <div className='Dd'>
                        {Time}
                    </div>
                    <div className='cc'>
                        {commentaire}
                    </div>
                  </div>
                </div>
                )
                 
              
          })}
      </div>
      <div className='putc'>
        <input  type="text" id ="" name="" value={val} placeholder="Enter name of Blog"  onChange={(e)=>setVal(e.target.value)} />
          <button type="" onClick={()=> Sub(val)} > Post </button>
        <button className='btn' onClick={() => setShowEmojis(!showEmojis)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={showEmojis? "icone1" : "icone"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {showEmojis && (
          <div className='posemoji'>
            <Picker data={data} onEmojiSelect={addEmoji} />
          </div>
          
        )}
        <div className={showEmojis ? 'Logoo2' : 'Logoo1'}> 
          <p className='lgo1'>{LgDeal(user.username)}</p>
        </div>
        </button>
      </div>
  
  
      </div>
    )
  }

export default CommentBox
/*
import React , {useState} from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const Test = () => {
  const [loged, setLoged]=useState(true)
  const data =[
    {
      userId: '02b',
      comId: '017',
      fullName: 'Lily',
      userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
      text: 'I think you have a point🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
      replies: []
    }
  ]

  return (
    <div className='test'>
      <CommentSection
        currentUser={loged ? {
          currentUserId: '01a',
          currentUserImg:
            'https://ui-avatars.com/api/name=Riya&background=random',
          currentUserProfile:
            'https://www.linkedin.com/in/riya-negi-8879631a9/',
          currentUserFullName: 'Riya Negi'
        }:null}
        logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/'
        }}
        commentData={data}
        onSubmitAction={(data
         
        ) => console.log('check submit, ', data)}
        currentData={(data) => {
          console.log('curent data', data)
        }} 
     
      />
    </div>
  )
}

export default Test
*/