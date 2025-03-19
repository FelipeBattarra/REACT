import React, { useState } from 'react';

const Cadastro = () => {
  // Definindo o estado para armazenar os dados após o cadastro
  const [dados, setDados] = useState({ nome: '', email: '', idade: '' });

  const handleRegistro = (e) => {
    e.preventDefault();
    setDados({
        nome: e.target.nome.value,  // 'nome' é o 'name' do campo de entrada
        email: e.target.email.value,
        idade: e.target.idade.value,
    });
  }

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegistro}>
        <div>
          <label>Nome: </label>
          <input type="text" name="nome" placeholder="Digite seu nome" />
        </div>
        <div>
          <label>E-mail: </label>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
        </div>
        <div>
          <label>Idade: </label>
          <input type="number" name="idade" placeholder="Digite sua idade" />
        </div>
        <button type="submit">Registrar</button>
      </form>

        <div>
          <h3>Informações cadastradas:</h3>
          <p>Nome: {dados.nome}</p>
          <p>E-mail: {dados.email}</p>
          <p>Idade: {dados.idade}</p>
        </div>
      
    </div>
  );
};

export default Cadastro;