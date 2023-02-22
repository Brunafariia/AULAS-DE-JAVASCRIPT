// Dia 14.02
// Váriaveis e Operadores

// let= palavra reservada
// let [nome da variável]
let nomeCompleto; // camel case

nomeCompleto = "Bruna Faria de Souza"; //atribuição

console.log("batata");

console.log(nomeCompleto);
nomeCompleto = "Igor Vilar" //re-atribuição (redefinir)
console.log(nomeCompleto);

let idade = 19;
idade = 20;

console.log(idade);

//concatenação
console.log("Meu nome é " + nomeCompleto + " e tenho " + idade + " anos!");

//const define uma constante = impede a re-atribuição
const cpf = "032.548.886-04";
// cpf = "batata"

//Tipos de dados

let golsSofridos = 3; // numero= number
let chanceDerrota = 0.55; // numero decimal
let posseBola = 33.57; // 33,57
let nomeTime = "Real Madri"; //string= cadeia de caracteres
let patrocinio; // underfined
patrocinio = "Soulcode";
//boolean = 2 valores possíveis (true or false)
let timeGanhou = true; //"Lê: é verdade que o timeGanhou"
let timePerdeu = false; // "Lê: é falso que o timePerdeu"

// operadores aritiméticos
let soma = 200 + 100;
let multi = 200 * 100;
let subt = 200 - 100;
let div= 200 / 100;
let resto = 8 % 3;
let expressão1 = (soma + subt) * div;
let expressão2= (multi - subt) * resto;

console.log("A soma é " + soma);
console.log(`A multiplicação é ${multi} !`);
console.log(`A subtração é ${subt} !`);
console.log(`A divisão é ${div} !`);
console.log(`O resto é ${resto} !`);
console.log(`A expressão 1 é ${expressão1} !`);
console.log(`A expressão 2 é ${expressão2} !`);



let i = 0;
// i = i + 1; // o novo valor de i é 0 + 1 = 1
// i = i + 1; // o novo valor de i é 1 + 1 = 2
// i = i + 1; // o novo valor de i é 2 + 1 = 3
// i = i + 1; // o novo valor de i é 3 + 1 = 4
i++; // i = i + 1
console.log(i);
i++; // altera o valor de i somando i + 1 = incremento
console.log(i);
i--; // i = i - 1 = decremento
console.log(i);

// Operadores Relacionais (>, <, >=,<=, ==,!=)
let a = 3;
let b = 5;

console.log (a > b);
console.log (a < b);
console.log (a >= b);
console.log (a <= b);
console.log (a == b);
console.log (a != b);

console.log(a == "3"); // A é igual a "3"?
console.log(a === "3"); // A é estritamente igual a "3"
console.log(a !== "3"); // A é estritamente diferente a "3"?
// O operador === compara VALOR e TIPO

//atividades de estudo

// Exercício 1

// Defina variáveis para peso e altura. Calcule o IMC.
// A formula é: PESO / (ALTURA * ALTURA)
// Mostre a seguinte mensagem: "Meu IMC é 17.54"

let peso = 57;
let altura = 1.70;
let imc = peso / altura ** 2; // altura elevado a 2
console.log(`Meu IMC é: ${imc}`);


//Exercicíco 2

// Defina variáveis para raio, PI (constante) e calcule a àrea do circulo
// A formula é: PI * R * R

let raio = 25;
const PI = 3.14;
let areaCirculo = PI * (raio * raio);
console.log ("O valor do raio é " + areaCirculo);

//Exercicíco 3

// Defina variáveis para raio, PI (constante) e calcule a circunferência
// A formula é: 2 * PI * R

let circuferencia = 20;
let areaCircuferencia = (2 * PI * raio); 
console.log ("A área da circuferencia é " + areaCircuferencia);


//Exercicíco 4
// Defina variáveis para temperatura em celsius e converta para fahrenheit.
// A formula é: C * 1.8 + 32

let celsius = 38;
let fahrenheit = celsius * 1.8 + 32;
console.log (celsius + " ºC em fahrenheit é " + fahrenheit + " ºF");