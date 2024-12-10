import React, { useState } from 'react'
import "./index.css";
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {
    const [showInput , setShowInput] = useState(false);

    const [bgColor , setBgColor] = useState("white")

    const handleChange = (e)=>{
        setBgColor("#1a1a1a")

        if(e.target.value === "container"){
            setShowInput(false)
            setBgColor("#fff")
        }
    }
  return (
    <section className='container' style={{backgroundColor: bgColor}} onClick={handleChange}>
    <h1 className='heading'> Search Bar</h1>
    {showInput ? (<input type='text' placeholder='search...'/>):(<FaSearch onClick={()=> setShowInput(true)}/>)}
    </section>
      
    
  )
}

export default SearchBar
