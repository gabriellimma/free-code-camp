let pessoa = {
  nome: 'Gabriel',
  idade: 26,
}

let cavalo = {
  nome: 'esse homem é um cavaaaalo',
  idade: 34,
}

function printval(...param) {
  console.log(...param, this.nome, this.idade)
}

printval.call(pessoa, "parameter", "p", [1,2,3])
printval.call(cavalo, 1)