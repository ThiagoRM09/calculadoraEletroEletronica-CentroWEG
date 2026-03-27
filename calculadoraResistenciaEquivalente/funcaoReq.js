let reqSerie = 0, reqParalelo = 0;

function opcaoCalc5() {
    alert(`SEJA BEM VINDO - CALCULADORA DE RESISTÊNCIA EQUIVALENTE EM SÉRIE E EM PARALELO!
    
• Uma calculadora capaz de calcular a resistência equivalente de um circuito em SÉRIE E EM PARALELO.

Desenvolvida por: Thiago Rafael Mathias - MI82.`);

    let escolhaEquivalente = parseInt(prompt("Digite uma das opções abaixo: \n\n(1) - Calcular a resistência equivalente de um circuito em SÉRIE!\n(2) - Calcular a resistência equivalente de um circuito em PARALELO!\n\nUsuário, digite a sua escolha: "));

    switch(escolhaEquivalente) {
        case 1:
            alert(`Você decidiu calcular a resistência equivalente de um circuito em SÉRIE, segue abaixo a fórmula que será utilizada para o cálculo: 
\nReq = Res1 + Res2 + ... + ResN
\nClique em 'OK' para continuar!`);

            let qtdResistencias = parseInt(prompt("Digite a quantidade de RESISTÊNCIAS que serão digitadas para o cálculo em SÉRIE: "));

            for(let contador = 0; contador < qtdResistencias; contador++) {
                let resistencia = parseFloat(prompt("Digite a resistência de número " + (contador + 1) + " (em Ω - Ohm): "));
                reqSerie += resistencia;
            }

            alert(`Com base nos ` + qtdResistencias + ` números dados, a resistência equivalente em SÉRIE é: ` + reqSerie + `Ω`);
            break;
        case 2:
            alert(`Você decidiu calcular a resistência equivalente de um circuito em PARALELO, segue abaixo a fórmula que será utilizada para o cálculo: 
\n1/Req = 1/Res1 + 1/Res2 + ... + 1/ResN
\nClique em 'OK' para continuar!`);

            qtdResistencias = parseInt(prompt("Digite a quantidade de RESISTÊNCIAS que serão digitadas para o cálculo em PARALELO: "));

            for(let contador = 0; contador < qtdResistencias; contador++) {
                resistencia = parseFloat(prompt("Digite a resistência de número " + (contador + 1) + " (em Ω - Ohm): "));
                reqParalelo += 1 / resistencia;
            }

            reqParalelo = 1 / reqParalelo;

            alert(`Com base nos ` + qtdResistencias + ` números dados, a resistência equivalente em PARALELO é: ` + reqParalelo + `Ω`);
            break;
        default:
            alert(`Opção de cálculo de resistência equivalente INVÁLIDA!`);
            break;
    }
}