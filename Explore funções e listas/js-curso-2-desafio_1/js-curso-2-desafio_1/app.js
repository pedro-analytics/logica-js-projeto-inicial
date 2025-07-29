let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

function cliqueConsole() {
    console.log("O botão foi clicado");
}

function cliqueAlert() {
    alert("Eu amo JS");
}

function cliquePrompt() {
    let nome = prompt("Qual é o seu nome?");
    let cidade = prompt("Qual é a sua cidade?");
    alert(`Estive em ${cidade} e lembrei de você, ${nome}.`);
}

function cliqueSoma() {
    numero1 = parseInt(prompt("Primeiro número:"));
    numero2 = parseInt(prompt("Segundo número:"));
    soma = numero1 + numero2
    alert(`A soma entre ${numero1} e ${numero2} é: ${soma}`);
}