let resultado = document.querySelector("#resultado");
let btn = document.querySelector("#btn");
let numeroPessoas = document.querySelector("#numeroPessoas");

function calcular()
{
    let ovo = numeroPessoas.value * 2;
    let queijo = numeroPessoas.value * 50;

    resultado.textContent = ("As " + numeroPessoas.value + " pessoas vão saborear " + ovo + " ovos mexidos com " + queijo + "g de queijo");
}

btn.addEventListener("click", calcular);