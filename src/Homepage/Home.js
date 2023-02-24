import React, { useEffect, useState } from "react";
import "./Home.css"
import Image from "../Assets/Images/Rectancle-1.svg"
import Card from "../Assets/Images/Card1.svg"
import Fleche from "../Assets/Images/Fleche.svg"
import Introcatalogue from "./Component0/introcatalogue"
import image from "../Assets/Images/Provide.svg"
import Join from "./Component1/Join";
import { data } from "./data";
import "@fontsource/poppins";
const Home = () => {

        const [Data, setData] = useState(data);
        const [val, setVal] = useState('');
        return (
            <>
            <div className = 'Home' >
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
                <Introcatalogue val = { val } setVal = { setVal } /> 
                <div className = "Catalogues" > 
                    {Data.map((item, i) => {
                        const { url, text } = item;
                        return ( 
                            <div key = { i } className = "card" > 
                                { url } 
                                <span className = "type" > 
                                    { text } 
                                </span> 
                            </div>)

                        })} 
                </div>
                <div className = "Join" >
                    <Join />
                    <img className = 'Provide' src = { image } alt = '' />
                </div> 
            </div>
            </>

            )
        }
        export default Home;

        /*
            <>
            <div className = 'Home' >
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
                <Introcatalogue val = { val } setVal = { setVal } /> 
                <div className = "Catalogues" > 
                    {Data.map((item, i) => {
                        const { url, text } = item;
                        return ( 
                            <div key = { i } className = "card" > 
                                { url } 
                                <span className = "type" > 
                                    { text } 
                                </span> 
                            </div>)

                        })} 
                </div>
                <div className = "Join" >
                    <Join />
                    <img className = 'Provide' src = { image } alt = '' />
                </div> 
            </div>
            </>

        */