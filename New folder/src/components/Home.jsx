import React from 'react'
import './Component.css'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
 const handlerClick =()=>{
    navigate("/search")
  }
  return (
       
       <div className='home container-fluid'>
        <h1>Welcome</h1>
        <h2>  Click on </h2>
        <button className='btn btn-outline-light' onClick={handlerClick}>Search </button>  
        <h5>Or <br/>Click on Search near Home </h5>
        
        <p>Here we go.</p>
       </div>
       
  )
}

export default Home
