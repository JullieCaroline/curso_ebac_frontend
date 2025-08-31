const form1 = document.getElementById('formulario');

form1.addEventListener('submit', function(event) {
    event.preventDefault(); });

function verificar() {
const campoA = document.querySelector(".campoA");
const campoB = document.querySelector(".campoB");

const valorA = Number(campoA.value);
const valorB = Number(campoB.value);

if (valorB > valorA) {
    alert("Tudo certo!");
}
};