let resultado = document.querySelector("#resultado");
let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let refri = document.querySelector("#refri");
let btn = document.querySelector("#btn");

function comandaPizza() {
    let totalPedido = (refri.value * 7.00) + 48.00;

    let mensagem = "Sabor 1: " + sabor1.value + "<br>" +
        "Sabor 2: " + sabor2.value + "<br>" +
        "Sabor 3: " + sabor3.value + "<br>" +
        "Sabor 4: " + sabor4.value + "<br>" +
        "Refris: " + refri.value + "<br>" +
        "Total pedido: " + totalPedido;

    resultado.innerHTML = mensagem;
}
btn.addEventListener("click", comandaPizza);