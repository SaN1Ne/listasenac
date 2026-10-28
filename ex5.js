const prompt = require('prompt-sync')();
const titles = [
          "Harry Potter",
          "Hobbit",
          "Diário de um Banana",
          "Lord of the Rings",
          "Sidarta",
          "Memórias do Subsolo"
        ]

let status = [0,0,0,0,0,0]
let posicao

console.log("######## OPÇÕES ########")
console.log("######## 1 - Listar livros e situações ########")
console.log("######## 2 - Emprestar ########")
console.log("######## 3 - Devolver ########")
console.log("######## 4 - Consultar por número ########")
console.log("######## 5 - Exibir Totais ########")
console.log("######## 6 - Encerrar ########")

let i = Number(prompt("Escolha uma opção:"))

switch(i) {
  case 1:
    console.log(titles, status)
    break;

  case 2: 
    console.log(titles)
    let emprestado = Number(prompt("Qual você quer emprestado?"))
    if (emprestado == 1) {
      let posicao = 0;
      status[posicao] = 1;
    }
    console.log(status);
    break;
}
