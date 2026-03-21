let faixa1 = 0, faixa2 = 0, faixa3 = 0, multiplicador = 0, min = 0, max = 0;

function opcaoCalc3() {
    alert(`SEJA BEM VINDO - CALCULADORA DE RESISTÊNCIA DE UM RESISTOR!

• Uma calculadora capaz de calcular a resistência de um resistor de 4 faixas ou de 5 faixas através das cores das faixas.

Desenvolvida por: Thiago Rafael Mathias - MI82`);

    let escolhaResistor = parseInt(prompt("Escolha uma das opções de resistor abaixo:\n\n(1) - 4 FAIXAS\n(2) - 5 FAIXAS\n\nUsuário, digite a sua escolha: "));
    
    switch(escolhaResistor) {
        case 1:
            alert(`Você escolheu o resistor de 4 faixas!

Antes de iniciarmos a entrada de dados das faixas, é importante saber que você deve colocar a faixa de tolerância na sua direita!

Clique em OK para prosseguir!`);
            faixa1 = parseInt(prompt(`Digite a cor da PRIMEIRA FAIXA DO SEU RESISTOR:

(0) - Preto
(1) - Marrom
(2) - Vermelho
(3) - Laranja
(4) - Amarelo
(5) - Verde
(6) - Azul
(7) - Violeta
(8) - Cinza
(9) - Branco

Usuário, digite a sua escolha: `));
            faixa2 = parseInt(prompt(`Digite a cor da SEGUNDA FAIXA DO SEU RESISTOR:

(0) - Preto
(1) - Marrom
(2) - Vermelho
(3) - Laranja
(4) - Amarelo
(5) - Verde
(6) - Azul
(7) - Violeta
(8) - Cinza
(9) - Branco

Usuário, digite a sua escolha: `));
            multiplicador = parseInt(prompt(`Digite a cor da TERCEIRA FAIXA (MULTIPLICADOR) DO SEU RESISTOR:
(0) - Preto
(1) - Marrom
(2) - Vermelho
(3) - Laranja
(4) - Amarelo
(5) - Verde
(6) - Azul
(7) - Violeta
(8) - Cinza
(9) - Branco
(10) - Ouro
(11) - Prata

Usuário, digite a sua escolha: `));
            switch(multiplicador) {
                case 0: 
                    multiplicador = 1;
                    break;
                case 1:
                    multiplicador = 10;
                    break;
                case 2:
                    multiplicador = 100;
                    break;
                case 3:
                    multiplicador = 1000;
                    break;
                case 4:
                    multiplicador = 10000;
                    break;
                case 5:
                    multiplicador = 100000;
                    break;
                case 6:
                    multiplicador = 1000000;
                    break;
                case 7:
                    multiplicador = 10000000;
                    break;
                case 8:
                    multiplicador = 100000000;
                    break;
                case 9:
                    multiplicador = 1000000000;
                    break;
                case 10:
                    multiplicador = 0.1;
                    break;
                case 11:
                    multiplicador = 0.01;
                    break;
                default:
                    alert(`ERRO NA DIGITAÇÃO DA FAIXA DO MULTIPLICADOR DO RESISTOR!`);
                    break;
            }
            if(faixa1 >= 0 && faixa1 <= 9 && faixa2 >= 0 && faixa2 <= 9) {
                resistencia = ((faixa1 * 10) + faixa2) * multiplicador;
            } else {
                alert(`DEVIDO AO ERRO NA DIGITAÇÃO DA FAIXA 1 OU DA FAIXA 2 NÃO É POSSÍVEL CALCULAR A RESISTÊNCIA!`);
            }
            tolerancia = parseInt(prompt(`Digite a cor da QUARTA FAIXA (TOLERÂNCIA) DO SEU RESISTOR:

(1) - Marrom
(2) - Vermelho
(3) - Ouro
(4) - Prata
(5) - Branco

Usuário, digite a sua escolha: `));
            switch(tolerancia) {
                case 1:
                    min = resistencia * 0.99;
                    max = resistencia * 1.01;
                    break;
                case 2:
                    min = resistencia * 0.98;
                    max = resistencia * 1.02;
                    break;
                case 3:
                    min = resistencia * 0.95;
                    max = resistencia * 1.05;
                    break;
                case 4:
                    min = resistencia * 0.90;
                    max = resistencia * 1.10;
                    break;
                case 5:
                    min = resistencia * 0.80;
                    max = resistencia * 1.20;
                    break;
                default:
                    alert(`ERRO NA DIGITAÇÃO DA FAIXA DE TOLERÂNCIA DO RESISTOR!`);
                    break;
            }
            alert(`RESULTADOS DO CÁLCULO DA RESISTÊNCIA - RESISTOR 4 FAIXAS
                
Resistência: ` + resistencia + `Ω (Ohm)
Tolerância (-): ` + min + `Ω (Ohm)
Tolerância (+): ` + max + `Ω (Ohm)`);
            break;
        case 2:
            alert(`Você escolheu o resistor de 5 faixas!

Antes de iniciarmos a entrada de dados das faixas, é importante saber que você deve colocar a faixa de tolerância na sua direita!

Clique em OK para prosseguir!`);
            faixa1 = parseInt(prompt(`Digite a cor da PRIMEIRA FAIXA DO SEU RESISTOR:

(0) - Preto
(1) - Marrom
(2) - Vermelho
(3) - Laranja
(4) - Amarelo
(5) - Verde
(6) - Azul
(7) - Violeta
(8) - Cinza
(9) - Branco

Usuário, digite a sua escolha: `));
            faixa2 = parseInt(prompt(`Digite a cor da SEGUNDA FAIXA DO SEU RESISTOR:

(0) - Preto
(1) - Marrom
(2) - Vermelho
(3) - Laranja
(4) - Amarelo
(5) - Verde
(6) - Azul
(7) - Violeta
(8) - Cinza
(9) - Branco

Usuário, digite a sua escolha: `));
            faixa3 = parseInt(prompt(`Digite a cor da TERCEIRA FAIXA DO SEU RESISTOR:

(0) - Preto
(1) - Marrom
(2) - Vermelho
(3) - Laranja
(4) - Amarelo
(5) - Verde
(6) - Azul
(7) - Violeta
(8) - Cinza
(9) - Branco

Usuário, digite a sua escolha: `));
            multiplicador = parseInt(prompt(`Digite a cor da QUARTA FAIXA (MULTIPLICADOR) DO SEU RESISTOR:
(0) - Preto
(1) - Marrom
(2) - Vermelho
(3) - Laranja
(4) - Amarelo
(5) - Verde
(6) - Azul
(7) - Violeta
(8) - Cinza
(9) - Branco
(10) - Ouro
(11) - Prata

Usuário, digite a sua escolha: `));
            switch(multiplicador) {
                case 0: 
                    multiplicador = 1;
                    break;
                case 1:
                    multiplicador = 10;
                    break;
                case 2:
                    multiplicador = 100;
                    break;
                case 3:
                    multiplicador = 1000;
                    break;
                case 4:
                    multiplicador = 10000;
                    break;
                case 5:
                    multiplicador = 100000;
                    break;
                case 6:
                    multiplicador = 1000000;
                    break;
                case 7:
                    multiplicador = 10000000;
                    break;
                case 8:
                    multiplicador = 100000000;
                    break;
                case 9:
                    multiplicador = 1000000000;
                    break;
                case 10:
                    multiplicador = 0.1;
                    break;
                case 11:
                    multiplicador = 0.01;
                    break;
                default:
                    alert(`ERRO NA DIGITAÇÃO DA FAIXA DO MULTIPLICADOR DO RESISTOR!`);
                    break;
            }
            if(faixa1 >= 0 && faixa1 <= 9 && faixa2 >= 0 && faixa2 <= 9 && faixa3 >= 0 && faixa3 <= 9) {
                resistencia = ((faixa1 * 100) + (faixa2 * 10) + faixa3) * multiplicador;
            } else {
                alert(`DEVIDO AO ERRO NA DIGITAÇÃO DA FAIXA 1, FAIXA 2 OU DA FAIXA 3 NÃO É POSSÍVEL CALCULAR A RESISTÊNCIA!`);
            }
            tolerancia = parseInt(prompt(`Digite a cor da QUINTA FAIXA (TOLERÂNCIA) DO SEU RESISTOR:

(1) - Marrom
(2) - Vermelho
(3) - Ouro
(4) - Prata
(5) - Branco

Usuário, digite a sua escolha: `));
            switch(tolerancia) {
                case 1:
                    min = resistencia * 0.99;
                    max = resistencia * 1.01;
                    break;
                case 2:
                    min = resistencia * 0.98;
                    max = resistencia * 1.02;
                    break;
                case 3:
                    min = resistencia * 0.95;
                    max = resistencia * 1.05;
                    break;
                case 4:
                    min = resistencia * 0.90;
                    max = resistencia * 1.10;
                    break;
                case 5:
                    min = resistencia * 0.80;
                    max = resistencia * 1.20;
                    break;
                default:
                    alert(`ERRO NA DIGITAÇÃO DA FAIXA DE TOLERÂNCIA DO RESISTOR!`);
                    break;
            }
            alert(`RESULTADOS DO CÁLCULO DA RESISTÊNCIA - RESISTOR 5 FAIXAS
                
Resistência: ` + resistencia + `Ω (Ohm)
Tolerância (-): ` + min + `Ω (Ohm)
Tolerância (+): ` + max + `Ω (Ohm)`);
            break;
        default:
            alert(`OPÇÃO DE RESISTOR INVÁLIDO!`)
            break;
    }
}