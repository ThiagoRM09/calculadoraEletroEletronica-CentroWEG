let valorConvertido = 0;
alert(`***ATENÇÃO: NO MOMENTO, VOCÊ SÓ CONSEGUE EXECUTAR DE VALOR BASE PARA MÚLTIPLO/SUBMÚLTIPLO USANDO VALOR BASE PARA mili (m)!***`)
alert(`SEJA BEM VINDO - CALCULADORA DE MÚLTIPLOS E SUBMÚLTIPLOS CTWMI82!

Uma calculadora capaz de converter UNIDADE BASE para qualquer MÚLTIPLO/SUBMÚLTIPLO disponível

Desenvolvida por: Thiago Rafael Mathias - MI82`);

let unidadeMedida = prompt("Digite a unidade de medida (EXEMPLOS: W -> Watt | A -> Ampere) que será dada no resultado final: ");
let escolhaOpcao = parseInt(prompt(`Digite uma das opções abaixo para prosseguir com o programa:

(1) - Converter VALOR BASE para algum MÚLTIPLO/SUBMÚLTIPLO
(2) - Converter VALOR DE ALGUM MÚLTIPLO/SUBMÚLTIPLO para VALOR BASE

Usuário, digite a sua escolha: `));
switch(escolhaOpcao) {
    case 1:
        let valorBase = parseFloat(prompt("Digite o valor BASE para ser convertido em qualquer MÚLTIPLO/SUBMÚLTIPLO disponível: "));
        let escolhaMultSub = prompt(`Digite uma das opções abaixo de MÚLTIPLO/SUBMÚLTIPLO que irá converter o valor base: 
        Digite (G) -> Giga
        Digite (M) -> Mega
        Digite (k) -> Quilo
        Digite (m) -> Mili
        Digite (mc) para facilitar -> Micro (μ)
        Digite (n) -> Nano`)

        switch(escolhaMultSub) {
            case 'G':
                break;
            case 'M': 
                break;
            case 'k':
                break;
            case 'm':
                valorConvertido = valorBase * 1000;
                alert(`RESULTADOS DA CONVERSÃO! ` +
                `VALOR BASE: ` + valorBase + unidadeMedida + 
                `\nVALOR CONVERTIDO: ` + valorConvertido + 'm' + unidadeMedida);
                break;
            case 'mc':
                break;
            case 'n':
                break;
            case 'p':
                break;
            default:
                break;
        }
    //case 2:

    default: 
        alert("OPÇÃO DE ESCOLHA INVÁLIDA!")
}
