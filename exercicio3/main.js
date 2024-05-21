let numeroUm = document.querySelector("#numeroUm");
let numeroDois = document.querySelector("#numeroDois");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

function calcularTudo()
{
    let soma = numeroUm.value + numeroDois.value;
    let subtracao = numeroUm.value - numeroDois.value;
    let multiplicacao = numeroUm.value * numeroDois.value;
    let divisao = numeroUm.value / numeroDois.value;

    let mensagem = "Soma " + soma + "\n" +
                   "subtração: " + subtracao + "\n" +
                   "multiplicação: " + multiplicacao + "\n" +
                   "Divisão: " + divisao;
    
    resultado.textContent = mensagem;
}

btn.addEventListener("click", calcularTudo);