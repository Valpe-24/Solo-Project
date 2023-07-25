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

const options = {
  responsive: true,
  plugins: {
    legend:{
      position: "top",
    },
    title:{
      display: true,
      text: "Chicken by grade"
    },
  },
};


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
      label: 'Chicken',
      data: chickenScore.map((d) => {
        return d.grades[2].score}),
      backgroundColor: 'rgb(133,80,122)'
    }]
  }
  
  
  return (
    <div>
      <div style = {{width:'80%', height: '50%'}}>
        <Bar options = {options} data = {data} />
      </div>

      <div style = {{width:'80%', height: '50%'}}>
        <Bar options = {options} data = {data} />
      </div>
    </div>
  )
}
