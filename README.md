# ⚡ calculadoraEletroEletronica-CentroWEG

Este projeto consiste em uma **calculadora eletroeletrônica desenvolvida em JavaScript**, capaz de realizar cálculos comuns utilizados em **eletrônica básica e elétrica**.

O objetivo do projeto é facilitar o cálculo de grandezas importantes como **tensão, corrente, resistência e potência**, além de incluir operações matemáticas auxiliares utilizadas nesses cálculos.

O projeto também foi criado com fins **educacionais**, servindo como prática de **lógica de programação, organização de código e modularização em JavaScript**.

---

# 📁 Estrutura do Projeto

A estrutura do projeto está organizada em **módulos separados**, onde cada pasta contém funções responsáveis por um tipo específico de cálculo.

```
calculadoraEletroEletronica-CentroWEG
│
├── index.html
├── main.js
│
├── calculadoraOhm
│   └── funcaoOhm.js
│
├── calculadoraResistor
│   └── funcaoResistor.js
│
├── calculadoraWatts
│   ├── funcaoParaWatts.js
│   └── funcaoParaQuiloWatts.js
│
└── calculadoraMult&Sub
    └── funcaoMultSub.js
```

Essa separação permite que cada funcionalidade fique **mais organizada, reutilizável e fácil de manter**.

---

# 🧠 Funcionalidades do Projeto

O sistema possui diferentes módulos de cálculo, cada um responsável por um tipo de operação eletroeletrônica.

## 🔌 Calculadora da Lei de Ohm

Arquivo responsável:

```
funcaoOhm.js
```

Permite calcular as três grandezas principais da eletricidade:

* **Tensão (V)**
* **Corrente (I)**
* **Resistência (R)**

Utilizando a fórmula da Lei de Ohm:

```
V = R × I
```

A calculadora permite descobrir qualquer uma dessas variáveis a partir das outras duas.

---

## 🔋 Conversão de Potência Elétrica

Arquivos responsáveis:

```
funcaoParaWatts.js
funcaoParaQuiloWatts.js
```

Esse módulo permite realizar a conversão entre:

* **Watts (W)**
* **Quilowatts (kW)**

Essas conversões são comuns em cálculos de consumo elétrico e potência de equipamentos.

---

## 🎨 Cálculo de Resistores (Código de Cores)

Arquivo responsável:

```
funcaoResistor.js
```

Esse módulo realiza cálculos relacionados ao **valor de resistores utilizando o código de cores**, que é um padrão utilizado na eletrônica para identificar o valor da resistência.

---

## ➗ Operações Matemáticas Auxiliares

Arquivo responsável:

```
funcaoMultSub.js
```

Esse módulo executa operações matemáticas básicas que auxiliam os outros cálculos:

* **Multiplicação**
* **Subtração**

Essas operações são utilizadas internamente em alguns dos cálculos da calculadora.

---

# 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias simples e amplamente utilizadas no desenvolvimento web:

* **HTML** → estrutura da interface
* **JavaScript** → lógica e cálculos do sistema
* **Git** → controle de versão
* **GitHub** → hospedagem do repositório

---

# 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em **aprendizado e prática de programação**, permitindo explorar conceitos como:

* organização de código em módulos
* criação de funções reutilizáveis
* lógica de programação aplicada a problemas reais
* aplicação de conceitos básicos de eletrônica

---

# 🚀 Possíveis Melhorias Futuras

Algumas melhorias que podem ser implementadas no futuro incluem:

* criação de uma **interface gráfica mais avançada**
* inclusão de **novas calculadoras elétricas**
* implementação de **mais conversores de unidades**
* melhoria no **tratamento de erros e validação de dados**

---

# 👨‍💻 Autor

Projeto desenvolvido por **Thiago Rafael Mathias** como prática de programação e aplicação de conceitos de eletrônica.
