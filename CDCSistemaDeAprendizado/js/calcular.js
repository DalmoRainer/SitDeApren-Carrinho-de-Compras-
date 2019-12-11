function calcularArlequina() {
    var x = document.getElementById("arlequina").value;
    total = x * 200;
    document.getElementById("totalArlequina").innerHTML = "R$" + total + ",00";
}
function calcularEnfermeira() {
    var x = document.getElementById("enfermeira").value;
    total = x * 150;
    document.getElementById("totalEnfermeira").innerHTML = "R$" + total + ",00";
}
function calcularZumbi() {
    var x = document.getElementById("zumbi").value;
    total = x * 170;
    document.getElementById("totalZumbi").innerHTML = "R$" + total + ",00";
}
function calcularBruxa() {
    var x = document.getElementById("bruxa").value;
    total = x * 250;
    document.getElementById("totalBruxa").innerHTML = "R$" + total + ",00";
}
function calcularVampiro() {
    var x = document.getElementById("vampiro").value;
    total = x * 230;
    document.getElementById("totalVampiro").innerHTML = "R$" + total + ",00";
}
function calcularVermelho() {
    var x = document.getElementById("vermelho").value;
    total = x * 270;
    document.getElementById("totalVermelho").innerHTML = "R$" + total + ",00";
}
function calcularProduto() {
    var u = document.getElementById("arlequina").value || 0;
    var v = document.getElementById("enfermeira").value || 0;
    var w = document.getElementById("zumbi").value || 0;
    var x = document.getElementById("bruxa").value || 0;
    var y = document.getElementById("vampiro").value || 0;
    var z = document.getElementById("vermelho").value || 0;
    var total = parseInt(u) + parseInt(v) + parseInt(w) + parseInt(x) + parseInt(y) + parseInt(z);
    document.getElementById("totalProduto").innerHTML = "Quantidade: " + total;
    var max = (parseInt(u) * 200) + (parseInt(v) * 150) + (parseInt(w) * 170) + (parseInt(x) * 250) + (parseInt(y) * 230) + (parseInt(z) * 270);
    document.getElementById("totalCompra").innerHTML = "R$" + max + ",00";
}

