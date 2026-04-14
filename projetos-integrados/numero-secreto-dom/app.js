function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('input').value; //value pega o valor
    console.log (chute == numeroSecreto);
}

function gerarNumAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

let numeroSecreto = gerarNumAleatorio();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


