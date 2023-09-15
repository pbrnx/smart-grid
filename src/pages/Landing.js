import React from 'react';
import '../styles/Landing.css';
import '../images/index.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Saibamais = styled(Link) `
  background-color: #ffd900;
  color: #000000; 
  border: none;
  padding: 10px 20px; 
  font-size: 150%;
  font-weight: 700; 
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;  
  text-decoration: none;
  transition: background-color 0.3s ease;
 


&:hover{ 
  background-color: #000000;
  color: #ffffff; 
  font-size: 165%;
  transition: font-size 0.3s ease;
}

&:not(:hover){
  transition: font-size 0.2s ease;
  font-size: 150%;
}
`;


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
      <img className="box" src={require('../images/index.png')} alt="Imagem Smart Grid" />
    </div>
  );
}

export default Landing;