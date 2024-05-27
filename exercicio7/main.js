let primeiro = document.querySelector("#primeiro");
let segundo = document.querySelector("#segundo");
let resultado = document.querySelector("#resultado");
let btn = document.querySelector("#btn");

function validaNumero()
{
    if(primeiro.value != segundo.value)
        {
            if(primeiro.value > segundo.value)
                {
                    resultado.textContent = "Primeiro numero é maior que o segundo";
                }
            else
                {
                    resultado.textContent = "Primeiro numero é menor que o segundo";
                }
        }
    else
        {
            resultado.textContent = "O primeiro numero é igual o segundo";
        }
}

btn.addEventListener("click", validaNumero);