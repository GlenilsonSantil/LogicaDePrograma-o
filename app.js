// 1° Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
//mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt('Digite o dia da semana.');

if (diaDaSemana == "sabado" || diaDaSemana == "domingo") {
    alert ("Bom fim de semana!");
} else {
    alert ("Boa semana!");
}


// 2° Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroDigitado = prompt('Digite um numero');

if (numeroDigitado >= 0){
    alert ("Numero digitado " + numeroDigitado + " é positivo.")
} else {
   alert ("Numero digitado " + numeroDigitado + " é negativo.")
}


//3° Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt("Digite a pontuação");

if (pontuacao >= 100){
    alert ("Parabéns, você venceu!")
} else {
   alert ("Tente novamente para ganhar.")
}


//4° Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);


//5° Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);