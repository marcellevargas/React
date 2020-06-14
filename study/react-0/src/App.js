import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';

// function App() {
//   const  autores =  [
//     {
//       nome: 'Paulo',
//       livro: 'React',
//       preco: '1000'
//     },
//     {
//       nome: 'Daniel',
//       livro: 'Java',
//       preco: '99'
//     },
//     {
//       nome: 'Marcos',
//       livro: 'Design',
//       preco: '150'
//     },
//     {
//       nome: 'Bruno',
//       livro: 'DevOps',
//       preco: '100'
//     },
//     {
//       nome: 'Bruno',
//       livro: 'DevOps',
//       preco: '100'
//     },
//     {
//       nome: 'Bruno',
//       livro: 'DevOps',
//       preco: '100'
//     }
//   ];

//   return (
//     <div className="App">
//       <Tabela autores = { autores } />
//       <Tabela2 autores = { autores } />
//     </div>
//   );
// }

class App extends Component {
  state = {
    autores: [
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
        nome: 'Nico',
        livro: 'Java',
        preco: '9999'
      }
    ]
  };
  
  render() {
    return (
      <div className="App">
        <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
      </div>
    );
  }

  removeAutor = index => {
      const { autores } = this.state;

      this.setState({
        autores: autores.filter((autor, posAtual) => {
          console.log(index, posAtual);
          return posAtual !== index;
        })
      });
  }
}

export default App;
