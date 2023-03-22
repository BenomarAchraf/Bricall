import React, { useEffect } from 'react'
import "./Component0.css"
const Introcatalogue = ({val , setVal ,Cat, setEnt}) => {

  useEffect(()=>{
     if(val!=""&&Cat!="Categories") setEnt(1);
  },[val])

  return (
    <div className='intraCat'>
        <p className='Categories'>
        {Cat}
        </p>
        <div className='ligne'>
        </div>
        <p className='introCat'>
        Subscribe to learn about new product features, the latest in technology, solutions, and updates.
        </p>
        <div className="Research">
        <input  type="text" id ="" name="" value={val} placeholder="Enter name of Blog"  onChange={(e)=>setVal(e.target.value)} />
	    <button type="" onClick={()=> {
        setVal(val)}} > Research</button>
        </div>
    </div>
  )
}

export default Introcatalogue