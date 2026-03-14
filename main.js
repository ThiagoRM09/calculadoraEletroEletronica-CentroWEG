let eletrodomestico = " ";

alert(`SEJA BEM-VINDO - CALCULADORA DE VÁRIAS FUNÇÕES DA AULA FUNDAMENTOS DA ELETROELETRÔNICA CTWMI82!

• Uma calculadora capaz de converter WATTS/QUILOWATTS para descobrir o custo mensal de um certo eletrodoméstico!
• Uma calculadora capaz de converter valor base para múltiplo/submúltiplo OU algum múltiplo/submúltiplo para valor base!
• Uma calculadora capaz de calcular a resistência de um RESISTOR!
• Uma calculadora capaz de calcular a tensão, corrente e a resistência através da FÓRMULA DA LEI DE OHM!

Desenvolvida por: Thiago Rafael Mathias - MI82`);

let escolhaOpcaoCalc = parseInt(prompt("DIGITE UMA DAS OPÇÕES DE CALCULADORA POSSÍVEL:\n\n(1) - Calculadora de WATTS/QUILOWATTS para consumo\n(2) - Calculadora de MÚLTIPLOS e SUBMÚLTIPLOS\n(3) - Calculadora de RESISTOR\n(4) - Calculadora de LEI DE OHM\n\nUsuário, faça a sua escolha: "));

switch(escolhaOpcaoCalc) {
    case 1: 
        alert(`SEJA BEM VINDO - CALCULADORA DE WATTS/QUILOWATTS PARA CONSUMO DE ELETRODOMÉSTICOS CTWMI82!

• Uma calculadora capaz de converter WATTS para consumo diário/mensal em kWh
• Uma calculadora capaz de converter QUILOWATTS para consumo diário/mensal em kWh

Desenvolvida por: Thiago Rafael Mathias - MI82`);
        eletrodomestico = prompt("Digite o nome do ELETRODOMÉSTICO: ");

        let escolhaUsuario = parseInt(prompt(`Após a digitação do eletrodoméstico, escolha uma das opções abaixo: 
        
        (1) - Unidade: WATTS (W)
        (2) - Unidade: QUILOWATTS (kW)
        
        Sua escolha: `));
        
        switch(escolhaUsuario) {
            case 1:
                watts();
                break;
            case 2:
                quiloWatts();
                break;
            default:
                alert("OPÇÃO DE UNIDADE INVÁLIDA!");
                break;
        }
        break;
    case 2:
        opcaoCalc2();
        break;
    case 3:
        opcaoCalc3();
        break;
    case 4:
        opcaoCalc4();
        break;
    default:
        alert("OPÇÃO DE CALCULADORA ESCOLHIDA INVÁLIDA!");
        break;
}