import { electronicFormatIBAN, isValidIBAN } from "ibantools";

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

export const comprobarFormatoIBAN = (iban: string): string => {
  const regex =
    /^([A-Z]{2})(\d{2})[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{2})[- ]?(\d{10})$/;

  const formatoValido = iban.match(regex);

  if (mensajeFormato && mensajeFormato instanceof HTMLParagraphElement) {
    if (!formatoValido) {
      mensajeFormato.innerText = "El IBAN no está bien formado";
      throw new Error("El formato de IBAN no es válido");
    } else {
      mensajeFormato.innerText = "El IBAN está bien formado";
    }
  }
  if (!iban) {
    throw new Error("No se ha introducido un IBAN válido");
  }
  return iban;
};

export const unificarIBAN = (iban: string): string => {
  const ibanFormateado = electronicFormatIBAN(iban);
  if (!ibanFormateado) {
    throw new Error("No se ha introducido un IBAN válido");
  }
  return ibanFormateado;
};

export const esIBANValido = (iban: string) => {
  if (mensajeValidez && mensajeValidez instanceof HTMLParagraphElement) {
    if (iban) {
      if (!isValidIBAN(iban)) {
        mensajeValidez.innerText = "El IBAN no es válido";
        throw new Error("El IBAN no es válido");
      } else {
        mensajeValidez.innerText = "El IBAN es válido";
      }
    }
  }
  if (!iban) {
    throw new Error("No se ha introducido un IBAN válido");
  }
  return iban;
};
