let pessoa1 = document.querySelector("#pessoa1");
let pessoa2 = document.querySelector("#pessoa2");
let pessoa3 = document.querySelector("#pessoa3");
let idade1 = document.querySelector("#idade1");
let idade2 = document.querySelector("#idade2");
let idade3 = document.querySelector("#idade3");
let btn = document.querySelector("#btn");
let resultado = document.querySelector("#resultado");

const pessoas = [];

function calculaIdade() {
    const pessoa1Nome = pessoa1.value;
    const pessoa2Nome = pessoa2.value;
    const pessoa3Nome = pessoa3.value;
    const anoAtual = new Date().getFullYear(); 

    const pessoa1Idade = anoAtual - parseInt(idade1.value);
    const pessoa2Idade = anoAtual - parseInt(idade2.value);
    const pessoa3Idade = anoAtual - parseInt(idade3.value);

    const pessoa1Obj = { nome: pessoa1Nome, idade: pessoa1Idade };
    const pessoa2Obj = { nome: pessoa2Nome, idade: pessoa2Idade };
    const pessoa3Obj = { nome: pessoa3Nome, idade: pessoa3Idade };

    pessoas.push(pessoa1Obj, pessoa2Obj, pessoa3Obj);

    pessoas.sort((a, b) => b.idade - a.idade); 

    resultado.innerHTML = "";
    pessoas.forEach((pessoa, index) => {
        let posicao = "";
        switch(index) {
            case 0:
                posicao = "Pessoa mais velha";
                break;
            case 1:
                posicao = "Segunda pessoa mais velha";
                break;
            case 2:
                posicao = "Terceira pessoa mais velha";
                break;
            default:
                break;
        }
        resultado.innerHTML += `${posicao}: ${pessoa.nome}, idade: ${pessoa.idade} anos<br>`;
    });
}

btn.addEventListener("click", calculaIdade);
