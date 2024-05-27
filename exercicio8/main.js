let numero = document.querySelector("#numero");
let resultado = document.querySelector("#resultado");
let btn = document.querySelector("#btn");

function ehPar()
{
    let parzinho = (numero.value %2);
    if(parzinho != 0)
        {
            resultado.textContent = "numero impar";
        }
    else
        {
            resultado.textContent = "numero par"
        }
}

btn.addEventListener("click", ehPar);