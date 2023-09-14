import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Form.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const checkPreviousLogin = () => {
    // Check if the user is already logged in using sessionStorage
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      alert('Você já está logado, Usuário.');
      // Redirect to another route (e.g., dashboard) if needed
      history.push('/dashboard'); // Replace '/dashboard' with the actual route
      return true; // Return true if already logged in
    }

    return false; // Return false if not logged in
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
      return; // Do not proceed with login if already logged in
    }

    const cadastros = JSON.parse(localStorage.getItem('users')) || [];
    const user = cadastros.find((cadastro) => cadastro.email === email.trim() && cadastro.senha === senha.trim());

    if (user) {
      // Set a sessionStorage flag to remember the user's login status
      sessionStorage.setItem('isLoggedIn', 'true');

      alert("Login bem sucedido! Bem-vindo " + user.nome + "!");
      history.push('/dashboard'); // Redirect to another route after successful login
    } else {
      alert("Credenciais de Login não encontradas.");
    }
  };

  const handleLogout = () => {
    // Clear the sessionStorage flag to log the user out
    sessionStorage.removeItem('isLoggedIn');
    // Optionally, you can also clear other session data or perform other logout tasks
    alert('Você foi desconectado.');
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
