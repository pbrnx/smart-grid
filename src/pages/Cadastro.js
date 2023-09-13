import React from 'react';
import '../styles/Form.css';


function Cadastro() {
  return (
    <>
    <h1>Cadastre-se e faça parte do nosso projeto!</h1>
    <form>
        <label htmlFor="loginUsername">Nome:</label>
        <input type="text" placeholder='Digite seu nome completo'required/>
        <br/>
    
        <label htmlFor="loginPassword">Email:</label>
        <input type="text" placeholder='Digite seu Email'required/>
        <br/>

        <label htmlFor="loginPassword">Senha:</label>
        <input type="password" id="loginPassword" placeholder="Digite sua senha" equired/>
        <br/>
    
        <button type="button" id="loginButton">Cadastrar</button>
    </form>

    </>

  );
}

export default Cadastro;