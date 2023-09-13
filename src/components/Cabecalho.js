import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';





const Cabecalho = () =>{
  return (
    <>
      <header>
        <nav>
          <ul className="desktop-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to='nosso-projeto'>Nosso projeto</Link></li>
            <li><Link to='/cadastro'>Cadastre-se</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Cabecalho;
