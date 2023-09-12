import React from 'react';
import './Landing.css';
import './images/index.png';

function Landing() {
  return (
    <div className="box-container">
      <div className="content">
        <h1 className="titulo">Smart Grid</h1><br></br>
        <h2 className="titulo2">Construindo um futuro sustentável. <br></br> Somos a solução brilhante para a crise energética do Brasil.</h2><br></br>
        
        
        <div className="button-container">
          <button className="saiba-mais-button">Saiba Mais ⚡</button>
        </div>
      </div>
      <img className="box" src={require('./images/index.png')} alt="Imagem Smart Grid" />
    </div>
  );
}

export default Landing;
