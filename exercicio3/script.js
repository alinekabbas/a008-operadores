const itemA = 5 > 20 && 5 < 2
const itemB = 5 === 5 || 5 === "5"
const itemC = 20 > 50
const itemD = 20 > 50 || 50 > 60

console.log(itemA)
console.log(itemB)
console.log(!itemC)
console.log(!itemD)

// a) 5 é maior que 20 e também é menor que 2;

// b) 5 é igual a 5 ou é igual a “5”;

// c) negação de (vinte é maior que cinquenta)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)