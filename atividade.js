console.log("Hello, world!");
alert("Hello, world! Executando");

let resposta = prompt("Digite seu nome: ", "Nome");
let nota1 = parseFloat(prompt("Digite a primeira nota: ", "0"));
let nota2 = parseFloat(prompt("Digite a segunda nota: ", "0"));

let media = (nota1 + nota2) / 2;

console.log("O nome digitado foi: " + resposta);
console.log("A média das notas é: " + media);

const mediaaprovado = 7;

let situacao;
if (media >= mediaaprovado) {
    situacao = "aprovado";
} else if (media >= 5) {
    situacao = "recuperação";
} else {
    situacao = "reprovado";
}

if (situacao === "recuperação") {
    let notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação: ", "0"));
    if (notaRecuperacao >= 5) {
        situacao = "aprovado na recuperação";
    } else {
        situacao = "reprovado na recuperação";
    }
} 
console.log("Nome do aluno: " + resposta);
console.log("Nota 1: " + nota1);
console.log("Nota 2: " + nota2);
console.log("Média: " + media);
console.log("Situação final do aluno: " + situacao);