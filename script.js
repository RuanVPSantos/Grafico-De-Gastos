const graph = document.querySelector(".graph");
const balance = document.querySelector('.total');

const currency = function(number) {
    return new Intl.NumberFormat('en-IN', {style:'currency', currency:'INR', minimumFractionDigits: 2}.format(number));
}

var total = 0;
var max = 0;

for (dado in dados) {
    total += dados[dado].amount;
    if (dados[dado].amount > max) {
        max = dados[dado].amount;
    }
}


var adcgraph = "";

for (dado in dados) {
    adcgraph += "<div class='duo'><div class='floating'>"+ numeral(dados[dado].amount).format('$0,0.00') + "</div><div class='column unselected' id='" + dados[dado].day + "'></div><div class='desc'>" + dados[dado].day + "</div></div>"
}

balance.innerHTML = numeral(total).format('$0,0.00');
graph.innerHTML = adcgraph;


for (dado in dados) {
    var coluna = document.getElementById(dados[dado].day)
    coluna.style.height = ((dados[dado].amount/max) * 130 + "px")
}

var columns = document.querySelectorAll(".column");

const today = new Date(Date.now()).getDay() - 1

const iluminada = document.getElementById(dados[today].day);
iluminada.classList.add('selected')
iluminada.classList.remove('unselected');
iluminada.previousElementSibling.classList.add('plaquinha')
iluminada.previousElementSibling.classList.remove('floating')