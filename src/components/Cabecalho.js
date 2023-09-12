import React from 'react';
import '../App.css';


function Cabecalho() {
  return (
    <>
      <header>
        <nav>
          <ul className="desktop-menu">
            <li><a href='/Landing'>Home</a></li>
            <li><a href="#">Nosso projeto</a></li>
            <li><a href="#">Cadastre-se</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Cabecalho;
