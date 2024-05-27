let alunos = document.querySelector("#alunos");
let turmas = document.querySelector("#turmas");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

function ajudaProf()
{
    let turmasTotal = parseInt(alunos.value/turmas.value);
    let alunosSobra = parseInt(alunos.value%turmas.value);

    alert(turmasTotal);
    alert(alunosSobra);
}

btn.addEventListener("click", ajudaProf);