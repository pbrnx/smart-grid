import React from 'react';
import '../styles/Form.css';


function Login() {
  return (
    <>
    <h1>Faça Login!</h1>
    <form>    
        <label for="loginPassword">Email:</label>
        <input type="text"   placeholder="Digite seu email" required/>
        <br/>

        <label for="loginPassword">Senha:</label>
        <input type="password" id="loginPassword" placeholder="Digite sua senha" required/>
        <br/>
    
        <button type="button" id="loginButton">Cadastrar</button>
    </form>
    </>

  );
}

export default Login;