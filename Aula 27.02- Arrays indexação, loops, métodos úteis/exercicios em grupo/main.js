// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contador = 0
for (let i = 0; i < numeros.length; i++) {
    contador += numeros[i]
}
console.log(contador);

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

let notas = [10, 7.5, 8.8, 9.0, 7.2];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = soma / notas.length;

console.log("A média das notas é: " + media);

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

let num = [7, 11, 20, 9.4, 34, 50, 66];
let maiorNumero = 0
for (let i = 0; i < num.length; i++) {
    if (num[i] > maiorNumero) {
        maiorNumero = num[i]
    }
}

console.log(`O maior numero é ${maiorNumero}`)

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.

let frutas = ["maçã", "pera", "banana", "abacaxi"]
for (let fruta of frutas) {
    console.log(`${fruta} tem ${fruta.length}`)
}

// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

let numero = [];

for (let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 100));
}

let pares = [];
for (let num of numero) {
    if (num % 2 === 0) {
        pares.push(num);
    }
}

let somaPares = 0;
for (let par of pares) {
    somaPares += par;
}

console.log(somaPares);

//outro opcao de fazer a V //

let numerosAleatórios = Array(5);
for (let i = 0; i < numerosAleatórios.length; i++) {
    numerosAleatórios[i] = Math.floor(Math.random() * 100);
}

let numerosPares = [];

for (let i = 0; i < numerosAleatórios.length; i++) {
    if (numerosAleatórios[i] % 2 === 0) {
        numerosPares.push(numerosAleatórios[i]);
    }
}

console.log(somaArray(numerosPares));
function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}


// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)

function verificarTipoArquivo(nomeArquivo) {
    if (nomeArquivo.endsWith(".mp3") || nomeArquivo.endsWith(".wav")) {
        return true
    } else {
        return false
    }
}
console.log(verificarTipoArquivo("Linkin Park - In The End.mp3"));

// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.
const extrairDigitosVerificadores = (cpf) => {
    const digitosVerificadores = cpf.slice(-2);
    return digitosVerificadores;
};

console.log(extrairDigitosVerificadores("056.985.990-23"));

// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB

function inverterString(string) {
    var stringInvertida = "";
    // do ultimo indice até 0
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
        console.log(stringInvertida);
    }
    return stringInvertida;
}

console.log(inverterString("BATATA"));


// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]

const inverteArray = (array) => {
    // let array = [num1, num2, num3, num4];
    array.reverse();
    console.log("A ordem invertida é: ", array);
    return array;
};

inverteArray([1, 2, 3, 4]);