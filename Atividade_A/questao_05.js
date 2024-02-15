import { question } from 'readline-sync'

// Entrada
var numero = Number(question('Número: '))

// Processamento
var centena = Math.floor(numero / 100)
var resto = numero % 100
var dezena = Math.floor(resto / 10)
var unidade = resto % 10

var somatorio = centena + dezena + unidade

// Saída
console.log(`> ${centena} + ${dezena} + ${unidade} é igual a ${somatorio}`)