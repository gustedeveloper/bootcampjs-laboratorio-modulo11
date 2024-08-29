import "./style.css";
import {
  obtenerInput,
  comprobarFormatoIBAN,
  esIBANValido,
  unificarIBAN,
  extraccionDatos,
} from "./validar-iban.helper";

import { establecerDatosBanco } from "./validar-iban.ui";

const botonValidar = document.querySelector(".validar");

const leerIBAN = () => {
  const iban = obtenerInput();
  const ibanFormatoValido = comprobarFormatoIBAN(iban);
  const ibanUnificado = unificarIBAN(ibanFormatoValido);
  const ibanValido = esIBANValido(ibanUnificado);
  const infoBanco = extraccionDatos(ibanValido);
  establecerDatosBanco(infoBanco);
};

if (botonValidar && botonValidar instanceof HTMLButtonElement) {
  botonValidar.addEventListener("click", leerIBAN);
}
