import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,BarElement,Title, Tooltip, Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale, 
  BarElement, Title, Tooltip,Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend:{
      position: "top",
    },
    title:{
      display: true,
      text: "Best Chicken ever"
    },
  },
};



// export const data = {
//   labels,
//   datasets: [
//     {
//     label: ' ',
//     data: '',
//     backgroundColor: ''
//   }]
// }

export const Chickens = () => {
  const[chickenScore, setChickenScore] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8080/getfood').then((response) =>{
      setChickenScore(response.data)
    })
  }, [])

  const labels = chickenScore.map((d) => {
    return d.name
  })

  console.log(labels)

  const data = {
    labels,
    datasets: [
      {
      label: 'Burgers, Pizza, Chicken',
      data: chickenScore.map((d) => {
        return d.score}),
      backgroundColor: 'rgb(133,80,122)'
    }]
  }
  
  
  return (
    <div>
      <Bar options = {options} data = {data} />
      {/* {chickenScore.map((rest) => {
        if (rest.cuisine === 'Chicken'){
        return(
          <div>
            <h2>Name: {rest.name}</h2>
            <h2>Grade: {rest.grade}</h2>
            <h2>Score: {rest.score}</h2>
          </div>
        )
        }
      })} */}
    </div>
  )
}
