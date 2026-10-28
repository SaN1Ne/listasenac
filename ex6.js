// Exercício 6 – Sistema de Inscrição em Oficinas
// Uma oficina possui 10 vagas. Utilize um vetor para armazenar os nomes dos participantes.
// 1. Crie um menu:
// 1. Inscrever;
// 2. Listar inscritos;
// 3. Consultar pelo nome;
// 4. Cancelar inscrição;
// 5. Exibir inscritos e vagas livres;
// 6. Encerrar.
// 2. Para consultar, percorra o vetor e informe se o nome foi encontrado.
// 3. Para cancelar, localize o nome e libere a posição, permitindo nova inscrição.
// Lógica de Programação • Atividade prática de vetores

// 4. Repita o menu até o encerramento.
// Regra: Não aceite nomes vazios nem inscrições quando todas as vagas estiverem ocupadas.

const prompt = require("prompt-sync")();

let participantes = new Array(10).fill("");
let opcao;
let posicao;

do {
    console.log("===== SISTEMA DE INSCRIÇÃO EM OFICINAS =====");
    console.log("1 - Inscrever");
    console.log("2 - Listar inscritos");
    console.log("3 - Consultar pelo nome");
    console.log("4 - Cancelar inscrição");
    console.log("5 - Exibir inscritos e vagas livres");
    console.log("6 - Encerrar");

    opcao = Number(prompt("Escolha uma opção:"));

    switch (opcao) {
        case 1:
          let posicaoLivre = -1;

          for (let i = 0; i < participantes.length; i++) {
              if (participantes[i] === "") {
                  posicaoLivre = i;
                  break;
              }
          }

          if (posicaoLivre !== -1) {
              let nome = prompt("Escreva seu nome:");

              if (nome !== null && nome.trim() !== "") {
                  participantes[posicaoLivre] = nome.trim();
                  console.log("Inscrição concluída!");
              } else {
                  console.log("O nome não pode ser vazio!");
              }
          } else {
              console.log("Todas as vagas estão ocupadas!");
          }
          break;

        case 2:
            console.log(participantes);
            break;

        case 3:
    
          let nomeConsultado = prompt("Digite o nome que você quer verificar:");
          let encontradoConsulta = false;

          for (let i = 0; i < participantes.length; i++) {
              if (participantes[i].toLowerCase() === nomeConsultado.trim().toLowerCase()) {
                  console.log("Participante encontrado:", participantes[i]);
                  encontradoConsulta = true;
                  break;
              }
          }

          if (!encontradoConsulta) {
              console.log("Nome não encontrado!");
          }
          break;

        case 4:
            console.log("Cancelar inscrição");
            let nomeCancelar = prompt("Digite o nome para cancelar a inscrição:");
            let encontrado = false;

            for (let i = 0; i < participantes.length; i++) {
              if (participantes[i] === nomeCancelar) {
                participantes[i] = "";
                encontrado = true;
                console.log("Inscrição cancelada!")
                break;
              }
            }
            if (encontrado === false) {
              console.log("Participante não encontrado!");
            }
            break;

        case 5:
            console.log("Exibir inscritos e vagas livres");
            console.log(participantes, participantes[posicao])
            break;

        case 6:
            console.log("Sistema encerrado!");
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
    }

} while (opcao !== 6);