function opcaoCalc2() {
    let valorConvertido = 0;
    let valorBase = 0, escolhaMultSub = ' '
    alert(`SEJA BEM VINDO - CALCULADORA DE MÚLTIPLOS E SUBMÚLTIPLOS CTWMI82!

• Uma calculadora capaz de converter VALOR BASE para qualquer MÚLTIPLO/SUBMÚLTIPLO
• Uma calculadora capaz de converter algum MÚLTIPLO/SUBMÚLTIPLO para VALOR BASE 

Desenvolvida por: Thiago Rafael Mathias - MI82`);

    let unidadeMedida = prompt("Digite a unidade de medida (EXEMPLOS: W -> Watt | A -> Ampere) que será dada no resultado final: ");
    let escolhaOpcao = parseInt(prompt(`Digite uma das opções abaixo para prosseguir com o programa:

    (1) - Converter VALOR BASE para algum MÚLTIPLO/SUBMÚLTIPLO
    (2) - Converter VALOR DE ALGUM MÚLTIPLO/SUBMÚLTIPLO para VALOR BASE

    Usuário, digite a sua escolha: `));
    switch(escolhaOpcao) {
        case 1:
            valorBase = parseFloat(prompt("Digite o valor BASE para ser convertido em qualquer MÚLTIPLO/SUBMÚLTIPLO disponível: "));
            escolhaMultSub = prompt(`Digite uma das opções abaixo de MÚLTIPLO/SUBMÚLTIPLO que irá converter o valor base: 
            Digite (G) -> Giga
            Digite (M) -> Mega
            Digite (k) -> Quilo
            Digite (m) -> Mili
            Digite (mc) para facilitar -> Micro (μ)
            Digite (n) -> Nano`);

            switch(escolhaMultSub) {
                case 'G':
                    valorConvertido = valorBase / 1000000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + 'G' + unidadeMedida);
                    break;
                case 'M': 
                    valorConvertido = valorBase / 1000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + 'k' + unidadeMedida);
                    break;
                case 'k':
                    valorConvertido = valorBase / 1000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + 'k' + unidadeMedida);
                    break;
                case 'm':
                    valorConvertido = valorBase * 1000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + 'm' + unidadeMedida);
                    break;
                case 'mc':
                    valorConvertido = valorBase * 1000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + 'μ' + unidadeMedida);
                    break;
                case 'n':
                    valorConvertido = valorBase * 1000000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + 'n' + unidadeMedida);
                    break;
                case 'p':
                    valorConvertido = valorBase * 1000000000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + 'p' + unidadeMedida);
                    break;
                default:
                    break;
            }
            break;
        case 2:
            escolhaMultSub = prompt(`Digite o MÚLTIPLO/SUBMÚLTIPLO que sua operação se encontra PARA CONVERTER para o VALOR BASE: 
            Digite (G) -> Giga
            Digite (M) -> Mega
            Digite (k) -> Quilo
            Digite (m) -> Mili
            Digite (mc) para facilitar -> Micro (μ)
            Digite (n) -> Nano`);
            valorBase = parseFloat(prompt("Digite o valor que acompanha do MÚLTIPLO/SUBMÚLTIPLO para ser convertido para VALOR BASE: "));
            switch(escolhaMultSub) {
                case 'G':
                    valorConvertido = valorBase * 1000000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + 'G' + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + unidadeMedida);
                    break;
                case 'M': 
                    valorConvertido = valorBase * 1000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + 'M' + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + unidadeMedida);
                    break;
                case 'k':
                    valorConvertido = valorBase * 1000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + 'k' + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + unidadeMedida);
                    break;
                case 'm':
                    valorConvertido = valorBase / 1000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + 'm' + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + unidadeMedida);
                    break;
                case 'mc':
                    valorConvertido = valorBase / 1000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + 'μ' + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + unidadeMedida);
                    break;
                case 'n':
                    valorConvertido = valorBase / 1000000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + 'n' + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + unidadeMedida);
                    break;
                case 'p':
                    valorConvertido = valorBase / 1000000000000;
                    alert(`RESULTADOS DA CONVERSÃO! ` +
                    `VALOR BASE: ` + valorBase + 'p' + unidadeMedida + 
                    `\nVALOR CONVERTIDO: ` + valorConvertido + unidadeMedida);
                    break;
                default:
                    break;
            }
            break;
        default: 
            alert("OPÇÃO DE ESCOLHA INVÁLIDA!");
            break;
    }
}