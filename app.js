
const inputTextoCantidad = document.querySelector("#inputTextoCantidad");
const inputTextoColor = document.querySelector("#inputTextoColor");
const inputValor = document.querySelector("#inputValor");
const btnCalcular = document.querySelector("#btnCalcular");
const inputTotal = document.querySelector("#inputTotal");
const inputCantidadTotal = document.querySelector("#inputCantidadTotal")
const multiplicacion = inputTextoCantidad.value * inputValor

btnCalcular.addEventListener("click", () => {
    inputTotal.textContent = multiplicacion
    inputCantidadTotal.textContent = inputTextoCantidad.value;
})