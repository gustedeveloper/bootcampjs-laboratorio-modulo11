import "./style.css";
import {
  obtenerInput,
  comprobarFormatoIBAN,
  esIBANValido,
  unificarIBAN,
} from "./validar-iban.helper";

const botonValidar = document.querySelector(".validar");

const leerIBAN = () => {
  const iban = obtenerInput();
  const ibanFormatoValido = comprobarFormatoIBAN(iban);
  const ibanUnificado = unificarIBAN(ibanFormatoValido);
  const ibanValido = esIBANValido(ibanUnificado);
  console.log(ibanValido);
};

if (botonValidar && botonValidar instanceof HTMLButtonElement) {
  botonValidar.addEventListener("click", leerIBAN);
}
