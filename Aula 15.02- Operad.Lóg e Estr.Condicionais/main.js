// Operadores lógicos: Not (!), AND (&&), OR (||)

// Operador NOT(!) = inverte o valor lógico
let ligado = true;
let desligado = !ligado;

/*
    tabela (not)
    !true = false
    !false = true
*/

// Operador AND(&&) = todas as expressões tem que ser true
let gasolinaTanque = 1;
let naReserva = gasolinaTanque <5; 
let podeAbastecer = desligado && naReserva;
let podeViajar = ligado && !naReserva

console.log(podeViajar);

// Operador OR (||) = basta uma expressão ser true
let taPodendo = podeViajar || podeAbastecer;

/* TABELA VERDADE (OU)
true || false = true
false || true = true
true || true = true
false || falso = falso
*/

let idade = 30;
let podeBeber = idade >= 18 && idade <= 59; // de 18 até 59 anos
let podeDirigir = idade >= 18 || idade <= 59;
console.log(podeBeber);
console.log(podeDirigir);

let media = 8.5;
let sabeIngles = true;
let aprovado = media >= 7;

// O candidato será contratado caso esteja aprovado e saiba inglês

let contratado = aprovado && sabeIngles;
console.log(aprovado || sabeIngles);

let x = 5 ;
let y = 10;

let expressão1 = (x > 3) && (y < 20); // true
let expressão2 = (x != 3) || (y >= 20); // true
let expressão3 = (x == 3) || (y < 20); // true
let expressão4 = !(x == 5);  // false por causa da inversão de ! no início

/*

*/

let idadeUsuario = 20;

if (idadeUsuario >= 18){
// executa se for verdade
console.log("Você é maior de idade");
} else { // caso contrário
console.log("Você é menor de idade");
}
console.log("Vish!");

let nota = 8.5;
if(nota >= 7){
    console.log ("Você está aprovado com nota " + nota);
} else {
    console.log ("Você está reprovado. Tente de novo! " )
}

let numero = 10;
if (numero > 0) {
    console.log ("O número é positivo!")
} else if (numero <0) {
    console.log ("O número é negativo!")
} else { //se nenhuma das condições acima for verdadeira
    console.log ("O número é zero");
}


if(idadeUsuario >= 18 && idadeUsuario <= 59) {
    console.log ("Você pode beber! Beba com moderação!");
} else {
    console.log ("Você não pode beber!");
}

// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação


let nota1 = 8;
let nota2 = 9;
let nota3 = 4;
let mediaDasNotas = ((nota1 + nota2 + nota3) / 3);
console.log(mediaDasNotas);

if(mediaDasNotas >= 7) {
    console.log("Você está aprovado!");
} else if (mediaDasNotas >= 5 && mediaDasNotas <=7) {
    console.log("Você ficou de Reforço!");
} else {
    console.log("Você foi reprovado!")
}

// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

let peso = 71;
let altura = 1.67;
let imc = peso / (altura * altura);

if(imc < 18.5) {
    console.log("abaixo do peso!");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal!");
}  else if (imc >= 25 && imc <30) {
    console.log("Sobrepeso");
} else if (imc >= 30 && imc <35) {
    console.log("Grau I");
} else if (imc >= 35 && imc <40) {
    console.log("Grau II");
} else {
    console.log("Grau III");
}

// Exercício III: Defina um número A e um número B.
// Verifica qual o maior, ou menor, ou se são iguais!

let a = 10;
let b = 20;

if (a > b) {
    console.log("a é maior do que b");
} else if (a < b) {
    console.log("b é maior do que a");
} else {
    console.log("a e b são iguais");
}