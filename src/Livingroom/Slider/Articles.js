import React , {useState , useEffect} from 'react'
import { Data } from './Data'
import "../lr.css"
import { GetRealisationsCategorie , GetRealisationsByresearch } from '../../Services/realisation'
import { Link } from "react-router-dom";
import Salon from '../../Article/Salon';

const Articles = ({Cat , setCat , Ent,val, setIndex,setRealisation}) => {
    const [data , setdata]=useState(Data);
    const [ok,setOk]=useState(false);
    const [ok1,setOk1]=useState(false);
    const Fetch=async(Cat)=>{
      console.log(val)
      if(val!=""){
        const données1=await GetRealisationsByresearch(val,Cat);
        {données1&&setdata(données1)}
        {données1&&setOk(true)}
      }
      else{
        const données=await GetRealisationsCategorie(Cat).then((res)=>res.data);
      {données&&setdata(données)}
      {données&&setOk(true)}
      }
      //const Api="http://localhost:8081/api/categories/"+Cat;
      //const resultats=await fetch("http://localhost:8081/api/categories/"+Cat);
		  //const données= await resultats.json();
      


      //<img className='Sug' src={Sug} />
    }

    useEffect(()=>{
      
      Fetch(Cat);
    
    },[])
    useEffect(()=>{
      
      Fetch(Cat);
    
    },[val])
    useEffect(()=>{
      if(data.length+9<=Ent*9||Cat==="Categories") setOk1(true);
      else{
        setOk1(false);
      }
      console.log(ok1);
    },[Ent])
    return (
        <div className='items'>
            {data.map((item,i)=>{
            const { image , user }=item;
 
            let j=(Ent-1)*9;            
            if(j<=i&&i<9+j){
                return (
                  <Link className='pp' onClick={()=>{
                    setRealisation(item);
                    setIndex(i)}} to={`/Categories/${Cat}/${i}`} children={<Salon/>}>
                  <div key={i} className="Element">
                    <img src={Data[i]} className='Sug'  />
                    <div className='transparent'>
                        <div>
                            <p className='infos'>{ok&&user.username}</p>
                            <p className='infos1'>{Cat}</p>                        
                        </div>
                        <div className='Achraf'></div>
                    </div>
                    
                  </div>
                  </Link>
                );
              }
         
        })}
        {ok1&& 
        <div className="">
            <p className='NoMore'> Ther's no more in {Cat}</p>
          </div>
        }
        </div>
    )
}

export default Articles