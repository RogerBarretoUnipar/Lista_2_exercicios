let cotDolar = document.querySelector("#cotDolar");
let btn = document.querySelector("#btn");


function calcularSubida() {
    let cot1 = cotDolar.value * 1.01;
    let cot2 = cotDolar.value * 1.02;
    let cot5 = cotDolar.value * 1.05;
    let cot10 = cotDolar.value * 1.1;

    let mensagem = "Cotação +1%: " + cot1 + "\n" +
                   "Cotação +2%: " + cot2 + "\n" +
                   "Cotação +5%: " + cot5 + "\n" +
                   "Cotação +10%: " + cot10;

    alert(mensagem);
}


btn.addEventListener("click", calcularSubida);