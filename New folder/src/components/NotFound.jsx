import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate =useNavigate();
  const handlerBack=()=>{
     navigate("/")
  }

  return (<div className='container text-center  fs-1 t-5'>404 - Not Found <br/>
  <button className='btn-sm btn-primary' onClick={handlerBack}>BACK</button>
  </div>)
};

export default NotFound;