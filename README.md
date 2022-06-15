# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Os usuários devem ser capazes de:

- Ver o gráfico de barras e, ao passar o mouse sobre cada barra individual, ver a quantidade precisa despendida em cada dia;
- Ver a barra do dia atual em cor diferente das outras barras
- Ver um layout otimizado do conteúdo que veria em função do tamanho da tela
- Ver, ao passar o mouse sobre as barras, os valores despendidos nos dias.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/RuanVPSantos/Grafico-De-Gastos)
- Live Site URL: [Rodando](https://ruanvpsantos.github.io/Grafico-De-Gastos/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Numeral.js](http://numeraljs.com/) - numeral.js library


### What I learned

Esse foi um desafio interessante, principalmente pelo limite entre o quanto deveria ter sua alocação dada dinamicamente e o quanto o deveria ser feito estaticamente. Optei, portanto, em manter alocado dinamicamente o dia da semana, usando a biblioteca date e a soma presente na aba de gastos do mês:

```js
const today = new Date(Date.now()).getDay() - 1

const iluminada = document.getElementById(dados[today].day);
iluminada.classList.add('selected')
iluminada.classList.remove('unselected');
iluminada.previousElementSibling.classList.add('plaquinha')
iluminada.previousElementSibling.classList.remove('floating')
```
```js
for (dado in dados) {
    total += dados[dado].amount;
    if (dados[dado].amount > max) {
        max = dados[dado].amount;
    }
}
```

Além disso, de forma ainda mais interessante, o tamanho das barras é dado com base nas relações internas entre elas, segue o código explicativo:

```js
for (dado in dados) {
    var coluna = document.getElementById(dados[dado].day)
    coluna.style.height = ((dados[dado].amount/max) * 130 + "px")
}
```

Onde max é dado pelo valor máximo que os gastos semanais atingiram e 130 o limite de altura estabelecido.
As divs contendo os dias da semana, os nomes abaixo e os cards são criadas, também, dinamicamente, o que automatiza mais a possibilidade de alteração dos dados.


### Continued development

Os próximos projetos também focarão na área de front end. JS é uma tecnologia muito abrangente, e sua relação com os outros elementos na página é surpreendentemente vasta e rica. O objetivo dessa continuação é compreender os conceitos obscuros, refinar as técnicas já aprendidas e aperfeiçoar a habilidade de desenvolvimento front end com um todo. 

### Useful resources

- [Numeral.js](http://numeraljs.com/) - Essa biblioteca ajudou na formatação dos números para dólar. Muito útil, para criar dinamismo à página


## Author

- Frontend Mentor - [@RuanVPSantos](https://www.frontendmentor.io/profile/RuanVPSantos)
- Linkedin - [Ruan Santos](https://www.linkedin.com/in/ruan-santos-a1318a219/)