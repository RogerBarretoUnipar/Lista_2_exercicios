let venda = document.querySelector("#venda");
let meta = document.querySelector("#meta");
let minimo = document.querySelector("#minimo");
let resultado = document.querySelector("#resultado");
let btn = document.querySelector("#btn");

function metasBatidas() {
    var vendaValor = parseFloat(venda.value);
    var metaValor = parseFloat(meta.value);
    var minimoValor = parseFloat(minimo.value);

    var percentualMeta = (vendaValor / metaValor) * 100;
    var percentualMinimo = (vendaValor / minimoValor) * 100;

    var resultadoTexto = "";

    if (vendaValor < minimoValor) {
        resultadoTexto += "Não bateu o mínimo. Porcentagem atingida do mínimo: " + percentualMinimo.toFixed(2) + "%";
    } else {
        if (vendaValor >= metaValor) {
            resultadoTexto += "Bateu a meta. Porcentagem atingida da meta: 100%. Porcentagem atingida do mínimo: 100%";
        } else {
            resultadoTexto += "Acima do mínimo porém não atingiu a meta. Porcentagem atingida da meta: " + percentualMeta.toFixed(2) + "%, Porcentagem atingida do mínimo: 100%";
        }
    }

    resultado.textContent = resultadoTexto;
}





btn.addEventListener("click", metasBatidas);