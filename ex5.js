const prompt = require('prompt-sync')();
const titles = [
          "1 - Harry Potter",    
          "2 - Hobbit",
          "3 - Diário de um Banana",
          "4 - Lord of the Rings",
          "5 - Sidarta",
          "6 - Memórias do Subsolo"
        ]
let cemprestado = 0
let status = [0,0,0,0,0,0]
let posicao
let i = 0  
let emprestado
let disponivel = 6

console.log("######## OPÇÕES ########")
while ( i >= 0 && i < 6) {             
    console.log("1 - Listar livros e situações")
    console.log("2 - Emprestar")
    console.log("3 - Devolver")
    console.log("4 - Consultar por número")
    console.log("5 - Exibir Totais")
    console.log("6 - Encerrar")

    i = Number(prompt("Escolha uma opção: "))

    switch(i) {
      case 1:
      console.log(titles, status)
      break;
    case 2: 
      console.log(titles)
      emprestado = Number(prompt("Qual você quer emprestado: "))   
      emprestado -= 1 
      if (emprestado < 6 && status[emprestado] == 0) {
      status[emprestado] = 1;
      cemprestado +=1 
      disponivel -=1
      }
      console.log(status);
      break;

    case 3: 
      console.log(titles)
      emprestado = Number(prompt("Qual você quer devolver: "))   
      cemprestado -= 1 
      if (emprestado < 6 && status[emprestado] == 1) {
      status[emprestado] = 0;
      cemprestado -= 1
      disponivel += 1
      }
      console.log(status);
      break;
    case 4:
      posicao = Number(prompt("Qual livro você quer consultar: "))
      posicao -= 1
      console.log(titles[posicao])
      if (status[posicao] == 0) {
        console.log("Livro está disponivel")
      } else { 
        console.log("Livro está indisponivel")
      }     
      break
    case 5:
      console.log("Temos 6 livros!")
      console.log(`${cemprestado} Livros emprestado!`)
      console.log(`${disponivel} Livros disponiveis!`)
      break
    case 6:
      console.log("Programa encerrado!")
      break
    default:
      console.log("Opção invalida")
      break
   }
}