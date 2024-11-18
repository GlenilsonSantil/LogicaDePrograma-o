//let contador = 1;

//while (contador < 4) {
//  console.log('Executando a iteração ' + contador);
//  contador++;
//}



let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--;
}

let media = soma / qtdNumeros;

console.log(media);