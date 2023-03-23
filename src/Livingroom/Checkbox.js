import React from 'react'
import "./lr.css"
const Checkbox = ({ label , value , onChange}) => {
  return (
    <div >
      <label className="checkbox">
        <input className='inChec' type="checkbox" checked={value} onChange={onChange} />
        <p className='lab'>{label}</p>
      </label>
    </div>
  )
}

export default Checkbox