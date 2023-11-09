import React from 'react';
import '../styles/Landing.css';

import { Saibamais } from '../components/Saibamais';
import MyCarousel from '../components/Carousel';

function Landing() {
  return (
    <div className="box-container">
      <div className="content">
        <h1 className="titulo">Smart Grid</h1><br></br>
        <h2 className="titulo2">Construindo um futuro sustentável. <br></br> Somos a solução brilhante para a crise energética do Brasil.</h2><br></br>        
        <div className="button-container">
          <Saibamais to='/nosso-projeto' className="saiba-mais-button">Saiba Mais ⚡</Saibamais>
        </div>
      </div>
      <MyCarousel />
    </div>
    
  );
}

export default Landing;