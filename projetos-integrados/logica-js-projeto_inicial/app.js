alert("Bem vindo ao jogo do número secreto");
let numeroSecreto = 29;
console.log(numeroSecreto); //ver o numero secreto no log
let tentativa = prompt("Escolha um numero de entre 1 e 1000");

if(numeroSecreto == tentativa) {
    alert("Você acertou o número secreto (29)");
}
else {
    alert("Você errou");
}
