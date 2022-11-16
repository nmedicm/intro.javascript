
const inputTextoCantidad = document.querySelector("#inputTextoCantidad");
const inputValor = document.querySelector("#inputValor");
const btnCalcular = document.querySelector("#btnCalcular");
const inputTotal = document.querySelector("#inputTotal");
const circle = document.querySelector("#circle");
const selector = document.querySelector("#selector");
const inputCantidadTotal = document.querySelector("#inputCantidadTotal")


selector.addEventListener("change", () => {
    circle.style.backgroundColor = selector.value;
})   


btnCalcular.addEventListener("click", () => {
    let quantity = Number(inputTextoCantidad.value);
    let value = Number(inputValor.textContent);
    if (quantity > 0) {
      const total = quantity * value;
      inputCantidadTotal.innerHTML = quantity;
  
      const inputValorUsd = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(total);
  
      inputTotal.innerHTML = inputValorUsd;
    } else {
      alert("el valor ingresado no valido");
    }
  });