// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let numeroSecreto = generateRandomNumber();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor.");
        } else{
            exibirTextoNaTela("p", "O número secreto é maior.");
        }
        tentativas++
    }
}

function generateRandomNumber() {
    return parseInt(Math.random() * 10 + 1);
}


// function helloWorld() {
//     console.log("Olá, mundo!")
// }
// helloWorld();

// function nomeConsole() {
//     let nome = prompt("Digite seu nome:");
//     console.log(`Olá, ${nome}`);
// }
// nomeConsole();

// function dobroValor() {
//     let valor = prompt("Digite seu valor:");
//     let dobro = valor * 2;
//     console.log(dobro);
// }
// dobroValor();

// function mediaTresNumeros() {
//     let numero1 = parseFloat(prompt("Digite o primeiro número: "));
//     let numero2 = parseFloat(prompt("Digite o segundo número: "));
//     let numero3 = parseFloat(prompt("Digite o terceiro número: "));
//     let media = (numero1 + numero2 + numero3)/ 3; 
//     console.log(`A média entre ${numero1}, ${numero2} e ${numero3} é: ${media}`);
// }
// mediaTresNumeros();

// function retornaMax() {
//     let numero1 = parseFloat(prompt("Digite o primeiro número: "));
//     let numero2 = parseFloat(prompt("Digite o segundo número: "));
//     if (numero1 > numero2) {
//         console.log(numero1);
//     } else {
//         console.log(numero2);
//     }
// }
// retornaMax();

// function retornaMultiplicacao() {
//     let numero1 = parseFloat(prompt("Digite seu número: "));
//     return numero1 * numero1;
// }
// retornaMultiplicacao();