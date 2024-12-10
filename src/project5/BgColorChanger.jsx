import React, { useState } from 'react'
import "./style.css"

const BgColorChanger = () => {
    const [backgroundColor , setBackgroundColor] = useState("white");
    const [textColor , setTextColor] = useState('#1b1b1b')
    const [buttonStyle , setButtonStyle] = useState("#19322e")
     const handleClick = () =>{
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#75b031" : "#1b1b1b")
        setButtonStyle(backgroundColor === "white" ? "#75b031" : "white");
     }
  return (
    <div style={{backgroundColor , color: textColor}}>
    <button onClick={handleClick} style={{buttonStyle, color: textColor, border: `2px solid ${textColor}`}} className='color1'>{backgroundColor == '1b1b1b' ? "#19322e" : "white theme"}</button>

    <section className="content">
     <h1>Welcome Here Guys <br />....</h1>
    </section>
      
    </div>
  )
}

export default BgColorChanger
