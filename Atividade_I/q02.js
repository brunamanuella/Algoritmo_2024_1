import question from 'readline-sync'

function main(){
    const valor_a = Number(question('valor A: '))
    const valor_b = Number(question('Valor B: '))

    let mmc = 1

    while ((eh_multiplo(mmc, valor_a) & eh_multiplo(mmc, valor_b))){
        mmc++

    }

    console.log(`o mmc de a e b é ${mmc}`)
}

function eh_multiplo(valor_a, valor_b){
    return valor_a % valor_b == 0
}
main()