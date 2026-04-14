function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    console.log ('O botão foi clicado');
}

function gerarNumAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

let numeroSecreto = gerarNumAleatorio();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


