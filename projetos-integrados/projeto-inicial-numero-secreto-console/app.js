let maxSecreto = prompt("Bem vindo ao jogo do número secreto! Escolha o valor máximo do número secreto.");
let numeroSecreto = parseInt(Math.random() * maxSecreto + 1);
console.log(numeroSecreto); //ver o numero secreto no log
let tentativa;
let numTentativas = 1;

while(tentativa != numeroSecreto){
    tentativa = prompt(`Escolha um número de entre 1 e ${maxSecreto}`);
    if(tentativa == numeroSecreto) {
        break;
    }
    else {
        if(tentativa < numeroSecreto){
            alert(`O número secreto é maior que ${tentativa}`)
        }
        else{
            alert(`O número secreto é menor que ${tentativa}`);
        }
        numTentativas ++;
    }
}

// if(numTentativas > 1){
//     alert(`Você acertou o número secreto (${numeroSecreto}) com ${numTentativas} tentativas`);
// }
// else{
//     alert(`Você acertou o número secreto (${numeroSecreto}) com ${numTentativas} tentativa`);
// }
//outro jeito:
let palavraTentativa = numTentativas > 1 ? 'tentativas' : 'tentativa';
//significa: ?(caso tentativa) > 1 coloca "tentativas" :(se não) usa "tentativa"
alert(`Você acertou o número secreto (${numeroSecreto}) com ${numTentativas} tentativa`);