import React, {useState, useEffect} from 'react'
import Axios from 'axios';

export const Pizza = () => {
  const[pizzaScore, setPizzaScore] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8080/getfood').then((response) =>{
      setPizzaScore(response.data)
    })
  }, [])
  

  
  return (
    <div>
      {pizzaScore.map((rest) => {
        if (rest.cuisine === 'Pizza'){
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
