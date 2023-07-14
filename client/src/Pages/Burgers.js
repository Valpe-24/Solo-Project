import React, {useState, useEffect} from 'react'
import Axios from 'axios';

export const Burgers = () => {
  const[burgerScore, setBurgerScore] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8080/getfood').then((response) =>{
      setBurgerScore(response.data)
    })
  }, [])
  
  

  
  return (
    <div>
      {burgerScore.map((rest) => {
        if (rest.cuisine === 'Burgers'){
        return(
          <div>
            <h2>Name: {rest.name}</h2>
            <h2>Grade: {rest.grade}</h2>
            <h2>Score: {rest.score}</h2>
          </div>
        )
        }
      })}
    </div>
  )
}

