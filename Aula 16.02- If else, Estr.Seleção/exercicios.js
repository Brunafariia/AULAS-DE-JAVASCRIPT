// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.

let idade = 19;
let dinheiro = 300;

if(idade >= 18 && dinheiro >= 20) {
    console.log("Ela pode comprar bebida");
    dinheiro = dinheiro -20; // dinheiro-= 20;
    console.log(`Você ficou com ${dinheiro} reais`);
} else {
    console.log("Ela não pode compar bebida");
}

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

let salario = 10000;

if (salario < 500){
    salario += 50;
    console.log(`Seu salario aumentou em 50R$!, atual -> ${salario}, anterior -> ${salario-50}`);
} else if(salario >= 500 && salario <= 1000){
    salario += 25;
    console.log(`Seu salario aumentou em 25R$!, atual -> ${salario}, anterior -> ${salario-25}`);
} else{
    console.log(`Não houve aumento de salário ${salario}`);
}

console.log(`Seu salário atual: ${salario}`);

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

let numero = 5;

switch(numero) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
        default:
            console.log("Este dia não existe!");

}

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

let comida = "chocolate";

if (comida === "batata" || comida === "carne" || comida=== "chocolate") {
    console.log("Humm, adoro");
} else if (comida === "pizza" || comida === "sanduiche") {
    console.log("As vezes"); 
} else {
    console.log("Quero não") 
}

// outro modo de fazer:

switch(comida) {
    case "batata":
    case "carne":
    case "chocolate":
        console.log("hmm, adoro");
        break;
    case "pizza":
    case "sanduíche":
        console.log("As vezes");
        break;
    default: 
        console.log("Quero não!");
        break;
}

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let num = 10;

let resto = num % 2;

if(resto > 0) {
console.log("O número é impar");
} else {
console.log("O número é par");
}

//outra forma de fazer

let numeroTeste = 3;
if(numeroTeste === 0) {
    console.log("O número é zero");
} else if (numeroTeste % 2 ===0 ) {
    console.log("numero número é par");
} else {
    console.log("O número é impar")
}