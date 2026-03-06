alert(`SEJA BEM-VINDO - CALCULADORA ELÉTRICA CTWMI82!

Uma calculadora capaz de converter WATTS/QUILOWATTS para descobrir o custo mensal de um certo eletrodoméstico!

Desenvolvido por: Thiago Rafael Mathias - MI82`);

let nomeEletrodomestico = prompt("Digite o nome do ELETRODOMÉSTICO: ");

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