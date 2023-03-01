// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular

// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

//atributos
let contaBancaria = {
    codigo: 43689,
    saldo: 5000,
    cpfTitular: "123.456.789-10",
    nomeTitular: "Maria",
    //metodos
    saque(valor) {
        this.saldo -= valor;
    },
    deposito(valor) {
        this.saldo += valor;
    }
};

console.log(contaBancaria.saldo);
contaBancaria.saque(2000);
contaBancaria.deposito(500);
console.log(contaBancaria.saldo);

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

//atributos
let produto = {
    // Atributos/propriedades
    nome: "Relojim",
    descricao: "Indica a hora os minutos e os segundos",
    quantidade: 100,
    precoOriginal: 500,
    desconto: 30,
    // Métodos
    calcularPrecoDesconto() {
      let precoCompra = this.precoOriginal - this.desconto;
      return precoCompra;
    },
    apresentacao() {
      console.log(this);
    },
    comprar(total) {
      this.quantidade -= total;
    },
  };
  
  produto.apresentacao();
  produto.comprar(20);
  produto.comprar(20);
  console.log(produto.quantidade);
  console.log(produto.calcularPrecoDesconto());