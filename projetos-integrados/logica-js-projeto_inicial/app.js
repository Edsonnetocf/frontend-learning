alert("Bem vindo ao jogo do número secreto");
let numeroSecreto = 29;
console.log(numeroSecreto); //ver o numero secreto no log
let tentativa = prompt("Escolha um numero de entre 1 e 1000");

if(tentativa == numeroSecreto) {
    alert(`Você acertou o número secreto ${numeroSecreto}`);
}
else {
   if(tentativa < numeroSecreto){
        alert(`O número secreto é maior que ${tentativa}`);
   }
   else{
        alert(`O número secreto é menor que ${tentativa}`);
   }
}
