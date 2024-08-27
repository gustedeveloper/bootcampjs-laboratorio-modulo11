import "./style.css";
import { obtenerInput, comprobarFormatoIBAN } from "./validar-iban.helper";

const botonValidar = document.querySelector(".validar");

const validarIBAN = () => {
  const iban = obtenerInput();
  comprobarFormatoIBAN(iban);
};

if (botonValidar && botonValidar instanceof HTMLButtonElement) {
  botonValidar.addEventListener("click", validarIBAN);
}
