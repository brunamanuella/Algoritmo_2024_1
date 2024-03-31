import question from 'readline-sync'

function main(){
    const numero_x = Number(question('numero: '))

    let anterior = numero_x
    let atual = Number(question('numero: '))
    let soma = anterior + atual

    while (soma !== numero_x){
        anterior = atual
        atual = Number(question('numero: '))

        soma = atual + anterior
    }
}
main()