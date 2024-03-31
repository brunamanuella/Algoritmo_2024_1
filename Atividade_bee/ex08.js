/*Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. */

import {question} from 'readline-sync'

function main(){
    const valor_1 = Number(question('digite o valor 1: '))
    const valor_2 = Number(question('digite o valor 2: '))
    const valor_3 = Number(question('digite o valor 3: '))
    const valor_4 = Number(question('digite o valor 4: '))

    const diferenca = (valor_1 * valor_2) - (valor_3 * valor_4)

    console.log(`DIFERENÇA: ${diferenca}`)
}
main()