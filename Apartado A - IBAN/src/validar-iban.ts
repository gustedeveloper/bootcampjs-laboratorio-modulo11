import "./style.css";
import {
  obtenerInput,
  comprobarFormatoIBAN,
  esIBANValido,
} from "./validar-iban.helper";

const botonValidar = document.querySelector(".validar");

const comprobarIBAN = () => {
  const iban = obtenerInput();
  comprobarFormatoIBAN(iban);
  esIBANValido(iban);
};

if (botonValidar && botonValidar instanceof HTMLButtonElement) {
  botonValidar.addEventListener("click", comprobarIBAN);
}
