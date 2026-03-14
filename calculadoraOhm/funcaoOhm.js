let voltagem = 0, ohms = 0, amperagem = 0, resultado = 0;

function opcaoCalc4() {
    alert(`SEJA BEM VINDO - CALCULADORA DE TENSÃO, RESISTÊNCIA E CORRENTE ATRAVÉS DA LEI DE OHM!

• Uma calculadora capaz de calcular a tensão/resistência ou corrente através da FORMÚLA DA LEI DE OHM!

Desenvolvida por: Thiago Rafael Mathias - MI82`);

    let escolhaCalc4 = parseInt(prompt(`Digite uma das opções de cálculo abaixo:
    
(1) - Calcular a TENSÃO tendo os valores de resistência e corrente
(2) - Calcular a RESISTÊNCIA tendo os valores de tensão e corrente
(3) - Calcular a CORRENTE tendo os valores de tensão e resistência

Usuário, digite a sua escolha:`))

    switch(escolhaCalc4) {
        case 1:
            tensao();
            break;
        case 2:
            resistencia();
            break;
        case 3:
            corrente();
            break;
        default:
            alert(`OPÇÃO DE CÁLCULO COM A FÓRMULA DA LEI DE OHM INVÁLIDA!`);
            break;
    }
}

function tensao() {
    alert(`Você escolheu calcular a TENSÃO, segue abaixo a fórmula para descobrir ela!
                
TENSÃO (U) = RESISTÊNCIA (R) x CORRENTE (I)

Clique em OK para prosseguir!`);
    ohms = parseFloat(prompt(`Digite a quantidade de RESISTÊNCIA (em Ohm) para a realização do cálculo: `));
    amperagem = parseFloat(prompt(`Digite a quantidade de CORRENTE (em Ampere) para a realização do cálculo: `));
    voltagem = ohms * amperagem;
    alert(`----------RESULTADOS---------
        
Calcular: TENSÃO

TENSÃO (U) = ` + ohms + `Ω  x  ` + amperagem + `A

RESULTADO (Volts): ` + voltagem + `V`);
}

function resistencia() {
    alert(`Você escolheu calcular a RESISTÊNCIA, segue abaixo a fórmula para descobrir ela!
                
RESISTÊNCIA (R) = TENSÃO (U) / CORRENTE (I)

Clique em OK para prosseguir!`);
    voltagem = parseFloat(prompt(`Digite a quantidade de TENSÃO (em Volts) para a realização do cálculo: `));
    amperagem = parseFloat(prompt(`Digite a quantidade de CORRENTE (em Ampere) para a realização do cálculo: `));
    ohms = voltagem / amperagem;
    alert(`----------RESULTADOS---------
        
Calcular: RESISTÊNCIA

RESISTÊNCIA (Ohm) = ` + voltagem + `V  /  ` + amperagem + `A

RESULTADO (Ohm): ` + ohms + `Ω`);
}

function corrente() {
    alert(`Você escolheu calcular a CORRENTE, segue abaixo a fórmula para descobrir ela!
                
CORRENTE (I) = TENSÃO (U) / RESISTÊNCIA (R)

Clique em OK para prosseguir!`);
    voltagem = parseFloat(prompt(`Digite a quantidade de TENSÃO (em Volts) para a realização do cálculo: `));
    ohms = parseFloat(prompt(`Digite a quantidade de RESISTÊNCIA (em Ohms) para a realização do cálculo: `));
    amperagem = voltagem / ohms;
    alert(`----------RESULTADOS---------
        
Calcular: CORRENTE

CORRENTE (Ampere) = ` + voltagem + `V  /  ` + ohms + `Ω

RESULTADO (Ampere): ` + amperagem + `A`);
}