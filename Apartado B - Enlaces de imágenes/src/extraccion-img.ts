import {
  extraerEnlacesImagenes,
  obtenerInput,
  pintarImagenes,
} from "./extraccion-img.helper";
import "./style.css";

const botonExtraerImagenes = document.querySelector(".extraer-imagenes");

const extraerImagenes = () => {
  const texto = obtenerInput();
  const enlacesImagenes = extraerEnlacesImagenes(texto);
  pintarImagenes(enlacesImagenes);
};

if (botonExtraerImagenes && botonExtraerImagenes instanceof HTMLButtonElement) {
  botonExtraerImagenes.addEventListener("click", extraerImagenes);
}
