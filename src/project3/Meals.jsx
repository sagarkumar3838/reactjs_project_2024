import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style.css"



const Meals = () => {

  const [items , setItems] = useState([]);

  useEffect(()=>{
    axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res)=> {
      setItems(res.data.meals);
    })
    .catch((err)=> {
      console.log(err);
    })
  }, [])

  const itemsList = items.map(({strMeal , strMealThumb , idMeal}) => {
    return(
      <section className="card">
        
        <img src={strMealThumb} alt="strMeal" srcset="" />
        <section className="content">
          <p>{strMeal}</p>
          <p>🆔{idMeal}</p>
        </section>
      </section>
    )
  })
  return (
     <div className='wrap_container'>
     <div className='wrap container'>
     <div className='box upper'><h1>MEAL JUNCTION</h1></div>
     <div className=' box items-container'>{itemsList}</div>
     </div>
    
   </div>
 )
   
    
}

export default Meals
