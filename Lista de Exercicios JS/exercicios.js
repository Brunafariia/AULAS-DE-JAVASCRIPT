// ---------------------------------------------Variáveis e operadores

//------------------------- Exercício 1

/* 
    Crie uma variável que armazene uma temperatura em Fahrenheit, e re-
    alize a conversão para Celsius. A equação para realizar a conversão é:
    C = (F - 32)/1.8
*/

// 1º Passo: Definir as variáveis

let Fahrenheit = 45;
let convert = (Fahrenheit - 32) / 1.8;

// 2º Passo: Definir as variáveis

console.log(convert.toFixed(2));

// -------------------------Exercício 2

/* 
    Crie duas variáveis nome e sobrenome. Crie uma nova variável chamada
    nomeCompleto e realize a concatenação de nome e sobrenome com
    template strings.
*/

// 1º Passo: Definir as variáveis

let nome = "Lucas";
let sobrenome = "Rodrigues";

/* 
    var -> Zero limites de alteração
    let -> Mais "Estático" que o var
    const -> Ele não muda
*/

let nomeCompleto = nome + sobrenome;

// 2º Passo: Definir as variáveis

console.log(nomeCompleto);

console.log(`Meu nome é ${nome} ${sobrenome}`);

console.log("Meu nome é", nome, sobrenome);

//------------------------- Exercício 3

/*
    Crie cinco variáveis que representam cinco notas de um estudante. Cal-
    cule a média ponderada, sabendo que o peso das notas são respectiva-
    mente: 3, 2, 1, 4 e 5.
*/

// 1º Passo: criar variáveis
let nota1 = 3;
let nota2 = 2;
let nota3 = 1;
let nota4 = 4;
let nota5 = 5;

let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

// 2º Passo: chamar a variável

console.log(`A nota final é ${media}`);

//------------------------- Exercício 4

/*
    Crie duas variáveis que representam as dimensões (em km) de um ter-
    reno: comprimento e largura. Calcule a área deste terreno, em seguida

    converta para hectares. Nota: 1 km2 equivale a 100 hectares.
*/

// 1º Passo: criar variáveis

let comprimento = 10; // km
let largura = 20; // km
let area = comprimento * largura; // Km²
let conversao = area * 100;

// 2º Passo: Chamar a variável conversão

console.log(conversao);

//----------------------------- Exercício 5

/*
    Crie uma variável que armazena uma temperatura em Kelvin. Converta
    para Celsius. A equação é:

    C = K − 273
*/

// 1º Passo:

let temp = 368;
let conversaoCelKel = temp - 273;

console.log(conversaoCelKel);

// ---------------------------------------------Estruturas Condicionais

//------------------------- Exercício 1

/*

Crie três variáveis: a, b e c. Estas variáveis armazenam números. Exiba
qual destes números é o maior.

*/

// 1º Passo: Definir as variáveis

let a = 5;
let b = 7;
let c = 15;

// 2º Passo: Definir as comparações
if (a > b && a > c) {
    console.log(`a variável A é a maior`);
} else if (b > a && b > c) {
    console.log(`a variável B é a maior`);
} else {
    console.log(`a variável C é a maior`);
}

// ------------------------------------------ Exercício 2

/*

    Crie três variáveis que representam os três lados de um triângulo. Aplica
    a seguinte regra para definir se o triângulo é possível: Se a soma de dois
    lados é maior que o terceiro lado.

*/

let lado1 = 5;
let lado2 = 6;
let lado3 = 18;

// lado 1 + lado 2 > lado 3
// lado 2 + lado 3 > lado 1
// lado 3 + lado 1 > lado 2

if ((lado1 + lado2) > lado3) {
    console.log(`A somatória dos lados 1 e 2 são maiores que o lado 3, pois ${lado1} + ${lado2} é igual a ${lado1 + lado2}`);
} else if ((lado2 + lado3) > lado1) {
    console.log(`A somatória dos lados 2 e 3 são maiores que o lado 1, pois ${lado2} + ${lado3} é igual a ${lado2 + lado3}`);
} else if ((lado3 + lado1) > lado2) {
    console.log(`A somatória dos lados 3 e 1 são maiores que o lado 2, pois ${lado3} + ${lado1} é igual a ${lado3 + lado1}`);
}

//------------------------- Exercício 3

/*
    Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior
    que 130) mostre uma mensagem de aviso.
*/

let idade = 230;
if (idade < 0 || idade > 130) {
    console.log("Sua idade está inválida, digite novamente");
} else {
    console.log(`Sua idade é ${idade}`);
}

// --------------------------------------------- Estruturas de seleção

//------------------------- Exercício 1

/*
    Defina uma variável para armazenar um caractere e determine se é uma
    vogal ou uma consoante. Use um switch-case para implementar a lógica.
*/

let letra = "f";

switch (letra) {
    case "a":
        console.log(`A letra ${letra} é uma vogal`);
        break;

    case "e":
        console.log(`A letra ${letra} é uma vogal`);
        break;

    case "i":
        console.log(`A letra ${letra} é uma vogal`);
        break;

    case "o":
        console.log(`A letra ${letra} é uma vogal`);
        break;

    case "u":
        console.log(`A letra ${letra} é uma vogal`);
        break;

    default:
        console.log(`A letra ${letra} é uma consoante`);
        break;
}

// ---------------------------------------------Estruturas de repetição

//-------------------------------------------------- Exercício 1

/*
    Use um laço while para imprimir na tela todos os números pares de 2 a
    10.
*/

let numero = 0; // 0 -> 1 -> 2 ... -> 10

/* while = enquanto */
while (numero <= 10) {
    if (numero % 2 === 0) {
        console.log(numero); // ++ ou -- ele adiciona/remove 1
    }
    numero++;

}

//------------------------- Exercício 2

/*
    Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10).
*/
let numeroFixo;
let number = 7;
let multiplicador = number * numeroFixo;

for (numeroFixo = 1; numeroFixo <= 10; numeroFixo++) {
    let multiplicador = number * numeroFixo;
    console.log(`${number} * ${numeroFixo} = ${multiplicador}`);
}

// --------------------------------------------- Funções

//------------------------- Exercício 1

/*
    Escreva uma função que receba um número e retorne seu dobro.
*/



// function multiplicar (num) {
//     console.log(`O número ${num} multiplicado por 2 é ${num * 2}`);
// }

// multiplicar(15);



//-------------------------------------------------- Exercício 2

/*
    Escreva uma função que receba uma palavra e um número. Retorne a
    palavra repetida a quantidade de vezes indicada pelo segundo parâme-
    tro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize
    um loop para resolver.
*/

/*
const variavel = (palavra, repeticao) => {
    for (let i=1; i <= repeticao; i++) {
        console.log(palavra);
    }
}

variavel("batata", 30);

*/

// Exercício 3 

/* 

Transforme os itens 1, 2 e 3 em arrow function expressions.

*/


const variavel = (palavra, repeticao) => {
    for (let i = 1; i <= repeticao; i++) {
        console.log(palavra);
    }
}

const multiplicar = (num) => {
    console.log(`O número ${num} multiplicado por 2 é ${num * 2}`);
}

multiplicar(25);


// --------------------------------------------- Strings 

// --------------------------------------------------Exercício 1

/*

Escreva uma função que receba uma string e retorne o número de ca-
racteres contidos nela.

*/

let letter = "lais";

function contador() {
    console.log(letter.length);
}

contador();

//------------------------- Exercício 2

// Escreva uma função que receba uma string e retorne a mesma string em letras maiúsculas


function convertMaiusculo() {
    console.log(letter.toUpperCase());
}

convertMaiusculo();

// ---------------------------------------------Array

//------------------------- Exercício 1

// Array

// Exercício 1

/*
Crie um array contendo os números de 1 a 10 e exiba-os no console com
for-of e for comum.
*/

let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const array of arrays) {
    console.log(array);
}

console.log("\n");

for (let i = 1; i <= arrays.length; i++) {
    console.log(i);
}


// Exercício 6


/*
Crie uma função que recebe um array de números e retorna um array
com todos os valores elevados ao quadrado.
*/

console.log("\n");

let nomeDaArray = [1, 2, 3];
let arrayVazia = [];

function elevarQuadrado(nomeDaArray) {
    for (let i = 1; i < nomeDaArray.length + 1; i++) {
        let multiplicar = i ** 2;
        console.log(multiplicar);
        arrayVazia.push(multiplicar);
    }
}

elevarQuadrado(nomeDaArray);

console.log(arrayVazia);

// Exercício 2

/*
Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.
*/

// 1º Passo: Declarar o Array

console.log("\n");

let strings = ["Alex", "Eduarda", "Ester", "Alexia", "Layza"];

// 2º Passo: Declarar a varíável que terá um filtro para as palavras

let string = strings.filter((palavra) => palavra.length > 5);
console.log(string);

console.log("\n");

// Exercício 3

/*
Crie uma função que recebe um array de números e retorna um novo
array com apenas os números que são maiores que a média do array do
parâmetro.
*/

let garrafa = [12, 14, 16, 18, 20];
function numerosMaioresQueAMedia(array) {
    let soma = 0; // 0 => 12 => 26 
    for (let i = 0; i < array.length; i++) { // For => looping
        soma += array[i]; // soma = soma + array[i]
    }

    const media = soma / array.length;

    console.log(media);

    let comparador = garrafa.filter((numero) => numero > media);
    console.log(comparador);
}

numerosMaioresQueAMedia(garrafa);


// Exercício 5

/*
Crie uma função que recebe um array com os nomes dos alunos de uma
turma, e outro array que recebe a lista de presença com os nomes. Indique quais alunos faltaram.
*/
/*
let alunos = ['a', 'b', 'c', 'd', 'e'];
let listaDePresença = ['a', 'b', 'c'];
function Presenca (listaDePresença, alunos) {
    let faltantes = [];
    
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];
        if (!listaDePresença.includes(aluno)) {
            faltantes.push(aluno);
        }
    }
    return faltantes;
}
const faltas = Presenca(alunos, listaDePresença);
console.log(faltas);
*/

function listarFaltantes(alunos, listaPresenca) {
    let faltantes = [];
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];
        if (!listaPresenca.includes(aluno)) {
            faltantes.push(aluno);
        }
    }
    return faltantes;
}
const alunos = ['João', 'Maria', 'Pedro', 'Lucas', 'Ana', 'Mariana'];
const listaPresenca = ['João', 'Maria', 'Lucas', 'Mariana'];
const faltantes = listarFaltantes(alunos, listaPresenca); // ['Pedro', 'Ana']