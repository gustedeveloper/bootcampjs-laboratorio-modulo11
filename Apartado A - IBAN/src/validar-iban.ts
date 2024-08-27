import "./style.css";

const botonValidar = document.querySelector(".validar");

const obtenerInput = () => {
  let textoInput = "";
  const inputValidar = document.getElementById("validar");
  if (inputValidar && inputValidar instanceof HTMLInputElement) {
    textoInput = inputValidar.value;
  }
  return textoInput;
};

if (botonValidar && botonValidar instanceof HTMLButtonElement) {
  botonValidar.addEventListener("click", obtenerInput);
}
