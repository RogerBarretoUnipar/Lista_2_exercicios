let nota = document.querySelector("#nota");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

function precisaProva()
{
    if(nota.value > 4 && nota.value < 6)
        {
            resultado.textContent = "PRECISA FAZER PROVA SUBSTITUTA";
        }
    else if(nota.value > 6)
        {
            resultado.textContent = "aprovado";
        }
    else
        {
            resultado.textContent = "Reprovado";   
        }
}

btn.addEventListener("click", precisaProva);