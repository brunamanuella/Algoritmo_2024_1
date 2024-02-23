import {question} from 'readline-sync'

console.log('Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).')

 //Entrada
 const numero = Number(question('Digite um numero inteiro (3 dígitos): '))

 //Processamento
 const centena = Math.floor(numero / 100)
 const resto = numero % 100

 const dezena = Math.floor(resto / 10)
 const unidade = resto % 10

 const inverso = (unidade*100) + (dezena * 10) + (centena * 1)

 console.log(`O inverso de ${numero} é ${inverso} `)
 console.log(`A soma do número com o seu inverso é de: ${numero + inverso}`)