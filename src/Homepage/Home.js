import React, { useEffect, useState } from "react";
import "./Home.css"
import Image from "../Assets/Images/Rectancle-1.svg"
import Card from "../Assets/Images/Card1.svg"
import Fleche from "../Assets/Images/Fleche.svg"
import Introcatalogue from "./Component0/Introcatalogue"
import image from "../Assets/Images/Provide.svg"
import Join from "./Component1/Join";
import  Data  from "./Data";
import "@fontsource/poppins";
const Home = ({Cat, setCat}) => {
        const [dataa, setData] = useState([]);
        const [val, setVal] = useState('');
        const type="Categories";
        /*const fetchData = async() => {
            const { data } = await Data();
            setData(data);
            console.log(dataa)
          };
          useEffect(() => {
          fetchData();
        }, []);
*/

        return (

            <>
            <div className='Home'>

                <img className = 'Image' src = { Image }/>
                <p className = 'clients' > 
                    Connecting Clients 
                </p> 
                <img className = 'Fleche' src = { Fleche }/> 
                <p className = 'Empoyee' > 
                    With Employees 
                </p> 
                <p className = 'Intro' >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat. 
                </p> 
            </div> 
            <div className = 'Catalogue' >
                <Introcatalogue val = { val } setVal = { setVal } Cat={Cat} /> 
                <div className = "Catalogues" > 
                        <Data val = { val } Cat={Cat} setCat={setCat} />
                </div>
                <div className = "Join" >
                    <Join />
                </div> 
            </div>
            </>

            )
        }
        export default Home;

       