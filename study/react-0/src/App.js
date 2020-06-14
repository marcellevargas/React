import React from 'react';
import './App.css';
import Tabela from './Tabela';
import Tabela2 from './Tabela2';

function App() {
  const  autores =  [
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    }
  ];

  return (
    <div className="App">
      <Tabela autores = { autores } />
      <Tabela2 autores = { autores } />
    </div>
  );
}

export default App;
