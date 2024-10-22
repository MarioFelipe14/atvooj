function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + 'diz olá');
    }
    this.dizCargo = function () {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this,nome);
}

function Empregador(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this,nome);
}

const pessoa1 = new Pessoa('Mario');
const empregador1 = new Empregador('Mario','dev full-stack', 9000);
const funcionario1 = new Funcionario('Mario','dev front-end',4000);
const funcionario2 = new Funcionario('Joao','dev front-end',3000);
const funcionario3 = new Funcionario('Sofia','dev front-end',4100);

console.log(pessoa1);
console.log(empregador1);
console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);
