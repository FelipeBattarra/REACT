import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cadastro from './Components/Cadastro';  
import Contador from './Components/Contador';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
    <Cadastro />
    <Contador/>
  </>
)