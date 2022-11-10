
const inputTextoCantidad = document.querySelector("#inputTextoCantidad");
const inputValor = 400000;
const btnCalcular = document.querySelector("#btnCalcular");
const inputTotal = document.querySelector("#inputTotal");
const circle = document.querySelector("#circle");
const selector = document.querySelector("#selector");
const inputCantidadTotal = document.querySelector("#inputCantidadTotal")


selector.addEventListener("change", () => {
    circle.style.backgroundColor = selector.value;
})

btnCalcular.addEventListener("click", () => {
    inputTotal.textContent = (inputTextoCantidad.value * inputValor);
    inputCantidadTotal.textContent = inputTextoCantidad.value;

})