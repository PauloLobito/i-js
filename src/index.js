const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });

const Alunos = [
    { id: 1, name: "Paulo", grades: [], role: "default" },
    { id: 2, name: "Joao", grades: [0], role: "default" },
    { id: 3, name: "", grades: [12, 15, 4, 19], role: "admin" },
    { id: 4, grades: [15, 19, 8, 2], role: "editor" },
    { id: 5, name: "Anabela", grades: [15, 15, 4, 2], role: "editor" },
    { id: 6, name: "Anastacia", grades: [15, 9, 4, 2], role: "admin" }
];

// Função que transforma os alunos em array de strings
function funcB(alunos) {
    const resultado = [];
    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];
        let nome = aluno.name == null ? "Anónimo" : aluno.name === "" ? "Sem nome" : aluno.name;
        let media = aluno.grades && aluno.grades.length > 0 ? aluno.grades.reduce((a, b) => a + b, 0) / aluno.grades.length : 0;
        let status = media >= 10 ? "Aprovado" : "Reprovado";
        let label = aluno.role === "admin" ? "[Acesso total]" : aluno.role === "editor" ? "[Pode editar]" : "[Acesso limitado]";
        resultado.push(`${i + 1}) ${nome} - média: ${media} - status: ${status} ${label}`);
    }
    return resultado;
}

// Função que imprime cada linha
function funcC(b) {
    b.forEach(item => console.log(item));
}


async function Menu() {
    console.log("1- Lista dos Alunos");

    const resposta = await rl.question("Introduza a sua opção: ");
    return parseInt(resposta);
}

// Função principal
async function main() {
    console.clear(); 
    const opc = await Menu(); 
    console.clear(); 

    switch (opc) {
        case 1:
            funcC(funcB(Alunos));
            break;
        case 2:
            console.log("Função de adicionar alunos ainda não implementada.");
            break;
        case 3:
            console.log("Função de listar alunos aprovados ainda não implementada.");
            break;
        case 4:
            console.log("Função de listar alunos reprovados ainda não implementada.");
            break;
        case 5:
            console.log("Função de pesquisar alunos ainda não implementada.");
            break;
        default:
            console.log("Opção Inválida");
    }

    rl.close();
}

main();
console.log("Oi")