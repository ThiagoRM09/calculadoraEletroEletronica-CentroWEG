function watts() {
    let qtdWatts = parseFloat(prompt("Digite a quantidade de WATTS do eletrodoméstico digitado: "));
    let qtdHorasUso = parseInt(prompt("Digite o tempo de uso (em HORAS) diário do eletrodoméstico digitado: "));
    let consumoDiarioKWh = (qtdWatts * qtdHorasUso) / 1000;
    let valorPorKWh = 0.9;
    let custoDiario = consumoDiarioKWh * valorPorKWh;

    alert(`***RESULTADOS DO ELETRODOMÉSTICO***
    
    NOME DO ELETRODOMÉSTICO: ` + nomeEletrodomestico + 
    
    `
    \n-----------RESULTADOS POR DIA-------------
    CONSUMO DIÁRIO (KWh) : ` + consumoDiarioKWh + `KWh` + `
    CUSTO DIÁRIO levando em conta (R$ 0,90/KWh): R$ ` + custoDiario + 
    `
    \n-----------RESULTADOS POR MÊS-------------
    CONSUMO MENSAL (KWh) : ` + (consumoDiarioKWh * 30) + `KWh` + `
    CUSTO MENSAL levando em conta (R$ 0,90/KWh): R$ ` + (custoDiario * 30));
}