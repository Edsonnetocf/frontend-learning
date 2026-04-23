function sortear() {
    let quantidade = document.getElementById('quantidade').value;   //linhas 23, 28, 33 do html
    let de = document.getElementById('de').value;                   //document.getElementById: devolve a tag html; .value:guarda na variavel quantidade o valor dentro do input
    let ate = document.getElementById('ate').value;
    
    console.log(`Quantidade: ${quantidade}`);
    console.log(`De: ${de}`);
    console.log(`Ate: ${ate}`);
}