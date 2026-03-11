function quiloWatts() {
    let qtdQWatts = parseFloat(prompt("Digite a quantidade de QUILOWATTS do eletrodoméstico digitado: "));
    let qtdWatts = qtdQWatts * 1000;
    let qtdHorasUso = parseInt(prompt("Digite o tempo de uso (em HORAS) diário do eletrodoméstico digitado: "));
    let consumoDiarioKWh = (qtdWatts * qtdHorasUso) / 1000;
    let valorPorKWh = parseFloat(prompt("Digite o custo do KWh: R$ "));;
    let custoDiario = consumoDiarioKWh * valorPorKWh;

    alert(`***RESULTADOS DO ELETRODOMÉSTICO***
    
    NOME DO ELETRODOMÉSTICO: ` + eletrodomestico + 
    
    `
    \n-----------RESULTADOS POR DIA-------------
    CONSUMO DIÁRIO (KWh) : ` + consumoDiarioKWh + `KWh` + `
    CUSTO DIÁRIO levando em conta (R$ 0,90/KWh): R$ ` + custoDiario + 
    `
    \n-----------RESULTADOS POR MÊS-------------
    CONSUMO MENSAL (KWh) : ` + (consumoDiarioKWh * 30) + `KWh` + `
    CUSTO MENSAL levando em conta (R$ 0,90/KWh): R$ ` + (custoDiario * 30));

}