import question from 'readline-sync'

function main(){
    let numero = Number(question('Numero: '))
    while (numero !== 0){
        mostrar_divisores(numero)
        numero = Number(question('numero: '))
    }
}

function mostrar_divisores(numero){
    let divisor = numero

    while (divisor > 0){
        if (numero % divisor == 0){
            console.log(divisor)
        }

        divisor--
    }
}
main()