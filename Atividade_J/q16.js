
function main(){
const emprestimo = 3000
const pagamentoDiario = 200

const diasUteisNecessarios = calcularDiasUteisParaPagamento(emprestimo, pagamentoDiario)
console.log("Dias úteis necessários para concluir o pagamento:", diasUteisNecessarios)
}

function calcularDiasUteisParaPagamento(emprestimo, pagamentoDiario) {
    let saldo = emprestimo;
    let diasUteis = 0

    while (saldo > 0) {
        if (diasUteis % 7 !== 0 && diasUteis % 7 !== 6) { 
            saldo -= pagamentoDiario;
            saldo *= 1 + 0.0085
        }
        
        diasUteis++
    }

    return diasUteis
}


