import React, { Component } from 'react';
// import './App.css';
import Tabela from './Tabela';
import Form from './Formulario';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';

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
      // <div className="App">
      //   <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
      //   <Form />
      // </div>
      // <React.Fragment>
      //    <Header />
      //   <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
      //   <Form escutadorDeSubmit={this.escutadorDeSubmit} />
      // </React.Fragment>
      <div  className="container mb-10">
         <Header />
        <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
         <Form />
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

  escutadorDeInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores:[...this.state.autores, autor]})
  }
}

export default App;
