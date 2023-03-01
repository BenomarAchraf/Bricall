import React from 'react'
import "./Component0.css"
const introcatalogue = ({val , setVal ,type}) => {
  return (
    <div className='intraCat'>
        <p className='Categories'>
        {type}
        </p>
        <div className='ligne'>
        </div>
        <p className='introCat'>
        Subscribe to learn about new product features, the latest in technology, solutions, and updates.
        </p>
        <div className="Research">
        <input  type="text" id ="" name="" value={val} placeholder="Enter name of Blog"  onChange={(e)=>setVal(e.target.value)} />
	    <button type="" onClick={()=> console.log(val)} > Research</button>
        </div>
    </div>
  )
}

export default introcatalogue