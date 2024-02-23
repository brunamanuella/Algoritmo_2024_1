import {question} from 'readline-sync'

console.log('Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.')

 //Entrada
 const d = Number(question('Digite uma idade exressa em dias: '))

 //Processamento
 const dias = d % 30
 const meses = Math.floor(d / 30) % 12
 const anos = Math.floor(d / (30 * 12)) 

 //Saída
 console.log(` ${d} dias, corresponde a: ${anos} anos, ${meses} meses e ${dias} dias`)