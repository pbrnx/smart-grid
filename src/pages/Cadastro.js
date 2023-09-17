import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Form.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const history = useHistory(); 

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const checkMail = email.trim();

    if (nome.length === 0 || email.length === 0 || senha.length === 0 || !checkboxChecked || !checkMail.includes('@')) {
      alert("Verifique se preencheu todos os campos corretamente!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      alert("Este email já está cadastrado!");
      history.push('/login');
      return;
    }

    const newUser = {
      nome,
      email,
      senha,
    };

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    setNome('');
    setEmail('');
    setSenha('');
    setCheckboxChecked(false);

    alert('Cadastro realizado com sucesso! \nObrigado por fazer parte do Smart Grid');
    history.push('/login'); 
  };

  return (
    <>
      <h1>Cadastre-se e faça parte do nosso projeto!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="loginUsername">Nome:</label>
        <input type="text" placeholder='Digite seu nome completo' required value={nome} onChange={handleNomeChange} />
        <br />

        <label htmlFor="loginPassword">Email:</label>
        <input type="text" placeholder='Digite seu Email' required value={email} onChange={handleEmailChange} />
        <br />

        <label htmlFor="loginPassword">Senha:</label>
        <input type="password" id="loginPassword" placeholder="Digite sua senha" required value={senha} onChange={handleSenhaChange} />
        <br />

        <input type="checkbox" id="checkbox" checked={checkboxChecked} onChange={handleCheckboxChange} />
        <label htmlFor="checkbox">Aceito os termos e condições</label>
        <br />

        <button type="submit" id="loginButton">Cadastrar</button>
      </form>
    </>
  );
}

export default Cadastro;
