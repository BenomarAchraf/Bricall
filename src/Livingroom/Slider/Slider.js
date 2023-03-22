import React , {useEffect , useState} from 'react'
import { DataSlider } from './DataSlider'
import "./slider.css"
const Slider = () => {
    const [data , setdata]=useState(DataSlider);
    const [index, setIndex]=useState(0);
    const [tab , setTab]=useState([index , (index+1)%6 , (index+2)%6]);

    useEffect(()=>{
        setTimeout(()=>{
            setIndex((index+1)%6);
            setTab([index , (index+1)%6 , (index+2)%6])
        },5000)
    })
    
    const Contain=(i)=>{
        let j=0;
        for(j=0; j<3 ; j++ ){
            if(tab[j]==i) return true;
        }
        return false;
    }
  return (
    <div className='Slider'>
        {data.map((item,i)=>{
            const { url , Name , role}=item;
            if (Contain(i)) {
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

export default Slider