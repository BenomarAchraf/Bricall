import React , {useState} from 'react'
import { Data } from './Slider/Data'
import "./lr.css"
const Articles = () => {
    const [data , setdata]=useState(Data);

    return (
        <div className='items'>
            {data.map((item,i)=>{
            const { url , Name , role}=item;
             {
                return (
                  <div key={i} className="Element">
                    {url}
                    <div className='transparent'>
                        <div>
                            <p className='infos'>{Name}</p>
                            <p className='infos1'>{role}</p>                        
                        </div>
                        <div className='Achraf'></div>
                    </div>
                    
                  </div>
                );
              }
            
            
        })}
        </div>
    )
}

export default Articles