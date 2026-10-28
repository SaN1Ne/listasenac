const prompt = require('prompt-sync')()
let estacionamento = [0,0,0,0,0,0,0,0,0,0]
let menu = 0
let posicao
console.log("######### ESTACIONAMENTO #########")
    while (menu >= 0 && menu < 5 ) {
        console.log("1 - Ocupar vaga")
        console.log("2 - Liberar vaga")
        console.log("3 - Consultar todas as vagas")
        console.log("4 - Exibir vagas livres")
        console.log("5 - Encerrar")
        menu = Number(prompt("Escolha uma opção: "));
        if (menu == 1 || menu == 2) {
            posicao = Number(prompt("Digite a posição: "))
        }
        switch (menu) {
            case 1:
                if (posicao < 10 && estacionamento[posicao] == 0) {
                estacionamento[posicao] = 1
                } else {
                    console.log("Opção Indisponivel ou invalida")
                }
                console.log(estacionamento) 
                break
            case 2:
                if (posicao < 10 && estacionamento[posicao] == 1) {
                estacionamento[posicao]=0
                } else {
                console.log("Posição Indisponivel ou invalida")
                }
                console.log(estacionamento) 
                break
            case 3: 
                console.log(estacionamento)
                 break
            case 4:
                let vagaslivre = estacionamento.filter(n => n == 0)
                console.log(vagaslivre)
                break
            case 5:
                console.log("Programa encerrado!")
                break
            default:
            console.log("Opção invalida tente novamente!!")
        } 
    }