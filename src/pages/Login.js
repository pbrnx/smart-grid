import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Form.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const checkPreviousLogin = () => {
    
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      alert('Você já está logado.');
    
      history.push('/'); 
      return true; 
    }
    return false; 
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = () => {
    const isAlreadyLoggedIn = checkPreviousLogin();

    if (isAlreadyLoggedIn) {
      return; 
    }

    const cadastros = JSON.parse(localStorage.getItem('users')) || [];
    const user = cadastros.find((cadastro) => cadastro.email === email.trim() && cadastro.senha === senha.trim());

    if (user) {
      sessionStorage.setItem('isLoggedIn', 'true');
      alert("Login bem sucedido! Bem-vindo(a) " + user.nome + "!");
      history.push('/'); 
    } else {
      alert("Credenciais de Login não encontradas.");
    }
  };

  const handleLogout = () => {  
    sessionStorage.removeItem('isLoggedIn');
    alert('Você foi desconectado.');
    history.push('/');

  };

  return (
    <>
      <h1>Faça Login!</h1>
      <form>
        <label htmlFor="loginPassword">Email:</label>
        <input type="text" placeholder="Digite seu email" required value={email} onChange={handleEmailChange} />
        <br />

        <label htmlFor="loginPassword">Senha:</label>
        <input type="password" id="loginPassword" placeholder="Digite sua senha" required value={senha} onChange={handleSenhaChange} />
        <br />
        <div className='containerLoginButton'>
          <button type="button" id='loginButton' onClick={handleLogin}>Login</button>
          <button type="button" id='loginButton' onClick={handleLogout}>Logout</button>
        </div>  
      </form>
    </>
  );
}

export default Login;
