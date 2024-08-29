import "./style.css";
import {
  obtenerInput,
  comprobarFormatoIBAN,
  esIBANValido,
  unificarIBAN,
  extraccionDatos,
  establecerBanco,
} from "./validar-iban.helper";

const botonValidar = document.querySelector(".validar");

const leerIBAN = () => {
  const iban = obtenerInput();
  const ibanFormatoValido = comprobarFormatoIBAN(iban);
  const ibanUnificado = unificarIBAN(ibanFormatoValido);
  const ibanValido = esIBANValido(ibanUnificado);
  const infoBanco = extraccionDatos(ibanValido);
  establecerBanco(infoBanco.codigoDeBanco);
};

if (botonValidar && botonValidar instanceof HTMLButtonElement) {
  botonValidar.addEventListener("click", leerIBAN);
}
