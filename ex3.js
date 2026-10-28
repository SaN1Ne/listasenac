// Uma empresa solicita a 12 clientes uma nota de satisfação de 1 a 5. Armazene as avaliações em um vetor.
// 1. Mostre todas as notas registradas.

// Lógica de Programação • Atividade prática de vetores

// 2. Calcule a média das avaliações.
// 3. Conte quantos clientes deram nota 5 e quantos deram nota 1 ou 2.
// 4. Identifique a maior e a menor nota.
// 5. Classifique a média: 4 ou mais = Excelente; de 3 até menos de 4 = Bom; abaixo de 3 = Precisa
// melhorar.
// Regra: Aceite apenas notas inteiras de 1 a 5.
const prompt = require('prompt-sync')();
const notas = []
let nota
let soma = 0
let nota5 = 0
let maior = 1
let menor = 5
let notasBaixas = 0

for (let i=0; i < 12; i++) {
    do{
        nota = Number(prompt(`Cliente ${i+1} insira sua avaliação: `)) 
    }while(!Number.isInteger(nota) || nota < 1 || nota > 5)
           
    notas.push(nota)
    
}

for (let i=0; i < 12; i++){
    soma = soma + notas[i]
    console.log(`Cliente ${i+1} - nota: ${notas[i]}`)

    if (notas[i] === 5) nota5++
    if (notas[i] <= 2) notasBaixas++
    if (notas[i] > maior) maior = notas[i]
    if (notas[i] < menor) menor = notas[i]
}

let media = soma / notas.length

console.log(`Media: ${media}`)
console.log(`Notas 5: ${nota5}`)
console.log(`Notas 1 ou 2: ${notasBaixas}`)
console.log(`Maior: ${maior} - Menor: ${menor}`)

if(media >=4) console.log(`Excelente`)
    else if(media >= 3) console.log(`Bom`)
        else(`Precisa nelhorar`)
