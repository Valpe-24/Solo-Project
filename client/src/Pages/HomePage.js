import React from "react";
import '../Styles/HomePage.css'
import { useNavigate } from 'react-router-dom'


export const HomePage = () => {
  const navigate = useNavigate()

  const chicken = () =>{
    navigate('/chicken')
  }

  const pizza = () =>{
    navigate('/pizza')
  }

  const burger = () =>{
    navigate('/burgers')
  }
  

 
  return (
    <div className="wrapper">
      <div className="center">
        <h1>Data Visualization app</h1>
        <h2>Where to get the best Chicken, Pizza and Burgers</h2>

        <div className="buttons">
          <button className="home-button" onClick={chicken}>
            Best Chicken 🍗
          </button>
          <button className="home-button" onClick={pizza}>Best Pizza 🍕</button>
          <button className="home-button" onClick={burger}>Best Burgers 🍔</button>
        </div>
      </div>
    </div>
  );
};