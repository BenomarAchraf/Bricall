import Card0 from "../Assets/Images/Card.svg"
import Card1 from "../Assets/Images/Card1.svg"
import Card2 from "../Assets/Images/Card2.svg"
import Card3 from "../Assets/Images/Card3.svg"
import { Link } from "react-router-dom";
import React , { useState , useEffect} from 'react'
import {GetCategories , GetCategoriesByresearch1} from "../Services/realisation"
import "./Home.css"
import Lr from "../Livingroom/lr";
/*
export const data = [
    {
        url: <img className='' src={Card0}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card1}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card2}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card3}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card0}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card1}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card2}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card3}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card0}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card1}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card2}/>,
        text: "Peinture",
    },
    {
        url: <img className='' src={Card3}/>,
        text: "Peinture",
    },
  ];*/
const Data=({ val ,Cat , setCat})=>{
    const [Data1 ,setData]=useState();
    const List2=[Card0, Card1,Card2,Card3];
    const fetchData = async () => {
      try {
        const { data } = await GetCategories();
    
        if(val!==""){
            const resultats=await fetch("http://localhost:8081/api/categories/categorie?research="+val);
		    const données= await resultats.json();
            console.log(données)
            setData(données)
        }
        else{
            setData(data);    
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
    
    fetchData();
    console.log(Data1)
  },[val]);
    
    return(
        <>
        {
            
        Data1?.map((item, i) => {
                        
                        return ( 
                            <Link className='pp' onClick={()=>setCat(item)} to={`/Categories/${item}`+"#"} children={<Lr/>}>
                                <div key = { i } className = "card" > 
                                <img className='' src={List2[i%4]}/>
                                <span className = "type" > 
                                    { item } 
                                </span> 
                                </div>
                            </Link>
                            )
                        
                        })}

        </>
    )
}  

export default Data;
/*

    console.log(Data1);
    const List=[];
    let i=0;
    let j=0;
    const List2=[Card0, Card1,Card2,Card3]
    for(i=0; i< Data1.length; i++){
        if(j==3) j=0;
        List.push({
            url: <img className='' src={List2[j]}/>,
            text: Data1[i],
        },)
        j++;
    }
    return List;
*/