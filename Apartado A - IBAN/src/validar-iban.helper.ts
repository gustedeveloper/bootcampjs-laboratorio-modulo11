import { electronicFormatIBAN, isValidIBAN } from "ibantools";
import { bancos, InfoBanco } from "./validar-iban.model";

const mensajeFormato = document.querySelector(".bien-formado");
const mensajeValidez = document.querySelector(".valido");
const bancoCodigo = document.querySelector(".banco");

const patron =
  /^(ES)(\d{2})[- ]?(?<codigoDeBanco>\d{4})[- ]?(?<codigoDeSucursal>\d{4})[- ]?(?<digitoDeControl>\d{2})[- ]?(?<numeroDeCuenta>\d{10})$/;

export const obtenerInput = () => {
  let textoInput = "";
  const inputValidar = document.getElementById("validar");
  if (inputValidar && inputValidar instanceof HTMLInputElement) {
    textoInput = inputValidar.value;
  }
  return textoInput;
};

export const comprobarFormatoIBAN = (iban: string): string => {
  const formatoValido = iban.match(patron);

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

export const extraccionDatos = (iban: string) => {
  const coincidencia = patron.exec(iban);
  if (coincidencia) {
    const { codigoDeBanco, codigoDeSucursal, digitoDeControl, numeroDeCuenta } =
      coincidencia.groups as any;
    const infoBanco: InfoBanco = {
      codigoDeBanco: codigoDeBanco,
      codigoDeSucursal: codigoDeSucursal,
      digitoDeControl: digitoDeControl,
      numeroDeCuenta: numeroDeCuenta,
    };
    return infoBanco;
  } else {
    throw new Error("Error al extraer datos");
  }
};

export const establecerBanco = (codigoDeBanco: string) => {
  if (bancoCodigo && bancoCodigo instanceof HTMLParagraphElement) {
    const banco = bancos.find((banco) => banco.Código === codigoDeBanco);
    if (banco) {
      bancoCodigo.innerText = banco?.Nombre;
    } else {
      throw new Error("No se he encontrado el banco");
    }
  }
};
