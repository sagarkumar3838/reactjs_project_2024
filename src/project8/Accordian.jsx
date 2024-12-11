import React, { useState } from 'react'

import "./index.css"


const Accordian = ({title , content}) => {

    const [isActive , setIsActive] = useState(false) 
  return (
    <div>
    
    
    <div className='accordion-card' key={Math.random()}>
    <div className='header' onClick={() => setIsActive(!isActive)}>
     <div>{title}</div>
     <p className="icon">{isActive ? "-" : "+"}</p>
    </div>

    <div className="content">
       {isActive && <p className='card-info'>{content}</p>}
    </div>
   </div>
    
    </div>
   
  )
}

export default Accordian
