const prompt = require('prompt-sync')()
let venda = [] , i , sessao , totalvendas = 0, total = [] , maior = 0 , msessao = 0
for (i = 0; i < 7; i++) {
    do{
         sessao = Number(prompt(`Escreva a quantidade de ingresso vendidos na sessão ${i+1}: `))
    }while(sessao < 0 || sessao > 50)
    
    venda.push(sessao)
    if (venda[i] == 50){
        msessao++
    }
}
total = venda.map((valor) => {
    return valor * 20
})
for(i=0;i<7;i++) {
    console.log(`Venda da sessâo ${i+1}: R$`,total[i].toFixed(2))
    totalvendas += total[i]
    if(total[i]>maior){
        maior = total[i]
    }
}
console.log(`Sessões com todos os ingressos vendidos: ${msessao}`)
console.log(`O total de vendas do dia foi de R$ ${totalvendas.toFixed(2)}`)
let pos = total.indexOf(maior) + 1
console.log(`a sessâo ${pos} teve a maior venda!`)