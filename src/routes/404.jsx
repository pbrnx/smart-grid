import React from 'react';
import "../index.css";
import img from "../images/404.png"

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
      <div className='error-container'>
        <img src={img} alt='404' className='error' />
      </div>
    </div>
  );
};

export default NotFound;
