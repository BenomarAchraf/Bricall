import React from 'react'
import join from "../../Assets/Images/Ellipse.png"
import join1 from "../../Assets/Images/Join1.svg"
import "./Join.css"
const Join = () => {
    return ( 
<div>
    <div className = 'images' >
        <img className = 'Provide' src = { join } alt = '' />
        <img className = 'Provide1' src = { join1 } alt = '' />
    </div> 
    <div className = '' >
        <span className = '' >
            Provide a helping hand 
        </span> 
        <span className = '' >
            We can’ t make it alone.We need your help.Together we can bring a big change. 
        </span> 
        <button className = '' >
            Join Us Now 
        </button>
    </div>

</div>

        
    )
}

export default Join

/*
<div>
    <div className = 'images' >
        <img className = 'Provide' src = { join } alt = '' />
        <img className = 'Provide1' src = { join1 } alt = '' />
    </div> 
    <div className = '' >
        <span className = '' >
            Provide a helping hand 
        </span> 
        <span className = '' >
            We can’ t make it alone.We need your help.Together we can bring a big change. 
        </span> 
        <button className = '' >
            Join Us Now 
        </button>

    </div>

</div>
*/