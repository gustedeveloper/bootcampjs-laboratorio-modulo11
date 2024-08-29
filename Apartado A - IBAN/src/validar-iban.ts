import "./style.css";
import {
  obtenerInput,
  comprobarFormatoIBAN,
  esIBANValido,
  unificarIBAN,
  extraccionDatos,
  establecerBanco,
  establecerSucursal,
  establecerDigitoControl,
} from "./validar-iban.helper";

const botonValidar = document.querySelector(".validar");

const leerIBAN = () => {
  const iban = obtenerInput();
  const ibanFormatoValido = comprobarFormatoIBAN(iban);
  const ibanUnificado = unificarIBAN(ibanFormatoValido);
  const ibanValido = esIBANValido(ibanUnificado);
  const infoBanco = extraccionDatos(ibanValido);
  establecerBanco(infoBanco.codigoDeBanco);
  establecerSucursal(infoBanco.codigoDeSucursal);
  establecerDigitoControl(infoBanco.digitoDeControl);
};

if (botonValidar && botonValidar instanceof HTMLButtonElement) {
  botonValidar.addEventListener("click", leerIBAN);
}
