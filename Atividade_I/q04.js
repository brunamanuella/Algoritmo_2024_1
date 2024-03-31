import question from 'readline-sync'

function main(){
    const numero = Number(question('Número: '))

    let resultado = numero / 2
    let contador = 1

    while (resultado >= 1){
        resultado = resultado / 2
        contador ++
    }

    console.log(`Ultimo resultado ${resultado}`)
    console.log(`quantidade divisões ${contador}`)
}
main()