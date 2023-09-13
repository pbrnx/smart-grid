import React from 'react';
import '../styles/Landing.css';
import '../images/index.png';
import {Link} from 'react-router-dom';

function Landing() {
  return (
    <div className="box-container">
      <div className="content">
        <h1 className="titulo">Smart Grid</h1><br></br>
        <h2 className="titulo2">Construindo um futuro sustentável. <br></br> Somos a solução brilhante para a crise energética do Brasil.</h2><br></br>        
        <div className="button-container">
          <Link to='/nosso-projeto' className="saiba-mais-button">Saiba Mais ⚡</Link>
        </div>
      </div>
      <img className="box" src={require('../images/index.png')} alt="Imagem Smart Grid" />
    </div>
  );
}

export default Landing;