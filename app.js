
const inputTextoCantidad = document.querySelector("#inputTextoCantidad");
const inputValor = document.querySelector("#inputValor");
const btnCalcular = document.querySelector("#btnCalcular");
const inputTotal = document.querySelector("#inputTotal");
const circle = document.querySelector("#circle");
const selector = document.querySelector("#selector");
const inputCantidadTotal = document.querySelector("#inputCantidadTotal")


selector.addEventListener("change", () => {
    circle.style.backgroundColor = selector.value;
    selector.value = "green"
    inputValor.textContent = "400000";
    selector.value = "silver"
    inputValor.textContent = "450000";
    selector.value = "blue"
    inputValor.textContent = "500000";
 })   



btnCalcular.addEventListener("click", () => {
    inputTotal.textContent = (inputTextoCantidad.value * inputValor.textContent);
    inputCantidadTotal.textContent = inputTextoCantidad.value;
})

