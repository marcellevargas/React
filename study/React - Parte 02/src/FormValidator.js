import validador from 'validator';
class FormValidator {
    constructor(validacoes) {
        this.validacoes = validacoes;
    }

    valida(state) {
        // const campoValor = state[this.validacao.campo.toString()];
        // const metodoValidacao = validador[this.validacao.metodo];

        // if(metodoValidacao(campoValor, [], state) === true){
        //     console.log("FORM INVÁLIDO");
        //     return false;
        // }else{
        //     console.log("FORM VÁLIDO");
        //     return true;
        // }
        let validacao = this.valido();

        this.validacoes.forEach(regra => {
            const campoValor = state[this.validacao.campo.toString()];
            const metodoValidacao = validador[this.validacao.metodo];

            if(metodoValidacao(campoValor, [], state) === true){
                console.log("FORM INVÁLIDO");
                return false;
            }else{
                console.log("FORM VÁLIDO");
                return true;
            }
        })
    }

    valid(){
        const validacao = {
    
        }
    
        this.validacoes.map(regra => (
            validacao[regra.campo] = {isInvalid: false, message: ''}
        ));
    
        return {isValid: true, ...validacao};
    } 
}

export default FormValidator;