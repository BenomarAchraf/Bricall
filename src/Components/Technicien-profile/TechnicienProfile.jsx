import React  , { useState,useEffect}  from "react";
import { data } from "./data";
import "./TechnicienProfile.css";
import technicienprofile from "../../assets/technicienprofile.png";
import category6 from "../../assets/category6.png";
import { useNavigate } from "react-router-dom"
import AuthService from "../../services/auth.service";



const  TechnicienProfile= ({donnes,setDonnes})=>{
 const  [daata,setData] = useState(data);
 useEffect(()=>{
  console.log(donnes);
  console.log(daata);
  console.log({...daata,donnes})
  {donnes &&   setData([...daata,donnes])}
  console.log([...daata,donnes]);

  //const achraf={ "image" :donnes.image ,"titre" : donnes.titre}
  //console.log(achraf);
  //setData({...daata,achraf})
 // console.log({...daata,achraf});

 },[donnes])
 

    return (
        <div className="profile1-container">
          <div className="firstrow">
            <h1 className="profile-name" 
 >My Achievements</h1>
            <button className="profile-button" >
            <a href="/addwork
            " >  <p className="addworktext"> Add Work</p></a>

              
             </button>
          </div>
          <div className="profile-grid">
           <div className="map0">
           <div className="map">
              {
                
                daata?.map((item,i)=>{
                const {image,titre}=item;
                return (
                  <div key={i} className="cle">
                    
                      <img  className ="picture" src={image} alt="Image 2"  />
                    
                  <p className="legend">{titre}</p>

                    </div>
                )
                })
              }
</div>

           </div>
           
          </div>
        </div>
      );

}
/*
 <div className="profile-grid-item">
              <img src={category1} alt="Image 1" />
              <p>Legend 1</p>
            </div>
            <div className="profile-grid-item">
              <img src={category2} alt="Image 2" />
              <p>Legend 2</p>
            </div>
            <div className="profile-grid-item">
              <img src= {category3} alt="Image 3" />
              <p>Legend 3</p>
            </div>
            <div className="profile-grid-item">
              <img src={category4} alt="Image 4" />
              <p>Legend 4</p>
            </div>
            <div className="profile-grid-item">
              <img src={category5} alt="Image 5" />
              <p>Legend 5</p>
            </div>
            <div className="profile-grid-item">
              <img src={category6} alt="Image 6" />
              <p>Legend 6</p>
            </div>
           
*/
export default  TechnicienProfile;