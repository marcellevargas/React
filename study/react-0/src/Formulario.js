import React, { Component } from 'react';

class Formulario extends Component {
    render() {
        return (
            <form>

                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    onChange={this.escutadorDeInput}
                />

                <label htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    onChange={this.escutadorDeInput}
                />


                <label htmlFor="preco">Preço</label>
                <input
                    id="preco"
                    type="text"
                    name="preco"
                    onChange={this.escutadorDeInput}
                />


                <button 
                    type="button"
                    onClick={this.submitFormulario}
                >Salvar
                </button>
            </form>

        );
    }

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
        }

        this.state = this.stateInicial;
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }
}

export default Formulario;