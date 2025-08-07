// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

// codigo aulas

let listaNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = generateRandomNumber();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    };
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
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
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor.");
        } else{
            exibirTextoNaTela("p", "O número secreto é maior.");
        }
        tentativas++
        limparCampo();
    }
}

// implementacao da lista 

function generateRandomNumber() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
    // limitando os numeros sorteados e resetando a lista assim que atingir todos os numeros da lista
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    // se a lista contem o numero escolhido por math.random, a funcao math.random gera um novo numero
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return generateRandomNumber();
    } else {
        // se nao tiver o numero escolhido pela funcao math.random, adiciona o numero na lista com push
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = generateRandomNumber();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

// codigo aulas término

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

// desafios aula 03

// function calcularImc(altura, peso) {
//     let imc = peso / (altura * 2);
//     console.log(imc);
// }

// calcularImc(1.73, 53);

// function factorialize(num) {
//   if (num < 0) 
//         return -1;
//   else if (num == 0) 
//       return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
// }
// console.log(factorialize(5));

// function converterDolar(dolar) {
//     return dolar * 4.80;
// }

// console.log(converterDolar(2));

// function calcularPerimetroRetangulo(largura, altura) {
//     let perimetro = 2 * (largura + altura);
//     return perimetro;
// };

// console.log(calcularPerimetroRetangulo(50, 50));

// function calcularPerimetroCirculo(raio) {
//     let pi = 3.14;
//     let perimetro = 2 * pi * raio;
//     let area = pi * (raio ^ 2);
//     console.log(perimetro, area);
// }

// calcularPerimetroCirculo(5);


// let contador = 0

// function tabuada(numero) {
//     while (contador < 10) {
//         contador++
//         console.log(`A multiplicação de ${numero} e ${contador} é ${numero * contador}`);
//     }
// }

// tabuada(45);