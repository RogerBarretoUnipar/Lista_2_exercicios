let pessoa1 = document.querySelector("#pessoa1");
let pessoa2 = document.querySelector("#pessoa2");
let pessoa3 = document.querySelector("#pessoa3");
let idade1 = document.querySelector("#idade1");
let idade2 = document.querySelector("#idade2");
let idade3 = document.querySelector("#idade3");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");


const idades = [idade1.value, idade2.value, idade3.value];

function calculaidade()
{
    alert(idades);
}

btn.addEventListener("click", calculaidade);