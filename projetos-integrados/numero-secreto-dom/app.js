let listaDeNumerosSorteados = [];
let numeroLitmite = 10;
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    let fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    fala.rate = 1.2;

    speechSynthesis.cancel();
    speechSynthesis.speak(fala);
}

function verificarChute(){
    let chute = document.querySelector('input').value; //value pega o valor
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa =  tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');//alterando pelo o que já estava no html (linha 28) 
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }
        else{
            if(chute < numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é maior');
            }
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumAleatorio(){
    let numerEscolhido = parseInt(Math.random() * numeroLitmite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLitmite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numerEscolhido)) { //includes: verifica se o elemento ta na lista, se sim TRUE se não FALSE
        return  gerarNumAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numerEscolhido); //push: pega o valor e coloca no final da lista
        console.log(listaDeNumerosSorteados);
        return numerEscolhido; 
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();


