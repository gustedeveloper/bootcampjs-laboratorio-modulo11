import { extraerEnlacesImagenes, obtenerInput } from "./extraccion-img.helper";
import "./style.css";

const botonExtraerImagenes = document.querySelector(".extraer-imagenes");

const extraerImagenes = () => {
  const texto = obtenerInput();
  extraerEnlacesImagenes(texto);
};

if (botonExtraerImagenes && botonExtraerImagenes instanceof HTMLButtonElement) {
  botonExtraerImagenes.addEventListener("click", extraerImagenes);
}
