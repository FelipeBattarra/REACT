import React, { useState, useEffect } from 'react';

const Cadastro = () => {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState(
    JSON.parse(localStorage.getItem('tarefas')) || []
  );
  const [nomeUsuario, setNomeUsuario] = useState(localStorage.getItem('nomeUsuario') || '');
  const [cor, setCor] = useState(localStorage.getItem('corFundo') || 'white');

  // Pergunta o nome do usuário apenas se não estiver salvo no localStorage
  useEffect(() => {
    if (!nomeUsuario) {
      const nome = prompt('Qual é o seu nome?');
      if (nome) {
        setNomeUsuario(nome);
        localStorage.setItem('nomeUsuario', nome);
      }
    }
    if (cor  === 'white'){
      document.body.style.color = 'black';
    }
    if (cor  === 'cyan'){
      document.body.style.color = 'black';
    }
    if (cor === 'black') {
      document.body.style.color = 'white';
    }
// Altera o fundo da página
    document.body.style.backgroundColor = cor; // Altera o fundo da página
  }, [nomeUsuario, cor]);

  // Função para registrar a tarefa
  const handleRegistro = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Evita adicionar tarefa vazia
    const novasTarefas = [...tarefas, input];
    setTarefas(novasTarefas);
    localStorage.setItem('tarefas', JSON.stringify(novasTarefas));
    setInput('');
  };

  // Função para excluir tarefa
  const handleExcluir = (tarefa) => {
    const tarefasRestantes = tarefas.filter((t) => t !== tarefa);
    setTarefas(tarefasRestantes);
    localStorage.setItem('tarefas', JSON.stringify(tarefasRestantes));
  };

  // Função para alterar a cor de fundo
  const handleCorChange = (e) => {
    const novaCor = e.target.value;
    setCor(novaCor);
    localStorage.setItem('corFundo', novaCor); 
  };

  return (
    <div>
      <h2>{nomeUsuario}, sua lista de tarefas</h2>
      <form onSubmit={handleRegistro}>
        <label>Nome da tarefa:</label><br />
        <input
          type="text"
          name="tarefa"
          placeholder="Digite o nome da tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br />
        <button type="submit">Registrar</button>
      </form>
      <br /><br />
      
      {/* Lista de tarefas e botão de exclusão */}
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa} <button onClick={() => handleExcluir(tarefa)}>Excluir</button>
          </li>
        ))}
      </ul>

      {/* Seção para escolher a cor de fundo */}
      <div>
        <h3>Escolha uma cor para o fundo da página:</h3>
        <label>
          <input
            type="radio"
            value="black"
            checked={cor === 'Black'}
            onChange={handleCorChange}
            style={{ color: 'white' }}
          />
          Preto
        </label>
        <label>
          <input
            type="radio"
            value="cyan"
            checked={cor === 'cyan'}
            onChange={handleCorChange}
          />
          Ciano
        </label>
        <label>
          <input
            type="radio"
            value="darkslategrey"
            checked={cor === 'darkslategrey'}
            onChange={handleCorChange}
          />
          CinzaTop
        </label>
        <label>
          <input
            type="radio"
            value="white"
            checked={cor === 'white'}
            onChange={handleCorChange}
          />
          Branco
        </label>
      </div>
    </div>
  );
};

export default Cadastro;