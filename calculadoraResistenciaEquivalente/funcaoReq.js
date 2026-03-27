function opcaoCalc5() {
    alert(`SEJA BEM VINDO - CALCULADORA DE RESISTÊNCIA EQUIVALENTE EM SÉRIE E EM PARALELO!

• Uma calculadora capaz de calcular a resistência equivalente de um circuito em SÉRIE E EM PARALELO.

Desenvolvida por: Thiago Rafael Mathias - MI82`);

    let escolhaEquivalente = parseInt(prompt("Digite uma das opções abaixo: \n\n(1) - Calcular a resistência equivalente de um circuito em SÉRIE!\n(2) - Calcular a resistência equivalente de um circuito em PARALELO!\n\nUsuário, digite a sua escolha: "));

    switch(escolhaEquivalente) {
        case 1:
            alert(`Você decidiu calcular a resistência equivalente de um ciruito em SÉRIE, segue abaixo a fórmula que será utilizada para o cálculo:
\nReq = Req1 + Req2 + ... + Reqn
\nClique em 'OK' para continuar!`);

            let qtdResistencias = parseInt(prompt("Digite a quantidade de RESISTÊNCIAS que serão digitadas para o cálculo em SÉRIE: "));

            for(let contador = 1; contador <= qtdResistencias; contador++) {
                resistencia = parseFloat(prompt("Digite a resistência de número " + contador + " (em Ω - Ohm): "));
                reqSerie += resistencia;
            }

            alert(`Com base nos ` + qtdResistencias + ` números dados, a resistência equivalente em SÉRIE é: ` + reqSerie + `Ω`);
            break;
        case 2:
            alert(`Você decidiu calcular a resistência equivalente de um ciruito em PARALELO, segue abaixo a fórmula que será utilizada para o cálculo:
\nReq = Req1 + Req2 + ... + Reqn
\nClique em 'OK' para continuar!`);

            qtdResistencias = parseInt(prompt("Digite a quantidade de RESISTÊNCIAS que serão digitadas para o cálculo em PARALELO: "));

            for(let contador = 1; contador <= qtdResistencias; contador++) {
                resistencia = parseFloat(prompt("Digite a resistência de número " + contador + " (em Ω - Ohm): "));
                reqSerie += resistencia;
            }

            alert(`Com base nos ` + qtdResistencias + ` números dados, a resistência equivalente em PARALELO é: ` + reqSerie + `Ω`);
            break;
        default:
            alert(`Opção de cálculo de resistência equivalente INVÁLIDA!`);
            break;
    }
}