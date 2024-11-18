
let numero

// 01 - Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}


// 02 - Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
let contadoNumero = 10;
while (contador >= 0) {
    console.log(contadoNumero);
    contadoNumero--;
}


// 03 - Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
let numeroMaximo1 = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo1 >= 0) {
    console.log(numeroMaximo1);
    numeroMaximo1--;
}


// 04 - Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contagemRegressiva = 0;

while (contagemRegressiva <= numeroMaximo) {
    console.log(contagemRegressiva);
    contagemRegressiva++;
}