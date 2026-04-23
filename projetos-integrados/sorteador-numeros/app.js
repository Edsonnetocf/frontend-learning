function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);   //linhas 23, 28, 33 do html
    let de = parseInt(document.getElementById('de').value);                   //document.getElementById: devolve a tag html; .value:guarda na variavel quantidade o valor dentro do input
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    
    console.log(`Sorteados: ${sorteados}`);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   //gera um numero aleatorio incluindo o max
}

