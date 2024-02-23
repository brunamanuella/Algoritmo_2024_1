import {question} from 'readline-sync'

console.log('Leia 3 números, calcule e escreva a média dos números.')

  //Entrada
  const numero_1 = Number(question('Número 1: '))
  const numero_2 = Number(question('Número 2: '))
  const numero_3 = Number(question('Número 3: '))

  //Processamento
  const media = (numero_1 + numero_2 + numero_3) / 3

  //Saída
  console.log(`A média desses números é de: ${media}`)