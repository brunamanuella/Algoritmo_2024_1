import {question} from 'readline-sync'

console.log('Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).')

 //Entrada
 const anos_fumando = Number(question('Quantos anos está fumando? '))
 const cigarros_por_dia = Number(question('Quantos cigarros fuma por dia? '))
 const preco_da_carteira = Number(question('Valor da carteira de cigarro? '))

 //Processamento
 const total_de_cigarros = anos_fumando * 365 * cigarros_por_dia
 const total_de_carteiras = total_de_cigarros / 20
 const gasto_total = total_de_carteiras * preco_da_carteira

 //Saída
 console.log(`O gasto com cigarros foi de: ${gasto_total.toFixed(2)} reais`)