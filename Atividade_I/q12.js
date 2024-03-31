import question from 'readline-sync'

function main(){
    let pts_jogador1 = 0
    let pts_jogador2 = 0

    while(pode_continuar(pts_jogador1, pts_jogador2)){
        let jogador = Number(question('ponto: '))
        if (jogador == 1){
            pts_jogador1++
        }else{
            pts_jogador2++
        }
    }

    let vencedor = 'Vencedor: Jogador'
    if (pts_jogador1 > pts_jogador2){
        vencedor = vencedor + '01'
    }else{
        vencedor = vencedor + '02'
    }

    console.log(vencedor)
}

function pode_continuar(pontos1, pontos2){
    const diferenca = Math.abs(pontos2 - pontos1)
    if (pontos1 < 21 && pontos2 < 21){
        return true
    }else if (diferenca < 2){
        return true
    }else{
        return false
    }
}
main()