import { electronicFormatIBAN, isValidIBAN, validateIBAN } from "ibantools";

const mensajeFormato = document.querySelector(".bien-formado");
const mensajeValidez = document.querySelector(".valido");

export const obtenerInput = () => {
  let textoInput = "";
  const inputValidar = document.getElementById("validar");
  if (inputValidar && inputValidar instanceof HTMLInputElement) {
    textoInput = inputValidar.value;
  }
  return textoInput;
};

export const comprobarFormatoIBAN = (iban: string) => {
  const regex =
    /^([A-Z]{2})(\d{2})[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{2})[- ]?(\d{10})$/;

  const formatoValido = iban.match(regex);

  if (mensajeFormato && mensajeFormato instanceof HTMLParagraphElement) {
    if (!formatoValido) {
      mensajeFormato.innerText = "El IBAN no está bien formado";
      throw new Error("Formato de IBAN no válido");
    } else {
      mensajeFormato.innerText = "El IBAN está bien formado";
    }
  }
};

export const esIBANValido = (iban: string) => {
  const ibanFormateado = electronicFormatIBAN(iban);
  if (mensajeValidez && mensajeValidez instanceof HTMLParagraphElement) {
    if (ibanFormateado) {
      if (isValidIBAN(ibanFormateado)) {
        mensajeValidez.innerText = "El IBAN es válido";
      } else {
        mensajeValidez.innerText = "El IBAN no es válido";
        console.log(validateIBAN(iban));
        throw new Error("El IBAN no es válido");
      }
    }
  }
};
