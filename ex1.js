const prompt = require('prompt-sync')();
const estoque = [];
for (let i = 0; i < 8; i++) {
    estoque[i] = Number(prompt('Digite um número: '));
    if(estoque[i] < 0){
        break;
    }
}
let quantidadeMenorQueCinco = 0;

for (let i = 0; i < 8; i++) {
    if(estoque[i] < 5) {
        quantidadeMenorQueCinco++;
    }
}
let maior = estoque[0];
let posicao_maior = 1;
for (let i = 0; i < 8; i++) {
    if(estoque[i] > maior) {
        maior = estoque[i];
        posicao_maior = i + 1;
    }
}


console.log(`Quantidade de produtos menores que 5: ${quantidadeMenorQueCinco}`);
console.log(`Posição do maior valor no estoque: ${posicao_maior}, que é o valor: ${maior}`);

let numProduto = Number(prompt('Digite o número do produto que deseja retirar (1 a 8): '));
let indice = numProduto -1;

if (indice >= 0 && indice < 8) {
    console.log(`Quantidade disponível no estoque: ${estoque[indice]}`)
    
    let quantidadeRetirar = Number(prompt('Quantidade a retirar: '));

    if(estoque[indice] >= quantidadeRetirar) {
        estoque[indice] = estoque[indice] - quantidadeRetirar;
        console.log(`Retirada autorizada! Novo estoque: ${estoque[indice]}`);
    } else {
        console.log('Retirada negada: estoque insuficiente.');
    }
} else {
    console.log('Produto inválido!');
}

console.log('Estoque atualizado:', estoque[indice])
