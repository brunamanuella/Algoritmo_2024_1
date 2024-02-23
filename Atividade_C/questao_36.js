import {question} from 'readline-sync'

console.log('Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.')

 //Entrada
 const anos = Number(question('Digite a idade em anos: '))
 const meses = Number(question('Meses: '))
 const dias = Number(question('Dias: '))

 //Processamento
 const dias_somados = (anos * 365) + (meses * 30) + dias

 //Saída
 console.log(`${anos} anos ${meses} meses e ${dias} dias, corresponde a: ${dias_somados} dias`)